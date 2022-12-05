import FindEventButtons from "../../components/FindEventButtons/FindEventButtons";
import GenerateEvents from "../../components/GenerateEvents/GenerateEvents";
import * as eventsAPI from "../../utilities/events-api";
import { useEffect, useState } from "react";

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
      <div>
        <h1>KinnectMe with...</h1>
        <FindEventButtons />
        <GenerateEvents
          showAllEvents={showAllEvents}
          setShowAllEvents={setShowAllEvents}
        />
      </div>
    </>
  );
}
