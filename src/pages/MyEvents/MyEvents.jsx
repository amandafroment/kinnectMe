import { useState, useEffect } from "react";
// import * as eventsAPI from "../../utilities/events-api";

export default function MyEvents() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // useEffect(function () {
  //   async function getEvents() {
  //     const events = await eventsAPI.getAll();
  //     setEvents(events);
  //   }
  //   getEvents();
  // }, []);

  return (
    <>
      <h2>My Events</h2>
    </>
  );
}
