from app.models import User, Product
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

# USERS
    ian = User(email='ian@aa.io', password='password')
    javier = User(email='javier@aa.io', password='password')
    demo = User(id=555, email='demo@demo.com', password='password')
    admin = User(id=666,password='password', email='admin@prettygoodcoop.com')

    # product1 = Product(title="White T-Shirt", 
    #                   description='this is a shirt preorder',
    #                   price=25.00,
    #                   imageUrl='https://prettygoodcoop.s3-us-west-1.amazonaws.com/products/buhk_t_2.jpg',
    #                   releaseDate='2020-12-01')

    # product2 = Product(title="Black T-Shirt", 
    #                   description='this is a shirt preorder',
    #                   price=25.00,
    #                   imageUrl='https://prettygoodcoop.s3-us-west-1.amazonaws.com/products/buhk_t_1.jpg',
    #                   releaseDate='2020-12-01')


    db.session.add(ian)
    db.session.add(javier)
    db.session.add(demo)
    db.session.add(admin)

    # db.session.add(product1)
    # db.session.add(product2)

    db.session.commit()
