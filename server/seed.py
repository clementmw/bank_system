#seed
from faker import Faker
from models import User,db,Account,Transaction,Reviews
fake = Faker()
from app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt()
from datetime import datetime

with app.app_context():
    # User.query.delete()
    # Account.query.delete()
    # Transaction.query.delete()
    Reviews.query.delete()
    db.session.commit()
    # Include this code after initializing your Flask app and defining your models and routes

    # # Create a few users
    # user1 = User(username='user1', phone='254745678932', email='clementmacharia@gmail.com', address='123 Main St', password='password1')
    # user2 = User(username='user2', phone='254723380122', email='clementmacharia@gmail.com', address='456 Oak St', password='password2')

    # Add users to the database
    # db.session.add(user1)
    # db.session.add(user2)
    # db.session.commit()

    # # Create accounts for the users
    # account1 = Account(account_type='Savings',account_number = 20930202, balance=100000, user_id=user1.id,)
    # account2 = Account(account_type='Checking',account_number = 390104242, balance=50000,user_id=user2.id,)

    # # Add accounts to the database
    # db.session.add(account1)
    # db.session.add(account2)
    # db.session.commit()

    # # Create transactions for the accounts
    # transaction1 = Transaction(amount=200, user_id=user1.id, account_id=account1.id, transaction_type='deposit', receiver_id=user2.id, created_at=datetime.utcnow())
    # transaction2 = Transaction(amount=50, user_id=user2.id, account_id=account2.id, transaction_type='withdraw' ,receiver_id=user1.id,created_at=datetime.utcnow())

    # # Add transactions to the database
    # db.session.add(transaction1)
    # db.session.add(transaction2)
    # db.session.commit()

    reviews = [
        {"customer_name": "John Doe", "review": "I've had a fantastic experience with this bank. The customer service is top-notch, and the staff is always helpful and friendly.","rating":5},
        {"customer_name": "Jane Smith", "review": "The online banking services provided by this bank are excellent. It's convenient, user-friendly, and secure.","rating":4.5},
        {"customer_name": "Robert Johnson", "review": "I appreciate the transparency of this bank. There are no hidden fees, and the account statements are clear and easy to understand.","rating":4},
        {"customer_name": "Lisa Williams", "review": "I recently applied for a loan, and the process was smooth and efficient. The bank offers competitive interest rates.","rating":4.5},
        {"customer_name": "Michael Brown", "review": "The mobile app is a game-changer. It allows me to manage my accounts, transfer funds, and pay bills on the go.","rating":4},
        {"customer_name": "Emily Davis", "review": "I've been a customer for years, and I trust this bank with my finances. The security measures in place give me peace of mind.","rating":5}
       ]
    for review_data in reviews:
            new_review = Reviews(**review_data)
            db.session.add(new_review)
            db.session.commit()
    
