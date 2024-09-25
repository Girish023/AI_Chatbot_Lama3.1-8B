import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from groq import Groq
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS


# Load environment variables from .env file
load_dotenv()

# Initialize Groq client with API key from environment
client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),
)

@app.route('/chat', methods=['POST'])
def chat_completion():
    try:
        # Get user input from POST request body (JSON format)
        data = request.get_json()

        # Extract message content from the request
        user_message = data.get('message', 'Explain the importance of fast language models')

        # Create chat completion request to Groq
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": user_message,
                }
            ],
            model="llama3-8b-8192",
        )

        # Extract and return the model's response
        response_content = chat_completion.choices[0].message.content
        return jsonify({"response": response_content})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the app
if __name__ == '__main__':
    app.run(debug=True,port=8000)
