# Profile Map App

This is a React-based web application that allows users to explore profiles, view their locations on a map, and manage profiles through an admin panel. The app is responsive and works seamlessly on desktops, tablets, and smartphones.

---

## Features

- **Profile List**: Displays a list of profiles with names, locations, and photos.
- **Search Functionality**: Allows users to search for profiles by name.
- **Map Integration**: Displays the location of a selected profile on a Google Map.
- **Admin Panel**: Enables adding, editing, and deleting profiles.
- **Responsive Design**: Optimized for various devices, including desktops, tablets, and smartphones.
- **Dark Mode**: Toggle between light and dark themes for better user experience.

---

## Screenshots

### On Desktop
<img width="1469" alt="Screenshot 2025-04-02 at 9 17 48 PM" src="https://github.com/user-attachments/assets/25346d7e-dff1-43f9-ba1a-4d4862cb0f12" />

### On Mobile
<img width="339" alt="Screenshot 2025-04-02 at 9 17 10 PM" src="https://github.com/user-attachments/assets/a41c16b9-ae49-4bc7-acba-68cabd4fd7c9" />

---

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- A Google Maps API key with billing enabled.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mdmahbubreza/Profile-Explorer
   cd Profile-Explorer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the Google Maps API key**:
   - Replace `API_KEY` in `public/index.html` with your Google Maps API key:
     ```html
     <script
       src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
       async
       defer
     ></script>
     ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## How to Use

1. **View Profiles**:
   - The home page displays a list of profiles with their names, photos, and locations.
   - Click "Show on Map" to view the profile's location on the map.

2. **Search Profiles**:
   - Use the search bar to filter profiles by name.

3. **Admin Panel**:
   - Click the "Admin Panel" button to add, edit, or delete profiles.

4. **Dark Mode**:
   - Toggle between light and dark themes using the button in the header.

---

## Features in Detail

### Profile List
- Displays profiles with their names, roles, and locations.
- Includes a "Summary" button to toggle the visibility of the role description.

### Map Integration
- Uses Google Maps to display the location of a selected profile.
- Displays a placeholder message when no location is selected.

### Admin Panel
- Add new profiles with details like name, role, location, coordinates, and photo URL.
- Edit existing profiles.
- Delete profiles from the list.

### Responsive Design
- Optimized for various screen sizes.
- Adjusts layout for desktops, tablets, and smartphones.

---

## Technologies Used

- **React**: Frontend framework.
- **Google Maps API**: For map integration.
- **CSS**: For styling and responsive design.

---

## Notes

- Ensure that your Google Maps API key has billing enabled to avoid the `BillingNotEnabledMapError`.
- Replace the placeholder screenshots with actual screenshots of your app.
