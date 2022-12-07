import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import "./MyEvents.css";

export default function MyEvents({ user }) {
  console.log(event)
  const [showAllForUser, setShowAllForUser] = useState([]);
  let userEvents = eventsAPI.getAllForUser();
  setShowAllForUser(events);
    getEvents();

    // useEffect(function () {
  //   async function getEvents() {

  // setEvents(events);
  //   }

  // }, []);

  return (
    <>
      <div className="UserEventsPage">
        <div className="user-events-page-header">
          <h1>I'm kinnected to:</h1>
        </div>
        <UserEvents
          showAllForUser={showAllForUser}
          setShowAllForUser={setShowAllForUser}
          user={user}
        />
      </div>
    </>
  );
}
