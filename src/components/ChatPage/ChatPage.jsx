// import React, { forwardRef, useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import "./ChatPage.css";

// // Use forwardRef to allow ref forwarding
// const ChatPage = forwardRef((props, ref) => {
//   const [inputText, setInputText] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const parseResponse = (response) => {
//     // Transform the response headings
//     const transformedResponse = response
//       .replace(/### Understanding the Issue/g, "**Understanding the Issue**")
//       .replace(/### Prevention Tips/g, "**Prevention Tips**")
//       .replace(/### Resources/g, "**Resources**");

//     // Split the response into sections
//     const sections = transformedResponse.split("\n\n");

//     // Map through each section and format it
//     return sections.map((section, index) => (
//       <div key={index} className="response-section">
//         {section.split("\n").map((line, i) => {
//           if (line.startsWith("**")) {
//             // Style headings differently
//             return (
//               <h4 key={i} className="response-heading">
//                 {line.replace(/\*\*/g, "")}
//               </h4>
//             );
//           }
//           return (
//             <p key={i} className="response-text">
//               {line}
//             </p>
//           );
//         })}
//       </div>
//     ));
//   };

//   const handleSubmit = async () => {
//     if (!inputText.trim()) {
//       alert("Please enter a question or scenario.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const genAI = new GoogleGenerativeAI(
//         process.env.REACT_APP_GOOGLE_GENERATIVE_AI_API_KEY
//       );
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//       // System prompt to guide the AI's response format
//       const systemPrompt = `
//         You are a helpful assistant that provides prevention information on harassment in specific scenarios.
//         The user will describe a scenario, and you must provide advice tailored to that scenario.
//         Structure your response into three sections:
//         1. Understanding the Issue: Explain the potential risks and why awareness is important.
//         2. Prevention Tips: Provide actionable, practical tips to enhance safety and prevent harassment.
//         3. Resources: Suggest relevant resources or organizations for further help and support.
//         Use clear headings for each section and tailor the advice to the user's scenario.
//         Use "###" for headings (e.g., ### Understanding the Issue).
//       `;

//       const fullPrompt = `${systemPrompt}\n\nUser Scenario: ${inputText}`;

//       const result = await model.generateContent(fullPrompt);
//       const text = result.response.text();
//       setResponse(text);
//     } catch (error) {
//       console.error("Error generating response:", error);
//       setError("Failed to generate a response. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="chat-page" ref={ref}>
//       <h2>Ask Your Question</h2>
//       <textarea
//         placeholder="Describe your scenario (e.g., Driving late at night or Going to a late-night party)..."
//         value={inputText}
//         onChange={handleInputChange}
//         disabled={loading}
//       />
//       <button onClick={handleSubmit} disabled={loading}>
//         {loading ? "Generating..." : "Submit"}
//       </button>

//       {error && <p className="error-message">{error}</p>}

//       {response && (
//         <div className="response-box">
//           <h3>Response</h3>
//           {parseResponse(response)}
//         </div>
//       )}
//     </div>
//   );
// });

// export default ChatPage;
import React, { useState } from "react";
import "./ChatPage.css";

const ChatPage = () => {
  const [sessionId, setSessionId] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const startSession = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://safepearls-backend.onrender.com/new_session",
        {
          method: "POST",
        }
      );
      const data = await response.json();
      setSessionId(data.sessionId);
    } catch (error) {
      console.error("Error starting session:", error);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!userMessage.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        "https://safepearls-backend.onrender.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId, userMessage }),
        }
      );
      const data = await response.json();
      setChatHistory([
        ...chatHistory,
        { user: userMessage, bot: data.response },
      ]);
      setUserMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const endSession = async () => {
    setLoading(true);
    try {
      await fetch("https://safepearls-backend.onrender.com/end_session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
      });
      setSessionId("");
      setChatHistory([]);
    } catch (error) {
      console.error("Error ending session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-page">
      <h2 className="title">Chat Interface</h2>
      {!sessionId ? (
        <button onClick={startSession} disabled={loading} className="button">
          {loading ? "Starting Session..." : "Start Session"}
        </button>
      ) : (
        <>
          <input
            placeholder="Type your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            disabled={loading}
            className="input"
          />
          <button onClick={sendMessage} disabled={loading} className="button">
            {loading ? "Sending..." : "Send Message"}
          </button>
          <button onClick={endSession} disabled={loading} className="button">
            {loading ? "Ending Session..." : "End Session"}
          </button>
        </>
      )}

      <div className="chat-history">
        <h3 className="subtitle">Chat History</h3>
        {chatHistory.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          <ul>
            {chatHistory.map((msg, index) => (
              <li key={index} className="chat-message">
                <strong>You:</strong> {msg.user}
                <br />
                <strong>Bot:</strong> {msg.bot}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
