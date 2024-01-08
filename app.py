words=[
  {
      "inputs":5,
      "category":"Sports",
      "word":"Chess"
  },
  {
      "inputs":6,
      "category":"European Country Name",
      "word":"France"
  },
]

from flask import Flask,render_template,jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-template')
def get_template():
    return jsonify({
        'status':'success',
        'word':random.choice(words)
    })

app.run(debug=True)
