import { useState } from "react";
import "./CategoryButtons.css";

export default function CategoryButtons({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <>
      <div className="CategoryButtonContainer">
        <button
          className="dog-meetups"
          value="Dog Meetups"
          onClick={() => setSelectedCategory("Dog Meetups")}
        >
          Dog Group Meetups
        </button>
        <button
          className="restaurant-crawl"
          value="Restaurant Crawl"
          onClick={() => setSelectedCategory("Restaurant Crawl")}
        >
          Restaurant Crawl
        </button>
        <button
          className="fitness"
          value="All Things Fitness"
          onClick={() => setSelectedCategory("All Things Fitness")}
        >
          All Things Fitness
        </button>
        <button
          className="different-event"
          value="A Different Event"
          onClick={() => setSelectedCategory("A Different Event")}
        >
          A Different Event
        </button>
      </div>
    </>
  );
}
