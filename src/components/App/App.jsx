import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "../Landing/Landing";
import Home from "../Home/Home";
import ChatPage from "../ChatPage/ChatPage";
import Nav from "../Nav/Nav";
import CheckPolicies from "../CheckPolicies/CheckPolicies";

const App = () => {
  const chatPageRef = useRef(null);

  const handlePreventInteraction = () => {
    chatPageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Nav />
      <Landing onPreventInteraction={handlePreventInteraction} />
      <Home />
      <ChatPage ref={chatPageRef} />
    </div>
  );
};

export default App;
