import React, { useState } from "react";

function Header({ toggleAdminPanel, isAdmin }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#f0f0f0" : "#333";
    document.body.style.color = darkMode ? "#333" : "#f0f0f0";
  };

  return (
    <header className="header">
      <h1>Profile Explorer</h1>
      <div className="header-actions">
        <button onClick={toggleDarkMode}>{darkMode ? "🌞" : "🌙"}</button>
        <button onClick={toggleAdminPanel}>
          {isAdmin ? "Back to App" : "Admin Panel"}
        </button>
      </div>
    </header>
  );
}

export default Header;