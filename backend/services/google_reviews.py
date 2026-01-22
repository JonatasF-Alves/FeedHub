import os
import requests
import json
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("GOOGLE_API_KEY")
PLACE_ID = "ChIJN1t_tDeuEmsRUsoyG83frY4"

@app.route('/')
def home():
    print("API KEY carregada:", bool(API_KEY))

    url = "https://maps.googleapis.com/maps/api/place/details/json"

    params = {
        "place_id": PLACE_ID,
        "fields": (
            "name,"
            "formatted_address,"
            "place_id,"
            "geometry,"
            "rating,"
            "user_ratings_total,"
            "reviews"
        ),
        "key": API_KEY,
        "language": "pt-BR"
    }

    response = requests.get(url, params=params)
    data = response.json()

    print("STATUS DA API:", data.get("status"))
    print(json.dumps(data, indent=2, ensure_ascii=False))

    if data.get("status") != "OK":
        raise RuntimeError(f"Erro da API: {data.get('status')}")

    result = data.get("result", {})
    reviews = result.get("reviews", [])

    return jsonify({
        "name": result.get("name"),
        "address": result.get("formatted_address"),
        "place_id": result.get("place_id"),
        "location": result["geometry"]["location"],
        "rating": result.get("rating"),
        "user_ratings_total": result.get("user_ratings_total"),
        "reviews": reviews
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5100, debug=True)