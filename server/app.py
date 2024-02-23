#app

from models import User,Account,Transaction,db,Reviews
from flask_migrate import Migrate
from flask import Flask,make_response,jsonify,request,session
from flask_cors import CORS
from flask_restful import Api,Resource
from flask_bcrypt import Bcrypt
from werkzeug.exceptions import NotFound

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bank.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.secret_key = b'\xb2\xd3B\xb9 \xab\xc0By\x13\x10\x84\xb7M!\x11'

db.init_app(app)
migrate = Migrate(app,db)
api=Api(app)
bcrypt = Bcrypt(app)
CORS(app) #connect frontend 

@app.errorhandler(NotFound)
def handle_not_found(e):
    response= make_response("NotFound: The requested resource not found", 404)
    return response

@app.route('/')
def index():
    return '<h1>Messaging App</h1>'

class Signup(Resource):
    def get(self):
        user = [x.serialize() for x in User.query.all()]
        response = make_response(jsonify(user), 200)
        return response

    def post(self):
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

            session['user_id'] = newuser.id # sets a new cookie for our application
        
            response = make_response(jsonify(newuser.serialize()), 200)
            return response        

api.add_resource(Signup , '/signup')

class Login(Resource):
    def post(self):
      data = request.get_json()
      username = data['username']
      user = User.query.filter_by(username = username).first()
      if not user:
        return {'error': '401 Unauthorized'}, 401 
      else:
            # check password matches hash stored in database.
            # if password matches, return user object. Otherwise, return 401 Unauthorized.
            # check_password_hash(hashed_password, password)
            # hashed_password = user.hashed_password
            # password = data['password']
       
            if bcrypt.check_password_hash(user.hashed_password,data['password']):
                session['user_id'] = user.id
                response = make_response(jsonify(user.serialize()), 200)
                return response
            else:
                return {'error': '401 Unauthorized'}, 401

               
api.add_resource(Login, '/login')

class CheckSession(Resource):
    def get(self):
        if session.get('user_id'):
            user = User.query.filter(User.id == session['user_id']).first()
            return user.serialize(), 200
        else:
            return {'error': '401 Resource not found'}, 401

api.add_resource(CheckSession, '/checksession')

class Logout(Resource):
    def delete(self):
        if session.get('user_id'):
            session['user_id'] = None
            return {}, 204
        else:
            return {'error': '401 Unauthorized'}, 401
        
api.add_resource(Logout, '/logout')

class CreateAccount(Resource):
    def post(self):
        data = request.get_json()
        account_type = data['account_type']
        account_number = data['account_number'] 
        balance = data['balance']
        user_id = data['user_id']

        newaccount = Account(account_type=account_type,account_number=account_number, balance=balance, user_id=user_id)
        db.session.add(newaccount)
        db.session.commit()

        response = make_response(jsonify(newaccount.serialize()), 200)
        return response
    
api.add_resource(CreateAccount, '/account')

class GetAccount(Resource):
    def get(self,id):
        account = Account.query.get(id)
        response = make_response(jsonify(account.serialize()), 200)
        return response
    
    def patch(self, id):
        data = request.get_json()
        new_balance = data.get('balance')

        account = Account.query.get(id)
        if not account:
            return {'message': 'Account not found for the specified user'}, 404

        account.balance = new_balance
        db.session.commit()

        response = make_response(jsonify(account.serialize()), 200)
        return response
    
api.add_resource(GetAccount, '/account/<int:id>')

class TransactionsbyId (Resource):
    def get(self, id):
       get_trasaction = Transaction.query.get(id)
       response = make_response(jsonify(get_trasaction.serialize()),200)
       return response
  
api.add_resource(TransactionsbyId, '/transaction/<int:id>')

class CreateTransaction(Resource):
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

if __name__ == '__main__':
    app.run(port=5555, debug=True)