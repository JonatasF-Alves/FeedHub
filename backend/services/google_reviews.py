import os
import requests
import json

API_KEY = os.getenv("GOOGLE_API_KEY")
PLACE_ID = "ChIJN1t_tDeuEmsRUsoyG83frY4"

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
