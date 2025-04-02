import React, { useState } from "react";

function AdminPanelForm({ profiles, addProfile, editProfile, deleteProfile, toggleAdminPanel }) {
  const [newProfile, setNewProfile] = useState({
    name: "",
    role: "",
    location: "",
    coordinates: { lat: "", lng: "" },
    photo: "",
  });

  const handleAddOrEdit = () => {
    if (newProfile.index !== undefined) {
      // Edit existing profile
      const updatedProfile = { ...newProfile };
      delete updatedProfile.index; // Remove the temporary index property
      editProfile(newProfile.index, updatedProfile);
    } else {
      // Add new profile
      addProfile(newProfile);
    }
    setNewProfile({ name: "", role: "", location: "", coordinates: { lat: "", lng: "" }, photo: "" });
  };

  const handleEdit = (index) => {
    setNewProfile({ ...profiles[index], index }); // Add index to track the profile being edited
  };

  return (
    <div className="admin-panel-form">
      <h2>Admin Panel</h2>
      <button onClick={toggleAdminPanel}>Close</button>
      <div className="form">
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
              coordinates: { ...newProfile.coordinates, lat: e.target.value },
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
              coordinates: { ...newProfile.coordinates, lng: e.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
        />
        <button onClick={handleAddOrEdit}>
          {newProfile.index !== undefined ? "Save Changes" : "Add Profile"}
        </button>
      </div>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <div key={index} className="profile">
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <p>{profile.location}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteProfile(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanelForm;