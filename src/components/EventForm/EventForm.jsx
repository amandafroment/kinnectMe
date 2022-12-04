import { useState } from "react";
import "./EventForm.css";

export default function EventForm({ selectedCategory, handleAddEvent }) {
  const [formData, setFormData] = useState("");

  function handleSubmitForm(evt) {
    evt.peventDefault();
    handleAddEvent(formData);
  }

  function handleSelectedCategory() {
    switch (selectedCategory) {
      case "Dog Meetups":
        return "solid 2px blue";
      case "Restaurant Crawl":
        return "solid 2px green";
      case "All Things Fitness":
        return "solid 2px yellow";
      case "A Different Event":
        return "solid 2px pink";
    }
  }

  return (
    <>
      <h1>{selectedCategory}</h1>
      <div className="EventFormDivContainer">
        <form
          onSubmit={handleSubmitForm}
          style={{
            border: handleSelectedCategory(),
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
