from app.models import User
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

# USERS
    ian = User(email='ian@aa.io', password='password')
    javier = User(email='javier@aa.io', password='password')
    demo = User(id=555,
                email='demo@demo.com', password='password')
    admin = User(id=666,password='password',
                 email='admin@prettygoodcoop.com')

    db.session.add(ian)
    db.session.add(javier)
    db.session.add(demo)
    db.session.add(admin)

    db.session.commit()
