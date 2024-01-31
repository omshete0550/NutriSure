from flask import Flask,request,jsonify
from flask_pymongo import pymongo
from flask_cors import CORS
from bson.objectid import ObjectId
from flask_bcrypt import Bcrypt

app=Flask(__name__)
bcrypt = Bcrypt(app)

client = pymongo.MongoClient('mongodb+srv://saikaushiksadu:hacks24@cluster0.qvnay0h.mongodb.net/')
db = client.get_database('Hacks24')
user_collection = pymongo.collection.Collection(db, 'user_collection')

#Testing the Flask API
@app.route("/")
def index():
    return "Hello, Welcome to Byte Karma !!"

CORS(app)

#SignUp - User [Done]
@app.route("/signup",methods=['POST'])
def signup():
    body=request.json
    fname=body.get('fname')
    lname=body.get('lname')
    email=body.get('email')
    phone=body.get('phone')
    password=body.get('password')
    age=body.get('age')
    gender=body.get('gender')
    city=body.get('city')
    language=body.get('language')
    height=body.get('height')
    weight=body.get('weight')
    diet_resctriction=body.get('diet_resctriction')
    diet_pref=body.get('diet_pref')
    religion=body.get('religion')
    allergy=body.get('allergy')
    severity=body.get('severity')
    fav_cuisine=body.get('fav_cuisine')
    cooking_skills=body.get('cooking_skills')
    notifications=body.get('notifications')

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    try:
        db['user'].create_index([('phone', pymongo.ASCENDING)], unique=True)
        result = db['user'].insert_one({
            "fname": fname,
            "lname": lname,
            "email": email,
            "phone": phone,
            "password": hashed_password,
            "age": age,
            "gender": gender,
            "city": city,
            "language": language,
            "height": height,
            "weight": weight,
            "diet_resctriction": diet_resctriction,
            "diet_pref": diet_pref,
            "religion": religion,
            "allergy": allergy,
            "severity": severity,
            "fav_cuisine": fav_cuisine,
            "cooking_skills": cooking_skills,
            "notifications": notifications
        })
        inserted_id = str(result.inserted_id)
        return jsonify({
            'status':'Success',
            'inserted_id' : inserted_id
        })
    except:
        return jsonify({
            'status':'Phone number already registered'
        })

#Login - User [Done]
@app.route("/login",methods=['POST'])
def login():
    body=request.json
    email=body.get('email')
    password=body.get('password')

    result_user = db['user'].find_one({'email': email})

    if bcrypt.check_password_hash(result_user['password'], password):
        id = str(result_user['_id'])
        return jsonify({
            'id':id,
            'status':'userFound'
        })
    else:
        return jsonify({
            'status':'User Not Found'
        })

# SignUp Update [Done]
@app.route("/<id>/resignup",methods=['POST'])
def resignup(id): 
    body=request.json
    age=body.get('age')
    gender=body.get('gender')
    city=body.get('city')
    language=body.get('language')
    height=body.get('height')
    weight=body.get('weight')
    diet_resctriction=body.get('diet_resctriction')
    diet_pref=body.get('diet_pref')
    religion=body.get('religion')
    allergy=body.get('allergy')
    severity=body.get('severity')
    fav_cuisine=body.get('fav_cuisine')
    cooking_skills=body.get('cooking_skills')
    notifications=body.get('notifications')

    print(age)
    try:
        db['user'].update_one(
                {'_id': ObjectId(id)},
                {
                    '$set': {
                        "age": age,
                        "gender": gender,
                        "city": city,
                        "language": language,
                        "height": height,
                        "weight": weight,
                        "diet_resctriction": diet_resctriction,
                        "diet_pref": diet_pref,
                        "religion": religion,
                        "allergy": allergy,
                        "severity": severity,
                        "fav_cuisine": fav_cuisine,
                        "cooking_skills": cooking_skills,
                        "notifications": notifications
                    }
                }
            )
        return jsonify({
            'status':'Success'
        })
    except:
        return jsonify({
            'status':'Error occured'
        })

if __name__ == '__main__':
    app.run(port=3001)