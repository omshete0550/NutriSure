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

    # try:
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
    # except:
    #     return jsonify({
    #         'status':'Phone number already registered'
    #     })

#Login - User [Done]
@app.route("/login",methods=['POST'])
def login():
    print("opopopo")
    body=request.json
    email=body.get('email')
    password=body.get('password')
    print(email)

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

    try:
        if(age):
            db['user'].update_one(
                {'_id': ObjectId(id)},
                {
                    '$set': {
                        "age": age,
                        "gender": gender,
                        "city":city
                    }
                }
            )
        elif(diet_resctriction):
            db['user'].update_one(
                {'_id': ObjectId(id)},
                {
                    '$set': {
                        "diet_resctriction": diet_resctriction
                    }
                }
            )
        elif(diet_pref):
            db['user'].update_one(
                {'_id': ObjectId(id)},
                {
                    '$set': {
                        "diet_pref": diet_pref
                    }
                }
            )
        elif(religion):
            db['user'].update_one(
                {'_id': ObjectId(id)},
                {
                    '$set': {
                        "religion": religion
                    }
                }
            )
        elif(allergy):
            db['user'].update_one(
                {'_id': ObjectId(id)},
                {
                    '$set': {
                        "allergy": allergy
                    }
                }
            )
        elif(severity):
            db['user'].update_one(
                {'_id': ObjectId(id)},
                {
                    '$set': {
                        "severity": severity,
                        "fav_cuisine": fav_cuisine
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

#SignUp - Shop [Done]
@app.route("/shopsignup",methods=['POST'])
def shopsignup():
    body=request.json
    shopname=body.get('shopname')
    ownername=body.get('ownername')
    email=body.get('email')
    phone=body.get('phone')
    password=body.get('password')
    address=body.get('address')
    city=body.get('city')
    certification=body.get('certification')
    timing=body.get('timing')
    categories=body.get('categories')
    blueprint=body.get('blueprint')
    gstin=body.get('gstin')

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    print(1)

    try:
        db['shops'].create_index([('phone', pymongo.ASCENDING)], unique=True)
        result = db['shops'].insert_one({
            "shopname": shopname,
            "ownername": ownername,
            "email": email,
            "phone": phone,
            "password": hashed_password,
            "address": address,
            "city": city,
            "certification": certification,
            "timing": timing,
            "categories": categories,
            "blueprint": blueprint,
            "gstin": gstin,
        })
        print(result)
        inserted_id = str(result.inserted_id)
        print(inserted_id)
        
        return jsonify({
            'status':'Success',
            'inserted_id' : inserted_id
        })
    except:
        return jsonify({
            'status':'Phone number already registered'
        })

#SignUp Update - Shop [Done]
@app.route("/<id>/reshopsignup",methods=['POST'])
def reshopsignup(id):
    body=request.json
    shopname=body.get('shopname')
    ownername=body.get('ownername')
    email=body.get('email')
    phone=body.get('phone')
    password=body.get('password')
    address=body.get('address')
    city=body.get('city')
    certification=body.get('certification')
    timing=body.get('timing')
    categories=body.get('categories')
    blueprint=body.get('blueprint')
    gstin=body.get('gstin')

    try:
        db['shops'].update_one(
                {'_id': ObjectId(id)},
                {
                    '$set': {
                        "address":address,
                        "city":city,
                        "certification":certification,
                        "timing":timing,
                        "categories":categories,
                        "blueprint":blueprint,
                        "gstin":gstin
                    }
                }
            )
        return jsonify({
            'status':'Success'
        })  
    except:
        return jsonify({
            'status':'Phone number already registered'
        })

#Login - Shop [Done]
@app.route("/shoplogin",methods=['POST'])
def shoplogin():
    body=request.json
    email=body.get('email')
    password=body.get('password')

    result_user = db['shops'].find_one({'email': email})

    if bcrypt.check_password_hash(result_user['password'], password):
        id = str(result_user['_id'])
        return jsonify({
            'id':id,
            'status':'shopFound'
        })
    else:
        return jsonify({
            'status':'Shop Not Found'
        })


@app.route("/getallshops",methods=['GET'])
def getallshops():
    datajson=[]
    allshops=db['shops'].find()
    for data in allshops:
        shopname=data['shopname']
        ownername=data['ownername']
        email=data['email']
        phone=data['phone']
        address=data['address']
        city=data['city']
        timing=data['timing']
        categories=data['categories']
        gstin=data['gstin']
        id=str(data['_id'])

        dataDict={
            "name":shopname,
            "ownername":ownername,
            "email":email,
            "phone":phone,
            "address":address,
            "city":city,
            "timing":timing,
            "gstin":gstin,
            "categories":categories,
            "id":id
        }
        datajson.append(dataDict)
    return jsonify(datajson)

@app.route('/postreport', methods=['POST'])
def post_report():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Extract data from the JSON data
        store_name = data.get('storeName', '')
        product_name = data.get('productName', '')
        product_issues = data.get('productIssues', [])

        result = db['shops'].insert_one({
            "store_name": store_name,
            "store_name": product_name,
            "product_issues": product_issues,
        })
        print(result)
        return jsonify({"message": "Report submitted successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=3001)