#models

# from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Columb(db.Integer, primary_key = True)
    username = db.Column(db.String)
    phone = db.Column(db.Integer)
    address = db.Column(db.String)
    # password = 

    # relationship to account
    accounts = db.relationship('Account', backref='user')
    transactions = db.relationship('Transaction', backref='user')


    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

class Account(db.Model):
    __tablename__ = 'accounts'
    id = db.Column(db.Integer, primary_key = True)
    account_type = db.Column(db.String)
    account_number = db.Column (db.Integer)
    Balance = db.Column(db.Integer)
    # relationship to user
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # relationship to transaction
    transactions = db.relationship('Transaction', backref='account')

    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
class Transaction(db.Model):
    __tablename__ = 'transactions'
    id = db.Column(db.Integer, primary_key = True)
    amount = db.Column(db.Integer)
    # relationship to user and account
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

   



