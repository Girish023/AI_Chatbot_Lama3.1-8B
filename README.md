# AI_Chatbot_llama3-8b-8192

A simple responsive chatbot application built with Flask for the backend and React.js for the frontend.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive chatbot interface
- Responsive design using React.js
- Backend API built with Flask
- Supports JSON formatted requests

## Technologies

- **Frontend**: React.js
- **Backend**: Flask (Python)
- **API Testing**: Postman

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chatbot-app.git
   cd chatbot-app/backend

2. Set up a virtual environment (optional but recommended):
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. Install the required packages:
   pip install Flask

4. pip install Flask
   export FLASK_APP=app.py  # On Windows use `set FLASK_APP=app.py`
   flask run --host=127.0.0.1 --port=8000


### Frontend Setup

    cd ../frontend
    npm install
    npm start

## Usages:

  Usage
    Once both the backend and frontend are running, open your browser and navigate to http://localhost:3000 to interact with the chatbot.
    
    API
    You can test the backend API using Postman. Use the following configuration:
    
    Method: POST
    URL: http://127.0.0.1:8000/chat
    Body (JSON):
         {
           "message": "What are the key benefits of using fast language models?"
         }

### Contributing
  Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.

### License
  This project is licensed under the MIT License. See the LICENSE file for details.
