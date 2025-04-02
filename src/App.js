import React, { useState } from "react";
import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import MapView from "./components/MapView";
import AdminPanelForm from "./components/AdminPanelForm";
import "./styles/App.css";

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [profiles, setProfiles] = useState([
    {
      name: "Alex Morgan",
      role: "Software engineer specializing in frontend development with React and TypeScript.",
      location: "San Francisco, CA",
      coordinates: { lat: 37.7749, lng: -122.4194 },
      photo: "/img/alex-morgan.jpeg", // Correctly referenced from public folder
    },
    {
      name: "Sarah Chen",
      role: "Product designer with a passion for creating intuitive user experiences.",
      location: "New York, NY",
      coordinates: { lat: 40.7128, lng: -74.006 },
      photo: "/img/sarah-chen.jpeg", // Correctly referenced from public folder
    },
    {
      name: "James Wilson",
      role: "Marketing director with 10+ years experience in digital strategy and branding.",
      location: "Chicago, IL",
      coordinates: { lat: 41.8781, lng: -87.6298 },
      photo: "/img/james-wilson.jpeg", // Correctly referenced from public folder
    },
  ]);
  const [isAdminPanelVisible, setIsAdminPanelVisible] = useState(false);

  const handleShowOnMap = (coords) => {
    setCoordinates(coords); // Update the coordinates state
  };

  const addProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  const editProfile = (index, updatedProfile) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[index] = updatedProfile;
    setProfiles(updatedProfiles);
  };

  const deleteProfile = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
  };

  const toggleAdminPanel = () => {
    setIsAdminPanelVisible(!isAdminPanelVisible);
  };

  return (
    <div className="app">
      <Header toggleAdminPanel={toggleAdminPanel} />
      <div className="content">
        {isAdminPanelVisible ? (
          <AdminPanelForm
            profiles={profiles}
            addProfile={addProfile}
            editProfile={editProfile}
            deleteProfile={deleteProfile}
            toggleAdminPanel={toggleAdminPanel}
          />
        ) : (
          <>
            <ProfileList profiles={profiles} onShowOnMap={handleShowOnMap} />
            <MapView coordinates={coordinates} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;