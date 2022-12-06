import FindEventButtons from "../../components/FindEventButtons/FindEventButtons";
import GenerateEvents from "../../components/GenerateEvents/GenerateEvents";
import * as eventsAPI from "../../utilities/events-api";
import { useEffect, useState } from "react";
import "./FindEventsPage.css";

export default function FindEventsPage() {
  const [showAllEvents, setShowAllEvents] = useState([]);

  useEffect(function () {
    async function getEvents() {
      let events = await eventsAPI.getAllEvents();
      setShowAllEvents(events);
      console.log(events, "events");
    }
    getEvents();
  }, []);

  return (
    <>
      <div className="FindEventsPage">
        <div className="find-events-page-header">
          <h1>KinnectMe with...</h1>
        </div>
        <FindEventButtons />
        <GenerateEvents
          showAllEvents={showAllEvents}
          setShowAllEvents={setShowAllEvents}
        />
      </div>
    </>
  );
}
