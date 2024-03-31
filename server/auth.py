from flask import Blueprint,jsonify,request,make_response
from models import User,bcrypt,db,TokenBlocklist
from flask_jwt_extended import create_access_token,create_refresh_token,jwt_required,get_jwt,get_jwt_identity
from flask_jwt_extended import get_jwt_identity

auth_bp = Blueprint('auth', __name__)
# fix phonenumber verification
# fix user firstname and lastname
@auth_bp.post('/register')
def register():
    data = request.get_json()
    username = data['username']
    phone = data['phone']
    email = data['email']
    address = data['address']
    hashed_password = data['password']
# check username,email exists in database
    user = User.query.filter_by(username=username).first()
    emailaddress = User.query.filter_by(email=email).first()
    phoneNumber = User.query.filter_by(phone=phone).first()

    if user:
        return {'error':'username already exists rename and try again'},404
    if emailaddress:
        return {'error':'email already exists rename and try again'},404
    if phoneNumber:
         return {'error':'phone number already exists rename and try again'},404
    else:
        # password = bcrypt.generate_password_hash(hashed_password.encode('utf-8')).decode('utf-8')
        new_user = User(username=username,phone=phone,email=email,address=address,password=hashed_password)
        db.session.add(new_user)
        db.session.commit() 
        send_user_signup_mail(new_user)
        return jsonify({
            "message": "User registered successfully",
            "user":new_user.serialize()
        }), 200 

def send_user_signup_mail(user):
    from app import mail
    subject = "Welcome to Evergreen Bank"
    body = f"Dear {user.username},\n\nThank you for registering on our Evergreen Bank. We extend our sincere gratitude to you for choosing Evergreen Bank as your financial institution of choice. Your decision to entrust us with your financial needs is truly appreciated.\n\nShould you require any assistance or have any inquiries, Please do not hesitate to reach out to us. Our dedicated team is here to provide you with the highest level of service and support.\n\n Best regards,\n Evergreen Bank Team"
    recipients = [user.email]
    mail.send_message(subject=subject, recipients=recipients, body=body)
 
    
    
@auth_bp.post('/login')
def login(): 
    data = request.get_json()
    username = data['username']
    user = User.query.filter_by(username = username).first()
    if not user:
        return {'error': 'User not registered'}, 401 
    
    if not bcrypt.check_password_hash(user.hashed_password,data['password']):
                return {'error': '401 Unauthorized'}, 401 

    access_token = create_access_token(identity=user.username)
    refresh_token = create_refresh_token(identity=user.username)  
    return jsonify(
        {
            "message": "logged in",
            "tokens": {
                "access": access_token,
                "refresh": refresh_token
            }
        }

    ), 200

@auth_bp.get('/whoami')
@jwt_required()
def whoami():
    claims = get_jwt()
    return jsonify({"mesasge":"token","claims":claims})

@auth_bp.get('/refresh')
@jwt_required(refresh=True)
def refresh_access():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity)
    return jsonify({"access_token":access_token})
    
@auth_bp.get('/logout')
@jwt_required(verify_type=False) #false provides both access and refresh tokens
def logout_user():
    jwt = get_jwt()

    jti = jwt['jti']
    token_type = jwt['type']

    token_blocklist = TokenBlocklist(jti=jti)

    db.session.add(token_blocklist)
    db.session.commit()

    return jsonify({"message":f"{token_type} token revoked successfully"}),200

