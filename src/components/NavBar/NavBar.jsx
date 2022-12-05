import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav className="NavBarContainer">
      <div className="logo">
        <Link to="/" className="links logo">
          kinnectMe
        </Link>
      </div>
      <div className="links-container">
        <Link to="/createevent" className="links">
          Create Event
        </Link>

        <Link to="/searchevents" className="links">
          Find Events
        </Link>

        {user && <span className="links">Welcome, {user.name}</span>}

        <Link to="" onClick={handleLogOut} className="links">
          <span className="material-symbols-outlined">logout</span>
        </Link>
      </div>
    </nav>
  );
}
