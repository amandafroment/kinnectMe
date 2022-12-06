import { useState } from "react";
import "./FindEventButtons.css";

export default function FindEventButtons({ selectedEvent, setSelectedEvent }) {
  return (
    <>
      <div className="FindEventsButtonContainer">
        <button
          className="dog-meetups"
          value="Dog Meetups"
          onClick={() => setSelectedEvent("Dog Meetups")}
        >
          Dog Meetups
        </button>
        <button
          className="restaurant-crawl"
          value="Restaurant Crawl"
          onClick={() => setSelectedEvent("Restaurant Crawl")}
        >
          Restaurant Crawl
        </button>
        <button
          className="fitness"
          value="All Things Fitness"
          onClick={() => setSelectedEvent("All Things Fitness")}
        >
          All Things Fitness
        </button>
        <button
          className="different-event"
          value="A Different Event"
          onClick={() => setSelectedEvent("A Different Event")}
        >
          A Different Event
        </button>
      </div>
    </>
  );
}
