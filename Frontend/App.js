import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]); // Store chat history
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Add user message to chat log
    setChatLog([...chatLog, { sender: 'user', content: message }]);
    setMessage(''); // Clear input field

    try {
      const res = await axios.post('http://localhost:8000/chat', {
        message: message,
      });

      // Add AI response to chat log
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { sender: 'ai', content: res.data.response },
      ]);
    } catch (err) {
      setError('Error: Could not get response from API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>ChatBot using Groq</h1>
      </header>

      <div className="chat-box">
        {chatLog.map((chat, index) => (
          <div
            key={index}
            className={`chat-message ${chat.sender === 'user' ? 'user-message' : 'ai-message'}`}
          >
            {chat.content}
          </div>
        ))}
      </div>

      <form className="chat-form" onSubmit={handleSubmit}>
        <textarea
          className="chat-input"
          placeholder="Type your question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="2"
          disabled={loading}
        />
        <button className="chat-button" type="submit" disabled={loading || !message}>
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;
