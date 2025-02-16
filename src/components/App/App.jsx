import React, { useRef } from "react";
import "./App.css";
import Landing from "../Landing/Landing";
import Home from "../Home/Home";
import ChatPage from "../ChatPage/ChatPage";

const App = () => {
  const chatPageRef = useRef(null);

  const handlePreventInteraction = () => {
    chatPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Landing onPreventInteraction={handlePreventInteraction} />
      <Home />
      <ChatPage ref={chatPageRef} />
    </div>
  );
};

export default App;
