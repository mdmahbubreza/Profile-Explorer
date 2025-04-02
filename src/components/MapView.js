import React, { useEffect, useRef } from "react";

function MapView({ coordinates }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (coordinates && window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: coordinates,
        zoom: 10,
      });

      new window.google.maps.Marker({
        position: coordinates,
        map: map,
      });
    }
  }, [coordinates]);

  return (
    <div
      ref={mapRef}
      style={{
        height: "100%",
        width: "100%",
        display: coordinates ? "block" : "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ddd",
      }}
    >
      {!coordinates && <p>Click on "Show on Map" to see the location of the profile.</p>}
    </div>
  );
}

export default MapView;