import { useState } from "react";
import "./EventForm.css";

export default function EventForm({ selectedCategory, handleAddEvent }) {
  const [formData, setFormData] = useState("");

  function handleSubmitForm(evt) {
    evt.peventDefault();
    handleAddEvent(formData);
  }

  function handleSelectedCategoryBorder() {
    switch (selectedCategory) {
      case "Dog Meetups":
        return "solid 2px #CCD2C7";
      case "Restaurant Crawl":
        return "solid 2px #BBC3B4";
      case "All Things Fitness":
        return "solid 2px #999F94";
      case "A Different Event":
        return "solid 2px #889081";
    }
  }

  function handleSelectedCategoryColor() {
    switch (selectedCategory) {
      case "Dog Meetups":
        return "#CCD2C7";
      case "Restaurant Crawl":
        return "#BBC3B4";
      case "All Things Fitness":
        return "#999F94";
      case "A Different Event":
        return "#889081";
    }
  }

  return (
    <>
      <h1>{selectedCategory}</h1>
      <div className="EventFormDivContainer">
        <form
          onSubmit={handleSubmitForm}
          style={{
            border: handleSelectedCategoryBorder(),
            backgroundColor: handleSelectedCategoryColor(),
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
