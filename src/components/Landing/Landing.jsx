import React, { useRef } from "react";
import "./Landing.css";

// const Landing = ({ onPreventInteraction }) => {
const Landing = () => {
  const homeSectionRef = useRef(null);

  const handleStartInteraction = () => {
    homeSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-page">
      <h2>Your Voice Matters. You Are Not Alone.</h2>
      <p>
        If you've faced harassment, you deserve support. <br /> Enter your
        experience and we'll guide you to nearby organizations that can help.
      </p>
      <button onClick={handleStartInteraction}>Get Help Now</button>
      {/* <button onClick={onPreventInteraction}>Prevention</button> */}

      <div ref={homeSectionRef}></div>
    </div>
  );
};

export default Landing;
