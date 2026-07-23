from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "message": "TrustShield AI Backend is Running!"
    })

@app.route("/hallucination")
def hallucination():
    return jsonify({
        "result": "Possible Hallucination",
        "trust_score": "82%",
        "explanation": "Some claims may require verification from trusted sources."
    })

@app.route("/deepfake")
def deepfake():
    return jsonify({
        "result": "Likely Real",
        "confidence": "91%",
        "explanation": "No major signs of image manipulation were detected."
    })

@app.route("/phishing")
def phishing():
    return jsonify({
        "result": "Safe Website",
        "trust_score": "95%",
        "explanation": "No suspicious phishing patterns were found."
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)