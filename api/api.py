import sys

from flask_cors import CORS
from flask import Flask, request, jsonify, render_template
import encoder


print(sys.path)


api = Flask(__name__)
CORS(api)

secret_number = 0


@api.route('/', methods=['GET'])
def serve_web_page():
    return render_template('secret_messenger.html')


@api.route('/encode', methods=['POST'])
def encode_input():
    result = ""
    data = request.json
    print("encode route data!")
    message = data.get('message', '')
    global secret_number
    if 'secret_number' in data:
        secret_number = data.get('secret_number', 0)
        result = encoder.caesar_better(message, secret_number)
    else:
        result = "No secret number provided.. Come on now."
    return jsonify({"result": result})


@api.route('/decode', methods=['POST'])
def decode_input():
    result = ""
    data = request.json
    print("decode route data!")
    message = data.get('message', '')
    if 'inputted_number' in data:
        inputted_number = data.get('inputted_number', 0)
        if inputted_number == secret_number:
            result = encoder.caesar_better(message, -secret_number)
        else:
            result = "That's not the right number, love. Try again ;)"
    else:
        result = "You have to guess the number, silly!"
    return jsonify({"result": result})


if __name__ == "__main__":
    api.run(debug=True)
