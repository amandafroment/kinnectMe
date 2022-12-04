import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <Link to="/createevent">Create Event</Link>
      &nbsp; | &nbsp;
      <Link to="/searchevents">Find Events</Link>
      &nbsp; | &nbsp;
      {user && <span>Welcome, {user.name}</span>}
      &nbsp;{" "}
      <Link to="" onClick={handleLogOut}>
        <span class="material-symbols-outlined">logout</span>
      </Link>
    </nav>
  );
}
