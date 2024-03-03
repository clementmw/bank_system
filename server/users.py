from flask_jwt_extended import jwt_required, get_jwt_identity,get_jwt
from flask import Blueprint,request,make_response
from models import User
from flask import jsonify

user_bp = Blueprint('user', __name__)

@user_bp.get("/admin")
@jwt_required()
def get_all_users():
    claims = get_jwt()
    if claims.get("is_staff"):
        users = [user.serialize() for user in User.query.all()]
        response = make_response(jsonify(users), 200)
        return response
    return jsonify({"message":"you are not authorized to access this data"}),401

@user_bp.get('/user_data')
@jwt_required()
def get_user_data():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    if user:
        user_data = {"username": user.username, "email": user.email,"address":user.address}
        return jsonify(user_data), 200
    else:
        return jsonify({"error": "User not found"}), 404

  
