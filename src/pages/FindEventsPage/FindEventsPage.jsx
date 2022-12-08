import FindEventButtons from "../../components/FindEventButtons/FindEventButtons";
import GenerateEvents from "../../components/GenerateEvents/GenerateEvents";
import * as eventsAPI from "../../utilities/events-api";
import { useEffect, useState } from "react";
import "./FindEventsPage.css";

export default function FindEventsPage({
  user,
  setEvent,
  showAllEvents,
  setShowAllEvents,
}) {
  const [selectedEvent, setSelectedEvent] = useState("");

  useEffect(function () {
    async function getEvents() {
      let events = await eventsAPI.getAllEvents();
      setShowAllEvents(events);
      console.log(events, "events");
    }
    getEvents();
  }, []);

  useEffect(
    function () {
      async function filterEvents() {
        if (selectedEvent != "") {
          let events = await eventsAPI.getAllEvents();
          const filteredEvents = events.filter((event) => {
            console.log(event, selectedEvent);
            return event.category === selectedEvent;
          });
          setShowAllEvents(filteredEvents);
        }
      }
      filterEvents();
    },
    [selectedEvent]
  );

  return (
    <>
      <div className="FindEventsPage">
        <div className="find-events-page-header">
          <h1>KinnectMe with...</h1>
        </div>
        <FindEventButtons
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
        />
        <GenerateEvents
          setEvent={setEvent}
          showAllEvents={showAllEvents}
          setShowAllEvents={setShowAllEvents}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          user={user}
        />
      </div>
    </>
  );
}
