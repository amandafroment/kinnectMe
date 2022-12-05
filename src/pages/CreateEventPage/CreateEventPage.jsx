import { useState } from "react";
import React from "react";
import "./CreateEventPage.css";
import CategoryButtons from "../../components/CategoryButtons/CategoryButtons";
import EventForm from "../../components/EventForm/EventForm";

export default function CreateEventPage() {
  const [selectedCategory, setSelectedCategory] = useState("");

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
