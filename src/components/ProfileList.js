import React, { useState } from "react";

const profiles = [
  {
    name: "Alex Morgan",
    role: "Software engineer specializing in frontend development with React and TypeScript.",
    location: "San Francisco, CA",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    photo: "./public/img/alex-morgan.jpeg", 
  },
  {
    name: "Sarah Chen",
    role: "Product designer with a passion for creating intuitive user experiences.",
    location: "New York, NY",
    coordinates: { lat: 40.7128, lng: -74.006 },
    photo: "/img/sarah-chen.jpeg", 
  },
  {
    name: "James Wilson",
    role: "Marketing director with 10+ years experience in digital strategy and branding.",
    location: "Chicago, IL",
    coordinates: { lat: 41.8781, lng: -87.6298 },
    photo: "/img/james-wilson.jpeg", 
  },
];

function ProfileList({ profiles, onShowOnMap }) {
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const toggleDescription = (index) => {
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profile-list">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="profiles">
        {filteredProfiles.map((profile, index) => (
          <div key={index} className="profile">
            <img
              src={profile.photo}
              alt={`${profile.name}'s profile`}
              className="profile-photo"
            />
            <h3>{profile.name}</h3>
            {visibleDescriptions[index] && <p>{profile.role}</p>} {/* Show role only if visible */}
            <p>📍 {profile.location}</p>
            <button
              className="summary-button"
              onClick={() => toggleDescription(index)}
            >
              {visibleDescriptions[index] ? "Hide Summary" : "Summary"}
            </button>
            <button
              className="show-on-map-button"
              onClick={() => onShowOnMap(profile.coordinates)}
            >
              Show on Map
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileList;
