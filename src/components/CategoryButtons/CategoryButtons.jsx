import { useState } from "react";
import "./CategoryButtons.css";

export default function CategoryButtons({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <>
      <div className="ButtonContainer">
        <button
          value="Dog Meetups"
          onClick={() => setSelectedCategory("Dog Meetups")}
        >
          Dog Group Meetups
        </button>
        <button
          value="Restaurant Crawl"
          onClick={() => setSelectedCategory("Restaurant Crawl")}
        >
          Restaurant Crawl
        </button>
        <button
          value="All Things Fitness"
          onClick={() => setSelectedCategory("All Things Fitness")}
        >
          All Things Fitness
        </button>
        <button
          value="A Different Event"
          onClick={() => setSelectedCategory("A Different Event")}
        >
          I want to create a different event!
        </button>
      </div>
    </>
  );
}
