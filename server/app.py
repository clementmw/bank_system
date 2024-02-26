#app
from flask_jwt_extended import JWTManager,jwt_required,get_jwt_identity
from models import User,Account,Transaction,db,Reviews, Contact
from flask_migrate import Migrate
from flask import Flask,make_response,jsonify,request,session
from flask_cors import CORS
from flask_restful import Api,Resource
from flask_bcrypt import Bcrypt
from werkzeug.exceptions import NotFound
from auth import auth_bp
from users import user_bp
import random



app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = b'\xb2\xd3B\xb9 \xab\xc0By\x13\x10\x84\xb7M!\x11'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 24 * 60 * 60
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bank.db'
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


@app.errorhandler(NotFound)
def handle_not_found(e):
    response= make_response("NotFound: The requested resource not found", 404)
    return response

@app.route('/')
def index():
    return '<h1>Banking App</h1>'


class CreateAccount(Resource):
    @jwt_required()
    def get(self):
        current_user = get_jwt_identity()
        user = User.query.filter_by(username=current_user).first()

        if not user:
            return {'message': 'User not found'}, 404

        account = Account.query.filter_by(user_id=user.id).first()

        if not account:
            return {'message': 'Account not found for the specified user'}, 404

        response = make_response(jsonify(account.serialize()), 200)
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
            balance = data['balance']
            
            newaccount = Account(account_type=account_type,account_number=account_number, balance=balance,user_id=user.id)
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


# class Transaction (Resource):
#     @jwt_required
#     def get(self, id):
#        get_trasaction = Transaction.query.get(id)
#        response = make_response(jsonify(get_trasaction.serialize()),200)
#        return response
  
# api.add_resource(TransactionsbyId, '/transaction/<int:id>')

class CreateTransaction(Resource):
     @jwt_required
     def post(self):
        data = request.get_json()
        amount = data.get('amount')
        user_id = data.get('user_id')
        account_id = data.get('account_id')

        user = User.query.get(user_id)
        account = Account.query.get(account_id)

        if not user or not account:
            return {'message': 'User or Account not found'}, 404

        if amount is None or amount <= 50:
            return {'message': 'Cannot transact below this amount'}, 400

        if amount > account.balance:
            return {'message': 'Insufficient funds for withdrawal'}, 400
        else:
            #withdrawal decreases the account balance
            account.balance -= amount

            # Create a new transaction record
            new_transaction = Transaction(amount=amount, user_id=user_id, account_id=account_id)
            db.session.add(new_transaction)

            db.session.commit()
            return {'message': 'Transaction successful'}, 200
        
api.add_resource(CreateTransaction, '/transaction')

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