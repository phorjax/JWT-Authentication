"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# create flask app
api = Blueprint('api', __name__)

# @api.route("/token", methods=["POST"])
# def generate_token_signUp():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     if email != "test" or password != "test":
#         return jsonify({"msg": "Bad username or password"}), 401
    
#     access_token = create_access_token(identity=email)
#     return jsonify(access_token= access_token)


@api.route("/token", methods=["POST"])
def generate_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email == "test" or password == "test":
        return jsonify({"msg": "Bad username or password"}), 401
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token= access_token)


@api.route("/private", methods=["GET"])
@jwt_required() 
def get_hello():
    email = get_jwt_identity()
    dictionary = {"message": "hello " + email}
    return jsonify(dictionary)
    
    
   