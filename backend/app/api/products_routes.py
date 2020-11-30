from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import Product, db
from flask_jwt_extended import create_access_token, jwt_required
from werkzeug.utils import secure_filename
from flask_login import current_user
import boto3
import os

product_routes = Blueprint('products', __name__)

BUCKET_URL = os.environ.get('BUCKET_URL')
BUCKET_NAME = os.environ.get('BUCKET_NAME')
ACCESS_ID = os.environ.get('ACCESS_ID')
ACCESS_KEY = os.environ.get('ACCESS_KEY')
REGION_NAME = os.environ.get('REGION_NAME')

s3 = boto3.client('s3', 
                  region_name=REGION_NAME,
                  aws_access_key_id=ACCESS_ID,
                  aws_secret_access_key=ACCESS_KEY)

@product_routes.route('/', methods=['GET'])
def load_products():
    products = Product.query.all()
    data = [product.to_dict() for product in products]
    return {"products": data}

@product_routes.route('/by_id', methods=['GET'])
def load_product():
    productId = request.args.get('id', None)
    product = Product.query.get(productId)
    # product is None
    return {"product": product.to_dict()}

@product_routes.route('/add', methods=['PUT'])
def upload_product():
    product = Product (
      title = request.form.get('title', None),
      description = request.form.get('description', None),
      price = request.form.get('price', None),
      releaseDate = request.form.get('releaseDate', None)
    )
    file = request.files['file'] or None
    if file == None:
        return jsonify({"error": "file is required for upload"})
    file.filename = secure_filename(file.filename)
    folder = f'products/'
    file_path = folder + file.filename
    s3.upload_fileobj(
        file, 
        BUCKET_NAME, 
        file_path, 
        ExtraArgs = {
          "ContentType": file.content_type, 
          "ACL": "public-read"})
    external_link = f'{BUCKET_URL}/{folder}{file.filename}'
    if external_link:
        product.imageUrl = external_link
        db.session.add(product)
        db.session.commit()
        return {"product": product.to_dict(), "msg": "product uploaded successfully"}

@product_routes.route('/edit', methods=['PUT'])
def edit_product():
    productId = request.form.get('id', None)
    product = Product.query.filter(Product.id == productId).first()
    
    new_title = request.form.get('title')
    new_description = request.form.get('description')
    new_price = request.form.get('price')
    new_releaseDate = request.form.get('releaseDate')

    print('~~~~~~~BEFOREEEEE~~~~')
    print(product.title)
    print(product.description)
    print(product.price)
    print(new_price)
    print(product.releaseDate)
    print(new_releaseDate)

    if new_title:
        product.title = new_title
    if new_description:
        product.description = new_description
    if (new_price == 'null'):
        product.price = product.price
    else:
       product.price = new_price
    if (new_releaseDate == 'null'):
        product.releaseDate = product.releaseDate
    else: 
        product.releaseDate = new_releaseDate
    print('~~~~~~~aFTERR~~~~')
    print(product.title)
    print(product.description)
    print(product.price)
    print(product.releaseDate)

    file = (request.files and request.files['file']) or None
    print(file)
    if file == None:
        db.session.add(product)
        db.session.commit()
        return {"product": product.to_dict(), "msg": "product updated successfully"}
    
    file.filename = secure_filename(file.filename)
    folder = f'products/'
    file_path = folder + file.filename
    s3.upload_fileobj(
        file, 
        BUCKET_NAME, 
        file_path, 
        ExtraArgs = {
          "ContentType": file.content_type, 

          "ACL": "public-read"})
    external_link = f'{BUCKET_URL}/{folder}{file.filename}'
    if external_link:
        product.imageUrl = external_link
        db.session.add(product)
        db.session.commit()
        return {"product": product.to_dict(), "msg": "product updated successfully"}
