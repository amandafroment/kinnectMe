import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditEventForm.css";
import * as eventsAPI from "../../utilities/events-api";

export default function EditEventForm({ selectedCategory, event }) {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    date: new Date(),
    location: "",
    address: "",
    details: "",
    category: selectedCategory,
  });

  useEffect(function () {
    setFormData.category = selectedCategory;
  }, []);

  const navigate = useNavigate();

  function handleChangeForm(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmitForm(evt) {
    evt.preventDefault();
    try {
      console.log("Handle Syubmit form");
      await eventsAPI.updateEvent(formData, event._id);
      setFormData(formData);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Create Event Failed - Try Again");
    }
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
      <div className="SelectedEventsHeaderContainer">
        <h1>{selectedCategory}</h1>
      </div>

      <div className="EventFormDivContainer">
        <form
          onSubmit={handleSubmitForm}
          style={{
            border: handleSelectedCategoryBorder(),
            backgroundColor: handleSelectedCategoryColor(),
          }}
          className="EventForm"
        >
          <label>Name Of Event</label>
          <input
            type="text"
            value={formData.name}
            name="name"
            required
            onChange={handleChangeForm}
          />
          <label>Date & Time</label>
          <input
            type="datetime-local"
            value={formData.date}
            name="date"
            required
            onChange={handleChangeForm}
            className="date-and-time-input"
          />
          <label>Name of Location</label>
          <input
            type="text"
            value={formData.location}
            name="location"
            required
            onChange={handleChangeForm}
            placeholder="Where is everyone meeting?"
          />
          <label>Address</label>
          <input
            type="text"
            value={formData.address}
            name="address"
            required
            onChange={handleChangeForm}
            placeholder="Street, City, Postal Code..."
          />
          <label>Details</label>
          <input
            type="text"
            value={formData.details}
            name="details"
            required
            onChange={handleChangeForm}
            placeholder="Tell us more about your event..."
            className="details-input"
          />
          <button type="submit">Update My Event</button>
        </form>
      </div>
    </>
  );
}
