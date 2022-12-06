import React from "react";
import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import AttendingButton from "../AttendingButton/AttendingButton";
import "./GenerateEvents.css";

export default function GenerateEvents({ showAllEvents, setShowAllEvents }) {
  const [addAttendee, setAddAttendee] = useState([]);
  const updateEvent = await eventsAPI.setAddAttendee(userId, eventId)
function attendingButton() {
  
}
  //   useEffect(function () {
  //     async function getEvents() {
  //       let events = await eventsAPI.generateEvents();
  //       setShowEvents(events);
  //       console.log(events, "events");
  //     }
  //     getEvents();
  //   }, []);

  return (
    <>
      <div className="find-events-list">
        <h1>Find an Event</h1>
        <div>
          {showAllEvents.map((event) => {
            return (
              <div className="find-event-card">
                <div className="event-card-title ">{event.name}</div>
                <div>{event.date}</div>
                <div>{event.location}</div>
                <div>{event.address}</div>
                <button onClick={attendingButton}>Attending</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
