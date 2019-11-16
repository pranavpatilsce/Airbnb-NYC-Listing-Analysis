from flask import Flask, jsonify, request, make_response, render_template
# from sklearn.externals import joblib
from flask_restplus import fields, Resource, Api

app = Flask(__name__)

#app = Flask("__main__")

@app.route('/')
def hello_world():
    return render_template("index.html", token="airbnbpriceprediction")

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
