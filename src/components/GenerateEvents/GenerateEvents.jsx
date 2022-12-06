import React from "react";
import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import "./GenerateEvents.css";

export default function GenerateEvents({ showAllEvents, setShowAllEvents }) {
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
