#models
from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
import re
from flask_bcrypt import Bcrypt 
from sqlalchemy.ext.hybrid import hybrid_property

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model,SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String, nullable = False, unique = True)
    phone = db.Column(db.Integer)
    email = db.Column(db.String)
    address = db.Column(db.String)
    hashed_password = db.Column(db.String, nullable = False)
    # relationship to account
    accounts = db.relationship('Account', backref='user')
    transactions = db.relationship('Transaction', backref='user')
    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    # # validates email
    # @validates('email')
    # def validate_email(self, key, email):
    #     email_pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    #     if not re.match(email_pattern, email):
    #         raise ValueError('Invalid email format')
        
     # Password getter and setter methods
    @hybrid_property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, plain_text_password):
        self.hashed_password = bcrypt.generate_password_hash(
            plain_text_password.encode('utf-8')).decode('utf-8')

    def check_password(self, attempted_password):
        return bcrypt.check_password_hash(self.hashed_password, attempted_password.encode('utf-8'))
        
    def serialize(self):
        return{
            'id':self.id,
            'username':self.username,
            'phone':self.phone,
            'email':self.email,
            'address':self.address 
        }

class Account(db.Model,SerializerMixin):
    __tablename__ = 'accounts'
    id = db.Column(db.Integer, primary_key = True)
    account_type = db.Column(db.String)
    account_number = db.Column(db.Integer)
    balance = db.Column(db.Integer)
    # relationship to user
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # relationship to transaction
    transactions = db.relationship('Transaction', backref='account')
    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def serialize(self):
        return{
            'account_type':self.account_type,
            'account_number':self.account_number,
            'balance':self.balance,
            'user_id':self.user_id
        }
    
class Transaction(db.Model,SerializerMixin):
    __tablename__ = 'transactions'
    id = db.Column(db.Integer, primary_key = True)
    amount = db.Column(db.Integer)
    # relationship to user and account
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    def serialize(self):
        return {
            'id':self.id,
            'amount':self.amount,
            'user_id':self.user_id,
            'account_id':self.account_id
        }


