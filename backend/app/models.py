from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime

db = SQLAlchemy()

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(30), nullable=False, unique=True)
  hashed_password = db.Column(db.String(100), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

  @property
  def password(self):
    return self.hashed_password

  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  def to_dict(self):
    return {
      "id": self.id,
      "email": self.email,
      "created_at": self.created_at.strftime("%B %Y")
    }

class Product(db.Model, UserMixin):
  __tablename__ = 'products'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  description = db.Column(db.String(), nullable=False)
  price = db.Column(db.Float, nullable=False)
  releaseDate = db.Column(db.DateTime, nullable=False)
  imageUrl = db.Column(db.String(), nullable=False)
  order_id = db.Column(db.Integer, db.ForeignKey("orders.id"))
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

  order = db.relationship("Order", foreign_keys=[order_id])

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "description": self.description,
      "price": self.price,
      "releaseDate": self.releaseDate,
      "imageUrl": self.imageUrl,
      "created_at": self.created_at.strftime("%B %Y")
    }

class Order(db.Model, UserMixin):
  __tablename__ = 'orders'

  id = db.Column(db.Integer, primary_key=True)
  owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  total = db.Column(db.Float, nullable=False)
  shipDate = db.Column(db.DateTime, nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

  owner = db.relationship("User", foreign_keys=[owner_id])
  order_products = db.relationship("Product", lazy='subquery')

  def to_dict(self):
    return {
      "id": self.id,
      "owner_id": self.owner_id,
      "total": self.total,
      "shipDate": self.shipDate,
      "created_at": self.created_at.strftime("%B %Y")
    }
