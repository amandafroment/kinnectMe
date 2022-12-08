import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as eventsAPI from "../../utilities/events-api";
import { eventRemoveAttendee } from "../../utilities/events-api";
import "./MyEvents.css";

export default function MyEvents({ user, setEvent, showAllEvents, setShowAllEvents }) {
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

  function handleRemoveAttendee(event, attendeeId) {
    event.attendees = event.attendees.filter(
      (attendee) => attendee._id !== attendeeId
    );
    setShowAllEvents([...showAllEvents, event]);
  }

  return (
    <>
      <div className="UserEventsPage">
        <div className="user-events-page-header">
          <h1>I'm kinnected to:</h1>
        </div>{" "}
        <div className="lists-container">
          <div className="created-list-container">
            <div className="created-events-header">Events I created:</div>
            {userCreated.map((event) => {
              console.log(event);
              return (
                <div className="created-events-list">
                  <div className="created-event-card">
                    <Link
                      key={event._id}
                      to={"/" + event._id}
                      className="generate-events-links"
                    >
                      <h2 className="bold-header">
                        {event.name.toUpperCase()}
                      </h2>
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
                      <span className="bold-header">Address:</span>{" "}
                      {event.address}
                    </p>
                    <p>
                      <Link
                        key={event._id}
                        to={"/" + event._id}
                        className="generate-events-links"
                      >
                        <span className="bold-header">SEE DETAILS</span>
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="attending-events-container">
            <div className="attending-events-header">
              Events I'm kinnected to:
            </div>
            <div className="attending-events-list">
              {userAttending.map((event) => {
                return (
                  <div className="user-event-card">
                    <Link
                      key={event._id}
                      to={"/" + event._id}
                      className="generate-events-links"
                    >
                      <h2 className="bold-header">
                        {event.name.toUpperCase()}
                      </h2>
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
                      <span className="bold-header">Address:</span>{" "}
                      {event.address}
                    </p>
                    <p>
                      <Link
                        key={event._id}
                        to={"/" + event._id}
                        className="generate-events-links"
                      >
                        <span className="bold-header">SEE DETAILS</span>
                      </Link>
                    </p>
                    <span
                      className="material-symbols-outlined"
                      onClick={() => {
                        eventRemoveAttendee(event._id, user._id);
                        handleRemoveAttendee(event, user._id);
                      }}
                    >
                      group_remove
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
