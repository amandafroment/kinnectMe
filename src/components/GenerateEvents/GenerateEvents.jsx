import React from "react";
// import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import "./GenerateEvents.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { eventRemoveAttendee } from "../../utilities/events-api";

export default function GenerateEvents({
  showAllEvents,
  setShowAllEvents,
  selectedEvent,
  user,
  setEvent,
}) {
  const [error, setError] = useState("");

  async function handleDetails(id) {
    console.log(id);
    try {
      let detail = await eventsAPI.getDetails(id);
    } catch (err) {
      console.log(err);
      setError("Get Detail Event failed - Try Again");
    }
  }

  function handleAddAttendee(event, eventId) {
    for (let event of showAllEvents) {
      console.log(event.attendees);
    }
    event.attendees.push({ _id: user._id });
    setShowAllEvents([...showAllEvents, event]);
    eventsAPI.eventAddAttendee(eventId);
  }

  function handleRemoveAttendee(event, attendeeId) {
    event.attendees = event.attendees.filter(
      (attendee) => attendee._id !== attendeeId
    );
    setShowAllEvents([...showAllEvents, event]);
  }
  return (
    <>
      <div className="find-events-list">
        <div>
          {showAllEvents.map((event) => {
            const isAttending = event.attendees.findIndex((element) => {
              if (element._id === user) {
                console.log("true");
                return true;
              }
              return false;
            });
            console.log(event.attendees.includes({ _id: user }));
            // console.log(user);
            // console.log(event.attendees[0]);
            return (
              <div className="find-event-card">
                <Link
                  key={event._id}
                  onClick={() => {
                    handleDetails(event._id);
                    setEvent(event);
                  }}
                  to={"/" + event._id}
                  className="generate-events-links"
                >
                  <h2 className="bold-header">{event.name.toUpperCase()}</h2>
                </Link>
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
                <div>
                  {event.attendees.some(
                    (attendee) => attendee._id === user._id
                  ) ? (
                    <span
                      className="material-symbols-outlined"
                      onClick={() => {
                        eventRemoveAttendee(event._id, user._id);
                        handleRemoveAttendee(event, user._id);
                      }}
                    >
                      group_remove
                    </span>
                  ) : (
                    <span
                      className="material-symbols-outlined"
                      onClick={() => handleAddAttendee(event, event._id)}
                    >
                      person_add
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
