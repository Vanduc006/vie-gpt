from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Thêm dòng này để cho phép truy cập qua CORS

@app.route('/ai', methods=['POST'])
def ai_endpoint():
    import requests
    content = request.json.get('content', '')
    url = "https://openai80.p.rapidapi.com/chat/completions"

    payload = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": content
            }
        ]
    }
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "2bdc1f0810mshfc6e44c69c98822p1bdb0bjsn85b73f91c2d1",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com"
    }

    response = requests.post(url, json=payload, headers=headers)
    data = response.json()

    return data  # Trả về kết quả response dưới dạng JSON

if __name__ == '__main__':
    app.run()
'''
import requests
url = "https://openai80.p.rapidapi.com/chat/completions"

payload = {
    "model": "gpt-3.5-turbo",
    "messages": [
        {
            "role": "user",
            "content": "Hello!"
        }
    ]
}
headers = {
    "content-type": "application/json",
    "X-RapidAPI-Key": "2bdc1f0810mshfc6e44c69c98822p1bdb0bjsn85b73f91c2d1",
    "X-RapidAPI-Host": "openai80.p.rapidapi.com"
}

response = requests.post(url, json=payload, headers=headers)
data = response.json()
print(data)'''