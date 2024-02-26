from flask import Blueprint,jsonify,request,make_response
from models import User,bcrypt,db
from flask_jwt_extended import create_access_token,create_refresh_token

auth_bp = Blueprint('auth', __name__)

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

    if user:
        return {'error':'username already exists rename and try again'},404
    if emailaddress:
        return {'error':'email already exists rename and try again'},404
    else:
        password = bcrypt.generate_password_hash(hashed_password.encode('utf-8')).decode('utf-8')
        newuser = User(username=username,phone=phone,email=email,address=address,hashed_password=password)
        db.session.add(newuser)
        db.session.commit() 
        response = make_response(jsonify(newuser.serialize()), 201)
        return response  
    
    
@auth_bp.post('/login')
def login(): 
    data = request.get_json()
    username = data['username']
    user = User.query.filter_by(username = username).first()
    if not user:
        return {'error': '401 Unauthorized'}, 401 
    else:
        if bcrypt.check_password_hash(user.hashed_password,data['password']):
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

#            class Logout(Resource):
#     def delete(self):
#         if session.get('user_id'):
#             session['user_id'] = None
#             return {}, 204
#         else:
#             return {'error': '401 Unauthorized'}, 401
        
# api.add_resource(Logout, '/logout')