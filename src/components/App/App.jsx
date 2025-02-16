// import React, { useRef } from "react";
import "./App.css";
import Landing from "../Landing/Landing";
import Home from "../Home/Home";
// import ChatPage from "../ChatPage/ChatPage";
import Nav from "../Nav/Nav";
import Chatbot from "../ChatBot/ChatBot";
const App = () => {
  // const chatPageRef = useRef(null);

  // const handlePreventInteraction = () => {
  //   chatPageRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <div className="app">
      <Nav />
      {/* <Landing onPreventInteraction={handlePreventInteraction} /> */}
      <Landing />
      <Home />
      <Chatbot />
      {/* <ChatPage /> */}
      {/* <ChatPage ref={chatPageRef} /> */}
    </div>
  );
};

export default App;
