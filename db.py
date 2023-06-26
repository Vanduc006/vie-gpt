from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/ai', methods=['POST'])
def ai_endpoint():
    content = request.json.get('content', '')

    # Gửi content đến API của OpenAI và nhận kết quả
    # Thực hiện xử lý logic của bạn ở đây

    # Ví dụ đơn giản trả về nội dung đã nhận được
    response = {
        'result': content
    }

    return response

if __name__ == '__main__':
    app.run()