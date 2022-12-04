import { useState } from "react";
import "./EventForm.css";

export default function EventForm({
  selectedCategory,
  setSelectedCategory,
  handleSelectedCategory,
  handleAddEvent,
}) {
  const [formData, setFormData] = useState("");

  function handleSubmitForm(evt) {
    evt.peventDefault();
    handleAddEvent(formData);
  }

  function handleSelectedCategory(e) {
    switch (selectedCategory) {
      case "Dog Meetups":
        e.target.style.border = "blue";
        break;
      case "Restaurant Crawl":
        e.target.style.border = "blue";
      case "All Things Fitness":
        e.target.style.border = "yellow";
      case "A Different Event":
        e.target.style.border = "pink";
    }
    setSelectedCategory(e.target.value);
    console.log(e.target.value, "value");
  }

  return (
    <>
      <h1>{selectedCategory}</h1>
      <div className="EventFormDivContainer">
        <form
          onSubmit={handleSubmitForm}
          style={{
            border:
              selectedCategory === "Dog Meetups"
                ? "solid 2px blue"
                : "solid 2px black" || selectedCategory === "Restaurant Crawl"
                ? "solid 2px pink"
                : "solid 2px black",
            // || selectedCategory === "All Things Fitness"
            // ? "solid 2px red"
            // : "solid 2px black",
          }}
        >
          <label>Name Of Event</label>
          <input type="text" />
          <label>Date:</label>
          <input type="text" />
          <label>Name of Location:</label>
          <input type="text" />
          <label>Address:</label>
          <input type="text" />
          <label>Details:</label>
          <input type="text" />
          <button type="submit">Create My Event</button>
        </form>
      </div>
    </>
  );
}
