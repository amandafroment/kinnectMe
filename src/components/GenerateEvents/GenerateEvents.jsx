import React from "react";
// import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import "./GenerateEvents.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function GenerateEvents({
  showAllEvents,
  setShowAllEvents,
  selectedEvent,
  user,
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

  function attendingButton(eventId) {
    // console.log("test");
    // console.log(eventId);
    eventsAPI.eventAddAttendee(eventId);
  }

  function handleDelete(id) {
    console.log("Delete clicked!");
    setShowAllEvents(showAllEvents.filter((event) => event.id !== id));
    axios.delete(`/api/events/${id}`);
    console.log("Delete finished!");
  }
  return (
    <>
      <div className="find-events-list">
        <div>
          {showAllEvents.map((event) => {
            // let isAttending = event.attendees.includes({ _id: user });
            const isAttending = event.attendees.findIndex((element) => {
              if (element._id === user) {
                console.log("true");
                return true;
              }
              console.log(element);
              console.log("false");
              return false;
            });
            console.log(event.attendees.includes({ _id: user }));
            // console.log(user);
            // console.log(event.attendees[0]);
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
                  <div>
                    {event.attendees.includes(user) ? (
                      <span class="material-symbols-outlined">person_off</span>
                    ) : (
                      <span
                        class="material-symbols-outlined"
                        onClick={() => attendingButton(event._id)}
                      >
                        person_add
                      </span>
                    )}
                  </div>
                  <p>
                    <button onClick={() => handleDelete(event._id)}>X</button>
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
