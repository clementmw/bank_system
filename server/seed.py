#seed
from faker import Faker
from models import User,db,Account,Transaction
fake = Faker()
from app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt()
from datetime import datetime

with app.app_context():
    User.query.delete()
    Account.query.delete()
    Transaction.query.delete()
    # Include this code after initializing your Flask app and defining your models and routes

    # Create a few users
    user1 = User(username='user1', phone='1234567890', email='clementmacharia@gmail.com', address='123 Main St', password='password1')
    user2 = User(username='user2', phone='9876543210', email='clementmacharia@gmail.com', address='456 Oak St', password='password2')

    # Add users to the database
    db.session.add(user1)
    db.session.add(user2)
    db.session.commit()

    # Create accounts for the users
    account1 = Account(account_type='Savings',account_number = 20930202, balance=1000, user_id=user1.id)
    account2 = Account(account_type='Checking',account_number = 390104242, balance=500, user_id=user2.id)

    # Add accounts to the database
    db.session.add(account1)
    db.session.add(account2)
    db.session.commit()

    # Create transactions for the accounts
    transaction1 = Transaction(amount=200, user_id=user1.id, account_id=account1.id, created_at=datetime.utcnow())
    transaction2 = Transaction(amount=50, user_id=user2.id, account_id=account2.id, created_at=datetime.utcnow())

    # Add transactions to the database
    db.session.add(transaction1)
    db.session.add(transaction2)
    db.session.commit()


   
