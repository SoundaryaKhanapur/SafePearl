import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckPolicies from "./components/CheckPolicies/CheckPolicies";  


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Routes>
        <Route path="/*" element={<App />} /> {/* ✅ Renders App.js for all other routes */}
        <Route path="/checkpolicies" element={<CheckPolicies />} /> {/* ✅ CheckPolicies route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
