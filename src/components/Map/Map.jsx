import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const MapComponent = ({ organizations, center }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
      >
        {organizations.map((org, index) => {
          const lat = org.geometry.location.lat();
          const lng = org.geometry.location.lng();

          return (
            <Marker
              key={index}
              position={{
                lat: lat,
                lng: lng,
              }}
              title={org.name}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
