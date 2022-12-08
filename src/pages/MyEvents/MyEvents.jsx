import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as eventsAPI from "../../utilities/events-api";
import { eventRemoveAttendee } from "../../utilities/events-api";
import "./MyEvents.css";

export default function MyEvents({ user, setEvent }) {
  const [userCreated, setUserCreated] = useState([]);
  const [userAttending, setUserAttending] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      let userEvents = await eventsAPI.getAllForUser();
      setUserCreated(userEvents[0]);
      setUserAttending(userEvents[1]);
    }
    fetchUserData();
  }, []);

  function handleRemoveAttendee(event, attendeeId) {
    event.attendees = event.attendees.filter(
      (attendee) => attendee._id !== attendeeId
    );
    setUserAttending(
      userAttending.filter((attendedEvent) => attendedEvent._id !== event._id)
    );
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
            <div className="created-events-list">
              {userCreated.map((event) => {
                console.log(event);
                return (
                  <div className="created-event-card" key={event._id}>
                    <Link
                      to={"/" + event._id}
                      className="generate-events-links"
                      onClick={() => setEvent(event)}
                    >
                      <h2 className="bold">{event.name.toUpperCase()}</h2>
                    </Link>
                    <div className="card-content">
                      <div className="property">
                        <div className="bold-key">Date:</div>{" "}
                        <div className="value">{event.date.slice(0, 10)}</div>
                      </div>
                      <div className="property">
                        <div className="bold-key">Time:</div>{" "}
                        <div className="value">{event.date.slice(11, 19)}</div>
                      </div>
                      <div className="property">
                        <div className="bold-key">Location:</div>{" "}
                        <div className="value">{event.location}</div>
                      </div>
                      <div className="property">
                        <div className="bold-key">Address:</div>{" "}
                        <div className="value">{event.address}</div>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="property">
                        <div className="bold-key">
                          <Link
                            to={"/" + event._id}
                            className="generate-events-links"
                            onClick={() => setEvent(event)}
                          >
                            SEE DETAILS
                          </Link>
                        </div>
                        <div className="value">
                          <div className="your-event">
                            <span className="your">Your </span>
                            <div className="material-symbols-outlined">
                              account_circle
                            </div>{" "}
                            <span className="event"> event.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="attending-events-container">
            <div className="attending-events-header">
              Events I'm kinnected to:
            </div>
            <div className="attending-events-list">
              {userAttending.map((event) => {
                return (
                  <div className="user-event-card" key={event._id}>
                    <Link
                      to={"/" + event._id}
                      className="generate-events-links"
                      onClick={() => setEvent(event)}
                    >
                      <div className="bold-key-attending">
                        {event.name.toUpperCase()}
                      </div>
                    </Link>
                    <div className="card-content">
                      <div className="property">
                        <div className="bold-key">Date:</div>{" "}
                        <div className="value">{event.date.slice(0, 10)}</div>
                      </div>
                      <div className="property">
                        <div className="bold-key">Time:</div>{" "}
                        <div className="value">{event.date.slice(11, 19)}</div>
                      </div>
                      <div className="property">
                        <div className="bold-key">Location:</div>{" "}
                        <div className="value">{event.location}</div>
                      </div>
                      <div className="property">
                        <div className="bold-key">Address:</div>{" "}
                        <div className="value">{event.address}</div>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="property">
                        <div className="bold-key">
                          <Link
                            to={"/" + event._id}
                            className="generate-events-links"
                            onClick={() => setEvent(event)}
                          >
                            SEE DETAILS
                          </Link>
                        </div>
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
                    </div>
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
