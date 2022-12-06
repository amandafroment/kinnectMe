import { useState } from "react";
import "./FindEventButtons.css";

export default function FindEventButtons() {
  const [selectedEvent, setSelectedEvent] = useState("");

  return (
    <>
      <div className="ButtonContainer">
        <button
          value="Dog Meetups"
          onClick={() => setSelectedEvent("Dog Meetups")}
        >
          Dog Group Meetups
        </button>
        <button
          value="Restaurant Crawl"
          onClick={() => setSelectedEvent("Restaurant Crawl")}
        >
          Restaurant Crawl
        </button>
        <button
          value="All Things Fitness"
          onClick={() => setSelectedEvent("All Things Fitness")}
        >
          All Things Fitness
        </button>
        <button
          value="A Different Event"
          onClick={() => setSelectedEvent("A Different Event")}
        >
          I want to see a different event!
        </button>
      </div>
    </>
  );
}
