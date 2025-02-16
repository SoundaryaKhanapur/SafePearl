import React, { useState, useRef, useEffect, useMemo } from "react";
import "./Home.css";
import getOpenAIAdvice from "../../service/openai";
import { useLoadScript } from "@react-google-maps/api";
import MapComponent from "../Map/Map";

const Home = () => {
  const libraries = useMemo(() => ["places"], []);
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");
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

          const advice = await getOpenAIAdvice(inputText);
          setResponse(advice);

          // const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Add your API key here
          // const radius = 5000; // Search within a 5km radius
          // const keyword = "harassment support"; // Search keyword

          // const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&keyword=${keyword}&key=${apiKey}`;

          if (window.google && window.google.maps) {
            const map = new window.google.maps.Map(
              document.createElement("div")
            ); // Dummy map
            const service = new window.google.maps.places.PlacesService(map);

            const request = {
              location: new window.google.maps.LatLng(
                location.lat,
                location.lng
              ),
              radius: 5000, // Search within a 5km radius
              keyword: "harassment support", // Search keyword
            };

            service.nearbySearch(request, (results, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                console.log("Places API Response:", results); // Log Places API response
                setOrganizations(results);
                console.log("Organizations:", results); // Log organizations data
              } else {
                console.error("Places API Error:", status);
                setError("No organizations found near your location.");
              }
              setLoading(false);
            });
          } else {
            setError("Google Maps JavaScript API is not loaded.");
            setLoading(false);
          }
        },
        (error) => {
          console.error("Error fetching location:", error);
          setError(
            "Unable to fetch your location. Please enable location access."
          );
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  };

  //         fetch(apiUrl)
  //           .then((response) => response.json())
  //           .then((data) => {
  //             console.log("Places API Response:", data);
  //             if (data.results) {
  //               setOrganizations(data.results);
  //               console.log("Organizations:", data.results);
  //             } else {
  //               setError("No organizations found near your location.");
  //             }
  //           })
  //           .catch((error) => {
  //             console.error("Error fetching organizations:", error);
  //             setError(
  //               "Failed to fetch organizations. Please try again later."
  //             );
  //           })
  //           .finally(() => {
  //             setLoading(false);
  //           });
  //       },
  //       (error) => {
  //         console.error("Error fetching location:", error);
  //         setError(
  //           "Unable to fetch your location. Please enable location access."
  //         );
  //         setLoading(false);
  //       }
  //     );
  //   } else {
  //     setError("Geolocation is not supported by your browser.");
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    if (response) {
      responseRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [response]);

  const startVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
      setIsRecording(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
    };

    recognition.start();
  };

  const parseResponse = (response) => {
    const transformedResponse = response
      .replace("### What Happened", "**Here's What Happened**")
      .replace("### Encouragement", "**Please Don't Be Silent**")
      .replace("### Coping Strategies", "**Here Are Coping Strategies**");

    const sections = transformedResponse.split("\n\n");
    return sections.map((section, index) => (
      <div key={index} className="response-section">
        {section.split("\n").map((line, i) => {
          if (line.startsWith("**")) {
            // Style headings differently
            return (
              <h4 key={i} className="response-heading">
                {line.replace(/\*\*/g, "")}
              </h4>
            );
          }
          return (
            <p key={i} className="response-text">
              {line}
            </p>
          );
        })}
      </div>
    ));
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

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
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </button>

      {/* Voice Input Section */}
      <div className="voice-input">
        <p>Or, record your voice:</p>
        <button
          className="voice-button"
          onClick={startVoiceInput}
          disabled={isRecording || loading}
        >
          {isRecording ? "Recording..." : "Start Recording"}
        </button>
      </div>

      {/* Response Section */}
      <div className="response-container">
        <h3>Our Response</h3>
        {response ? (
          <div ref={responseRef} className="response-box">
            {parseResponse(response)}
          </div>
        ) : (
          <p>Your response will appear here.</p>
        )}
      </div>

      {/* Organizations Section */}
      {userLocation && (
        <div className="organizations-section">
          <h3>Local Support Organizations</h3>
          {loading ? (
            <p>Loading organizations...</p>
          ) : error ? (
            <p>{error}</p>
          ) : organizations.length > 0 ? (
            <div className="organizations-container">
              {organizations.map((org, index) => (
                <div key={index} className="organization-card">
                  <h4>{org.name}</h4>
                  <p>Address: {org.vicinity}</p>
                  <p>Rating: {org.rating || "Not rated"}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No organizations found near your location.</p>
          )}
        </div>
      )}

      {/* Map Section */}
      {userLocation && (
        <div className="map-view">
          <h4>Your Location</h4>
          {loading ? (
            <div className="map-placeholder">Loading map...</div>
          ) : error ? (
            <div className="map-placeholder">{error}</div>
          ) : (
            <MapComponent organizations={organizations} center={userLocation} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
