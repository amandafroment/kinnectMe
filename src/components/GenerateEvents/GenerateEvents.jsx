import React from "react";
import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import "./GenerateEvents.css";
import { Link } from "react-router-dom";

export default function GenerateEvents({
  showAllEvents,
  setShowAllEvents,
  selectedEvent,
  setEvent,
}) {
  const [error, setError] = useState("");

  async function handleDetails(evt) {
    console.log(evt);
    try {
      let detail = await eventsAPI.getDetails(evt);
    } catch (err) {
      console.log(err);
      setError("Get Detail Event failed - Try Again");
    }
  }
  return (
    <>
      <div className="find-events-list">
        <div>
          {showAllEvents.map((event) => {
            return (
              <Link
                key={event._id}
                onClick={() => {
                  handleDetails(event._id);
                  setEvent(event);
                }}
                to={"/" + event._id}
              >
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
                    <span className="bold-header">Address:</span>{" "}
                    {event.address}
                  </p>
                  <p>
                    <span className="bold-header">All The Details: </span>
                    {event.details}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
