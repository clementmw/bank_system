#app

from models import User,Account,Transaction,db
from flask_migrate import Migrate
from flask import Flask,make_response,jsonify,request,session
from flask_cors import CORS
from flask_restful import Api,Resource
from flask_bcrypt import Bcrypt

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bank.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

db.init_app(app)
migrate = Migrate(app,db)
api=Api(app)
bcrypt = Bcrypt(app)
CORS(app) #connect frontend 


class GetUser(Resource):
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

        if user or emailaddress:
            return {'message':'details filled already exists'},400
        else:
            password = bcrypt.generate_password_hash(hashed_password.encode('utf-8')).decode('utf-8')
            newuser = User(username=username,phone=phone,email=email,address=address,hashed_password=password)
            db.session.add(newuser)
            db.session.commit()
        
            response = make_response(jsonify(newuser.serialize()), 200)
            return response        

api.add_resource(GetUser , '/user')

class GetUserById(Resource):
    def get(self, id):
        user = User.query.get(id)
        response = make_response(jsonify(user.serialize()), 200)
        return response
      # data = request.get_json()
        # username = data['username']
        # user = User.query.filter_by(username = username).first()
        # if user:
        #     if bcrypt.check_password_hash(user.hashed_password,data['password']):
        #         session['user_id'] = user.id
        #         return {'message':'login successful'},200   
api.add_resource(GetUserById, '/user/<int:id>')


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
            # Assuming a withdrawal decreases the account balance
            account.balance -= amount

            # Create a new transaction record
            new_transaction = Transaction(amount=amount, user_id=user_id, account_id=account_id)
            db.session.add(new_transaction)

            db.session.commit()
            return {'message': 'Transaction successful'}, 200
        
api.add_resource(CreateTransaction, '/transaction')
if __name__ == '__main__':
    app.run(port=5555, debug=True)