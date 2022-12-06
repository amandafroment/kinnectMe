import React from "react";
import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import "./GenerateEvents.css";

export default function GenerateEvents({
  showAllEvents,
  setShowAllEvents,
  selectedEvent,
}) {
  return (
    <>
      <div className="find-events-list">
        <div>
          {showAllEvents.map((event) => {
            return (
              <div className="find-event-card">
                <h2 className="bold-header">{event.name.toUpperCase()}</h2>
                <p>
                  <span className="bold-header">Time & Place:</span>{" "}
                  {event.date}
                </p>
                <p>
                  <span className="bold-header">Location:</span>{" "}
                  {event.location}
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
      </div>
    </>
  );
}
