import { useState, useEffect } from "react";
import React from "react";
import "./CreateEventPage.css";
import CategoryButtons from "../../components/CategoryButtons/CategoryButtons";
import EventForm from "../../components/EventForm/EventForm";

export default function CreateEventPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <main className="CreateEventPage">
        <div className="create-events-page-header">

          <h1>Kinnect Others With...</h1>

        </div>
        <CategoryButtons
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {selectedCategory === "" ? (
          <h2 className="events-planning-message">
            Click a category to start planning you<br></br> event and kinnecting
            others to it!
          </h2>
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
