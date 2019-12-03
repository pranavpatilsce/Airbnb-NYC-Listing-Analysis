from flask import Flask, jsonify, request, make_response, render_template
# from sklearn.externals import joblib
from flask_restplus import fields, Resource, Api

import json

import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder,OneHotEncoder
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
from math import sqrt
from sklearn.metrics import mean_squared_error
from sklearn.metrics import confusion_matrix
#from sklearn.externals import joblib
import joblib
from joblib import dump, load
import re

pd.set_option('display.max_columns',None)
pd.set_option('display.max_rows',None)

listings = pd.read_csv("../listings_cleaned_two_lastminute_initial.csv")
listings = listings.replace(to_replace = 't',value = 1).replace(to_replace = 'f',value = 0)
listings = listings.fillna(1)
nan_rows = listings[listings['host_identity_verified'].isna()]

pd.set_option('display.max_columns',None)
pd.set_option('display.max_rows',None)

app = Flask(__name__)

#app = Flask("__main__")

X = listings.iloc[:,:9].values
y = listings.iloc[:,9].values
C = pd.DataFrame(X)

encoder1 = LabelEncoder()
encoder2 = LabelEncoder()
encoder3 = LabelEncoder()
encoder1.fit(X[:,3])
X[:,3] = encoder1.transform(X[:,3])
#X[:,4] = encoder.fit_transform(X[:,4])
encoder2.fit(X[:,5])
X[:,5] = encoder2.transform(X[:,5])

encoder3.fit(X[:,7])
X[:,7] = encoder3.transform(X[:,7])
# pred_test = encoder.inverse_transform(X)

x_train,x_test,y_train,y_test = train_test_split(X, y, test_size = 1/3, random_state = 0)

reg = LinearRegression()
print("reg done")
reg.fit(x_train,y_train)
print("reg fit")
#print(reg)
joblib.dump(reg, './airbnb.joblib')

x_test2 = pd.DataFrame(x_test)

loaded_model = joblib.load('./airbnb.joblib')


class MLClient(object):

    def __init__(self):

        print("set frames")

    def modelIt(self, listings, query):

        print("step 1")
        print("step 2")
        neighborhood = [encoder1.transform([query['neighborhood']])]
        #print(neighborhood)
        print("step 3")
        bed_type = [encoder2.transform([query['bedType']])]
        #print(bed_type)
        print("step 4")
        room_type = [encoder3.transform([query['roomType']])]
        #print(room_type)
        print("step 5")
        #print(query)
        #[]

        result = []
        # np_arr1 = np.array(neighborhood)
        # result.append(neighborhood)

        print(neighborhood[0])

        superhost = int(query['superhost'])
        print(superhost)
        photoIsThere = int(query['photoIsThere'])
        verified = int(query['verified'])
        bathrooms = int(query['bathrooms'])
        guests = int(query['guests'])
        bookable = int(query['bookable'])

        result.append(superhost)
        result.append(photoIsThere)
        result.append(verified)
        result.append(neighborhood[0])
        result.append(bathrooms)
        result.append(bed_type[0])
        result.append(guests)
        result.append(room_type[0])
        result.append(bookable)
        print(result)
        # bookable = query['bookable']
        # #superhost,photoIsThere,verified,neighborhood,bathrooms,bed_type,guests,room_type,bookable

        # result = [];
        # result = result.append(superhost)
        # result = result.append(photoIsThere)
        # result = result.append(verified)
        # result = result.append(neighborhood)
        # print(result)

        #result = np.asarray([[0,1,0,neighborhood,1.5,4,1,2,1]])
        #np.asarray(pred)

        print("model loaded")
        pred = loaded_model.predict([result])
        print("prediction:")
        print(pred)
        pred2 = loaded_model.predict(x_test)
        print("model predicted")
        # print(x_train)
        # print(pred)


        # print(len(xt))
        # print(len(xscore))
        #x_train = x_train.reshape(-1,1)
        rms = sqrt(mean_squared_error(y_test,pred2))
        print("rms")
        print(rms)
        x_test1 = x_test.reshape(-1,1)
        y_test1 = y_test.reshape(-1,1)
        #print(x_test1.shape)
        #print(y_test1.shape)

        #plt.scatter(x_test1[:16083,0],y_test1,color = 'red')

        #plt.show()
        #plt.plot(x_test,reg.predict(x_test),color = 'blue')
        #plt.show()

        return "x_test2"

    def inputValues(self, query):
        return print(query)


@app.route('/')
def hello_world():
    return render_template("index.html", token="airbnbpriceprediction")

@app.route("/results", methods=['POST'])
def predictionResults():
    if request.method == 'POST':  #this block is only entered when the form is submitted
        req_data = request.get_json()
        print(req_data)

    client = MLClient()

    model = client.modelIt(listings, query = req_data)
    #print(model)

    #cl = client.inputValues(query = req_data)
    #cl = client.inputValues(req_data.superhost, req_data.photoIsThere, req_data.verified, req_data.neighborhood, req_data.bathrooms, req_data.bedType, req_data.guests, req_data.roomType, req_data.bookable)

    #print(cl)

    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(req_data, f, ensure_ascii=False, indent=4)

    return render_template("index.html", token="airbnbpriceprediction")


if __name__ == '__main__':
    app.run(debug=True)
#, host='127.0.0.1', port=5000
