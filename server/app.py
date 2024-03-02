#app
import os

from flask_jwt_extended import JWTManager,jwt_required,get_jwt_identity
from models import User,Account,Transaction,db,Reviews, Contact,TokenBlocklist
from flask_migrate import Migrate
from flask import Flask,make_response,jsonify,request,render_template
from flask_cors import CORS
from flask_restful import Api,Resource
from flask_bcrypt import Bcrypt
from werkzeug.exceptions import NotFound
from auth import auth_bp
from users import user_bp
import random

from dotenv import load_dotenv
load_dotenv()

app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/build',
    template_folder='../client/build'
    )



app.config['JWT_SECRET_KEY'] = b'\xb2\xd3B\xb9 \xab\xc0By\x13\x10\x84\xb7M!\x11'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 24 * 60 * 60
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bank.db'
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI') #render database url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
# app.secret_key = b'\xb2\xd3B\xb9 \xab\xc0By\x13\x10\x84\xb7M!\x11'


db.init_app(app)
migrate = Migrate(app,db)
api=Api(app)
bcrypt = Bcrypt(app)
CORS(app) #connect frontend 
jwt = JWTManager()
jwt.init_app(app)

# register blueprint
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(user_bp, url_prefix='/user')

#additional claims
@jwt.additional_claims_loader
def make_additional_claims(identity):
    if identity == 'user1':
        return {"is_staff": True}
    return{"is_staff": False}

         



# jwt error handler
@jwt.expired_token_loader
def expired_token(jwt_header,jwt_data):
    return jsonify({'message': 'The token has expired.','error':'token expired'}), 401

@jwt.invalid_token_loader
def invalid_token(error):
    return jsonify({'message': 'Does not contain a valid token.','error':'invalid token'}), 401

@jwt.unauthorized_loader
def missing_token(error):
    return jsonify({'message': 'Request does not contain an access token.', 'error':'token missing'}), 401


@jwt.token_in_blocklist_loader #check if the jwt is revocked
def token_in_blocklist(jwt_header,jwt_data):
    jti = jwt_data['jti']

    token = db.session.query(TokenBlocklist).filter(TokenBlocklist.jti == jti).scalar()
# if token is none : it will return false 
    return token is not None


@app.errorhandler(NotFound)
def handle_not_found(e):
    return render_template('index.html', title='Homepage', message='Welcome to our website!')



class CreateAccount(Resource):
    @jwt_required()
    def get(self):
        current_user = get_jwt_identity()
        user = User.query.filter_by(username=current_user).first()

        if not user:
            return {'message': 'User not found'}, 404

        accounts = Account.query.filter(Account.user_id == user.id).all()
        account = [a.serialize() for a in accounts]
        if not account:
            return {'message': 'Account not found for the specified user'}, 404

        response = make_response(jsonify(account), 200)
        return response

    @jwt_required()
    def post(self):
        data = request.get_json()
        current_user = get_jwt_identity()
     
        user = User.query.filter_by(username=current_user).first()
        if not user:
            return {'message': 'User not found'}, 404
        else:
            account_number = ''.join(str(random.randint(0, 9)) for _ in range(10))
            account_type = data['account_type']
            balance = data.get('balance', 1000)
            
            newaccount = Account(account_type=account_type,account_number=account_number,balance=balance,user_id=user.id)
            db.session.add(newaccount)
            db.session.commit()

            response = make_response(jsonify(newaccount.serialize()), 200)
            return response
    @jwt_required()
    def patch(self):
        current_user = get_jwt_identity()
        user = User.query.filter_by(username=current_user).first()
        if not user:
            return {'message': 'User not found'}, 404
        else:
            account = Account.query.filter_by(user_id=user.id).first()
            if not account:
                return {'message': 'Account not found for the specified user'}, 404
            else:
                data = request.get_json()
                account_type = data['account_type']
                account.account_type = account_type
                db.session.commit()
                response = make_response(jsonify(account.serialize()), 200)
                return response
              
api.add_resource(CreateAccount, '/account')


class GetTransaction (Resource):
    @jwt_required()
    def get(self):
       current_user = get_jwt_identity()
       user = User.query.filter_by(username=current_user).first()  
       if not user:
           return {'message': 'user cannot be found '}, 404
       
       transactions = Transaction.query.filter_by(user_id=user.id).all()
       if not transactions:
        return {'message': 'No transaction found for this user'}, 404
       else:
        transaction = [t.serialize() for t in transactions]
        response = make_response(jsonify(transaction), 200)
        return response
      
  
    @jwt_required()
    def post(self):
        data = request.get_json()
        current_user = get_jwt_identity()
        amount = data.get('amount')
        transaction_type = data.get('transaction_type')

        user = User.query.filter_by(username=current_user).first()

        if not user:
            return {'message': 'User not found'}, 404

        receiver_username = data.get('receiver_id')
        if transaction_type == 'deposit':
            receiver = User.query.filter_by(username=receiver_username).first()
            if not receiver:
                return {'message': 'Receiver not found'}, 404
            if receiver_username == current_user:
                return {'message': 'Cannot deposit into your own account'}, 400
        
        account_number = data.get('account_number')
        if not account_number:
            return {'message': 'Account number is required for withdrawal'}, 400

        account = Account.query.filter_by(account_number = account_number ,user_id=user.id).first()

        if not account:
            return {'message': 'Account not found for the specified user'}, 404
        
        try:
            amount = int(amount)
        except ValueError:
            return {'message': 'Amount must be a valid integer'}, 400

        if amount < int(0):
            return {'message': 'Amount must be non-negative'}, 400
        
        # Check if the withdrawal amount is equal to the account balance
        if transaction_type == 'withdraw' and amount == account.balance:
            return {'message': 'Cannot withdraw an amount equal to the account balance'}, 400


        if transaction_type not in ('withdraw', 'deposit'):
            return {'message': 'Invalid transaction type'}, 400

        # Check if the withdrawal amount exceeds the account balance
        if transaction_type == 'withdraw' and amount > account.balance:
            return {'message': 'Insufficient funds'}, 400
        # check is amount 
        if transaction_type == 'deposit' and amount == account.balance:
            return {'message': 'Cannot deposit an amount equal to the account balance'}, 400

        if transaction_type == 'withdraw':
            account.balance -= amount
        elif transaction_type == 'deposit':
            account.balance -= amount
            if account.balance <= amount:
                return {'message': 'cannot transfer funds','error': 'check balance'}, 400
            # Deposit into receiver's account
            receiver_account = Account.query.filter_by(user_id=receiver.id).first()
            if not receiver_account:
                return {'message': 'Receiver does not have an account'}, 404
            receiver_account.balance += amount

        # Create a new transaction record
        new_transaction = Transaction(amount=amount, transaction_type=transaction_type, receiver_id=receiver.id if transaction_type == 'deposit' else None,
                                      user_id=user.id, account_id=account.id)
        db.session.add(new_transaction)
        db.session.commit()

        response_data = {
            "transaction": new_transaction.serialize(),
            "balance": account.balance
        }

        response = make_response(jsonify(response_data), 200)
        return response

api.add_resource(GetTransaction, '/transaction')
class ReviewList(Resource):
    def get(self):
        get_reviews = [review.serialize() for review in Reviews.query.all()]
        response = make_response(jsonify(get_reviews), 200)
        return response
api.add_resource(ReviewList, '/reviews')

class ContactList(Resource):
    def post(self):
        data = request.get_json()
        full_name = data['full_name']
        email = data['email']
        message = data['message']

        new_contact = Contact(full_name=full_name, email=email, message=message)
        db.session.add(new_contact)
        db.session.commit()

        response = make_response(jsonify(new_contact.serialize()), 200)
        return response
    
api.add_resource(ContactList, '/contact')

if __name__ == '__main__':
    app.run(port=5555, debug=True)



    # add role jwt -admin /admin
    # user -/user