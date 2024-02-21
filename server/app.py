#app

from models import User,Account,Transaction,db
from flask_migrate import Migrate
from flask import Flask
# from flask_cors import CORS
# from flask_restful import Api,Resource

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bank.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

db.init_app(app)
migrate = Migrate(app,db)

