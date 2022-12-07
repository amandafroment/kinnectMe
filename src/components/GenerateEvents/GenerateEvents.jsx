import React from "react";
// import { useState, useEffect } from "react";
import * as eventsAPI from "../../utilities/events-api";
import "./GenerateEvents.css";
import axios from "axios";
import { eventRemoveAttendee } from "../../utilities/events-api";

export default function GenerateEvents({
  showAllEvents,
  setShowAllEvents,
  selectedEvent,
  user,
}) {
  function handleAddAttendee(event, eventId) {
    for (let event of showAllEvents) {
      console.log(event.attendees);
    }
    event.attendees.push({ _id: user._id });
    setShowAllEvents([...showAllEvents, event]);
    eventsAPI.eventAddAttendee(eventId);
  }

  function handleDelete(id) {
    console.log("Delete clicked!");
    setShowAllEvents(showAllEvents.filter((event) => event.id !== id));
    axios.delete(`/api/events/${id}`);
    console.log("Delete finished!");
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
                <div>
                  {event.attendees.some(
                    (attendee) => attendee._id === user._id
                  ) ? (
                    <span
                      class="material-symbols-outlined"
                      onClick={() => {
                        eventRemoveAttendee(event._id, user._id);
                        handleRemoveAttendee(event, user._id);
                      }}
                    >
                      person_off
                    </span>
                  ) : (
                    <span
                      class="material-symbols-outlined"
                      onClick={() => handleAddAttendee(event, event._id)}
                    >
                      person_add
                    </span>
                  )}
                </div>
                <p>
                  <button onClick={() => handleDelete(event._id)}>X</button>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
