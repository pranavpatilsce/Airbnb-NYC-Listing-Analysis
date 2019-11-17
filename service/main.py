from flask import Flask, jsonify, request, make_response, render_template
# from sklearn.externals import joblib
from flask_restplus import fields, Resource, Api

import json

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.externals import joblib
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression


app = Flask(__name__)

#app = Flask("__main__")

@app.route('/')
def hello_world():
    return render_template("index.html", token="airbnbpriceprediction")

@app.route("/results", methods=['POST'])
def predictionResults():
    if request.method == 'POST':  #this block is only entered when the form is submitted
        req_data = request.get_json()
        print(req_data)

    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(req_data, f, ensure_ascii=False, indent=4)

    return render_template("index.html", token="airbnbpriceprediction")


if __name__ == '__main__':
    app.run(debug=True)
#, host='127.0.0.1', port=5000
