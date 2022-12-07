import React from "react";
import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import "./MyEvents.css";

export default function MyEvents({ user }) {
  const [userCreated, setUserCreated] = useState([]);
  const [userAttending, setUserAttending] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      let userEvents = await eventsAPI.getAllForUser();
      setUserCreated(userEvents[0]);
      setUserAttending(userEvents[1]);
      console.log(userEvents);
    }
    fetchUserData();
  }, []);

  return (
    <>
      <div className="UserEventsPage">
        <div className="user-events-page-header">
          <h1>I'm kinnected to:</h1>
          <h2>Events I created:</h2>
        </div>{" "}
        {userCreated.map((event) => {
          return (
            <div className="user-event-card">
              <h2 className="bold-header">{event.name.toUpperCase()}</h2>
              <p>
                <span className="bold-header">Time & Place:</span> {event.date}
              </p>
              <p>
                <span className="bold-header">Location:</span> {event.location}
              </p>
              <p>
                <span className="bold-header">Address:</span> {event.address}
              </p>
              <p>
                <span className="bold-header">All The Details: </span>
                {event.details}
              </p>
            </div>
          );
        })}
        <h2>Events I'm kinnected to:</h2>
        {userAttending.map((event) => {
          return (
            <div className="user-event-card">
              <h2 className="bold-header">{event.name.toUpperCase()}</h2>
              <p>
                <span className="bold-header">Time & Place:</span> {event.date}
              </p>
              <p>
                <span className="bold-header">Location:</span> {event.location}
              </p>
              <p>
                <span className="bold-header">Address:</span> {event.address}
              </p>
              <p>
                <span className="bold-header">All The Details: </span>
                {event.details}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

// export default function MyEvents({ user, event }) {
//   console.log(event)

//   const [showAllForUser, setShowAllForUser] = useState([]);
//   let userEvents = eventsAPI.getAllForUser();
//   setShowAllForUser(userEvents);
//     getEvents();

//     // useEffect(function () {
//   //   async function getEvents() {

//   // setEvents(events);
//   //   }

//   // }, []);

//   return (
//     <>
//       <div className="UserEventsPage">
//         <div className="user-events-page-header">
//           <h1>I'm kinnected to:</h1>
//         </div>
//         <UserEvents
//           showAllForUser={showAllForUser}
//           setShowAllForUser={setShowAllForUser}
//           user={user}
//         />
//       </div>
//     </>
//   );
// }
