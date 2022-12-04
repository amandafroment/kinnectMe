import React from "react";
import { useState } from "react";
import CategoryButtons from "../../components/CategoryButtons/CategoryButtons";
import EventForm from "../../components/EventForm/EventForm";
import "./CreateEventPage.css";

export default function CreateEventPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  // function handleSelectedCategory(e) {
  //   switch (selectedCategory) {
  //     case "Dog Meetups":
  //       e.target.style.border = "black";
  //       break;
  //     case "Restaurant Crawl":
  //       e.target.style.border = "blue";
  //     case "All Things Fitness":
  //       e.target.style.border = "yellow";
  //     case "A Different Event":
  //       e.target.style.border = "pink";
  //   }
  //   setSelectedCategory(e.target.value);
  //   console.log(e.target.value, "value");
  // }

  return (
    <>
      <main className="CreateEventPage">
        <h1>KinnectMe with...</h1>
        <CategoryButtons
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {selectedCategory === "" ? (
          <h2>Click a category to start your event planning!</h2>
        ) : (
          <EventForm
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      </main>
    </>
  );
}
