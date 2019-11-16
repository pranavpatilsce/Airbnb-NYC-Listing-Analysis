from flask import Flask, jsonify, request, make_response
# from sklearn.externals import joblib
from flask_restplus import fields, Resource, Api

#app = Flask(__name__)

app = flask.Flask("__main__")

@app.route('/')
def hello_world():
    return flask.render_template("index.html", token="airbnbpriceprediction")

app.run(debug=True)
