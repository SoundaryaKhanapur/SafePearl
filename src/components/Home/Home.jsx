import React, { useState, useRef, useEffect, useMemo } from "react";
import "./Home.css";
import { useLoadScript } from "@react-google-maps/api";
import MapComponent from "../Map/Map";

const Home = () => {
  const libraries = useMemo(() => ["places"], []);
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("Dummy response: You are not alone, and help is available.");
  const [isRecording, setIsRecording] = useState(false);
  const responseRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const handleTextInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!inputText.trim()) {
      alert("Please enter some text.");
      return;
    }
    setLoading(true);
    setError(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);

          console.log("User Location:", location);

          // Commented out OpenAI call
          // const advice = await getOpenAIAdvice(inputText);
          // setResponse(advice);

          setResponse("Dummy response: Stay safe and reach out to support organizations in your area.");

          setLoading(false);
        },
        (error) => {
          console.error("Error fetching location:", error);
          setError("Unable to fetch your location. Please enable location access.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response) {
      responseRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [response]);

  return (
    <div className="home-page">
      <h2>Tell Us What Happened</h2>

      {/* Text Input Section */}
      <textarea
        className="input-text"
        placeholder="Describe what happened..."
        rows="4"
        value={inputText}
        onChange={handleTextInput}
      />
      <button className="submit-button" onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>

      {/* Response Section */}
      <div className="response-container">
        <h3>Our Response</h3>
        {response ? (
          <div ref={responseRef} className="response-box">
            <p>{response}</p>
          </div>
        ) : (
          <p>Your response will appear here.</p>
        )}
      </div>
    </div>
  );
};

export default Home;