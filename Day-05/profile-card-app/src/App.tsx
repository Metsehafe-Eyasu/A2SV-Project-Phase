import React from "react";
import "./App.css"; // Importing the CSS file for styling
import Avatar from "./components/Avatar";
import Card from "./components/Card";
import Info from "./components/Info";
import { users } from "./model"; // Importing the user data from the 'model' file

/**
 * App component - The main component that displays all user profiles.
 * @returns {JSX.Element} - The rendered App component.
 */
const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Profiles</h1>
      <div className="cards-container">
        {/* Mapping through the 'users' array to render each user profile */}
        {users.map((user) => (
          // Each user profile is wrapped inside a Card component
          <Card key={user.name}>
            {/* Inside the Card, we render Avatar and Info components */}
            <Avatar avatarURL={user.avatarURL} />
            <Info name={user.name} bio={user.bio} website={user.website} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
