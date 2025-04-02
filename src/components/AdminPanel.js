import React, { useState } from "react";

function AdminPanel({ profiles, addProfile, editProfile, deleteProfile }) {
  const [newProfile, setNewProfile] = useState({
    name: "",
    role: "",
    location: "",
    coordinates: { lat: 0, lng: 0 },
    photo: "",
  });

  const handleAdd = () => {
    addProfile(newProfile);
    setNewProfile({ name: "", role: "", location: "", coordinates: { lat: 0, lng: 0 }, photo: "" });
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="profile-form">
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newProfile.role}
          onChange={(e) => setNewProfile({ ...newProfile, role: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newProfile.location}
          onChange={(e) => setNewProfile({ ...newProfile, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Latitude"
          value={newProfile.coordinates.lat}
          onChange={(e) =>
            setNewProfile({
              ...newProfile,
              coordinates: { ...newProfile.coordinates, lat: parseFloat(e.target.value) },
            })
          }
        />
        <input
          type="text"
          placeholder="Longitude"
          value={newProfile.coordinates.lng}
          onChange={(e) =>
            setNewProfile({
              ...newProfile,
              coordinates: { ...newProfile.coordinates, lng: parseFloat(e.target.value) },
            })
          }
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
        />
        <button onClick={handleAdd}>Add Profile</button>
      </div>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <div key={index} className="profile">
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <p>{profile.location}</p>
            <button onClick={() => deleteProfile(index)}>Delete</button>
            <button
              onClick={() =>
                editProfile(index, {
                  ...profile,
                  name: prompt("Edit Name", profile.name) || profile.name,
                })
              }
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;