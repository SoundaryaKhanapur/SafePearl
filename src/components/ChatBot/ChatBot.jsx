import React, { useState, useEffect } from "react";
import "./ChatBot.css"; // Ensure styling is correct

const API_BASE_URL = "https://safepearls-backend.onrender.com"; // ✅ Render API Base URL

const Chatbot = () => {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Start a new session when the component mounts
  useEffect(() => {
    const startSession = async () => {
      try {
        console.log("📢 Requesting new session..."); // ✅ Debugging log
        const response = await fetch(`${API_BASE_URL}/new_session`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(
            `Server error: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("✅ New session started:", data.sessionId); // ✅ Debugging log
        setSessionId(data.sessionId);
      } catch (error) {
        console.error("❌ Error starting session:", error);
        setError("Failed to start session. Please check API logs.");
      }
    };

    startSession();
  }, []);

  // ✅ Handle user input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // ✅ Send user message to chatbot API
  const handleSendMessage = async () => {
    if (!inputText.trim()) {
      alert("Please enter a message.");
      return;
    }

    if (!sessionId) {
      setError("Session ID not available. Try refreshing.");
      return;
    }

    setLoading(true);
    setError(null);

    // ✅ Add user message to chat UI instantly
    const newMessage = { role: "user", text: inputText };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sessionId,
          userMessage: inputText,
        }),
      });

      const data = await response.json();

      // ✅ Add bot response to chat UI
      const botMessage = { role: "bot", text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setInputText("");
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ End Chat Session
  const handleEndSession = async () => {
    if (!sessionId) {
      setError("No active session.");
      return;
    }

    try {
      await fetch(`${API_BASE_URL}/end_session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      setSessionId(null);
      setMessages([]);
      alert("Chat session ended.");
    } catch (error) {
      console.error("Error ending session:", error);
      setError("Failed to end session.");
    }
  };

  return (
    <div className="chat-container">
      <h2>SafePearl Chatbot Assistant</h2>

      <p id="session-id">
        {sessionId ? `Hi! What can I help you with?` : "Starting session..."}
      </p>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.role === "user" ? "user-msg" : "bot-msg"}
          >
            <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </div>
        ))}
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          disabled={loading}
        />
        <button onClick={handleSendMessage} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
        <button className="end-session" onClick={handleEndSession}>
          End Chat
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
