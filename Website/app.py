from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///loginSystem.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'

db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

# Routes
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    confirm_password = data.get('confirm_password')

    # Check if user already exists
    user = User.query.filter_by(username=username).first()
    if user:
        return jsonify(message='User already exists'), 400

    # Check if passwords match
    if password != confirm_password:
        return jsonify(message='Passwords do not match'), 400

    new_user = User(username=username, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(message='User registered successfully'), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Check if user exists
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify(message='User does not exist'), 400

    # Check password
    if user.password != password:
        return jsonify(message='Invalid password'), 400

    return jsonify(message='Login successful'), 200

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
