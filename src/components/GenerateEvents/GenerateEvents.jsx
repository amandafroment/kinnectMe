import React from "react";
// import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
// import AttendingButton from "../AttendingButton/AttendingButton";
import "./GenerateEvents.css";

export default function GenerateEvents({ showAllEvents, setShowAllEvents }) {
  function attendingButton(eventId) {
    console.log("test");
    console.log(eventId);
    eventsAPI.eventAddAttendee(eventId);
  }

  //   const [showAttending, setShowAttending] = useState("");

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
                <div>
                  <span
                    class="material-symbols-outlined"
                    onClick={() => attendingButton(event._id)}
                  >
                    person_add
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
