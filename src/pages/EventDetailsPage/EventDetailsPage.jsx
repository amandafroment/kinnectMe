import { useState } from "react";
import { Navigate } from "react-router-dom";
import * as eventsAPI from "../../utilities/events-api";

export default function EventDetailsPage({ event }) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  async function handleSubmitComment(evt) {
    console.log("Submit Comment button works");
    evt.preventDefault();
    try {
      let event = await eventsAPI.createAddComment(comment);
      console.log(event);
      setComment(comment);
      Navigate("/:id");
    } catch (err) {
      console.log(err);
      setError("Adding a comment has failed. Try Again.");
    }
  }
  function handleChangeForm(evt) {
    // setComment({ ...comment, [evt.target.name]: evt.target.value });
    // setError("");
    console.log(evt);
  }
  return (
    <>
      <div>
        <h1> Details Page</h1>
        {event.name}
        {event.category}
        {event.comment}
      </div>
      <div>
        <h1>Comment Box</h1>
        <form onSubmit={handleSubmitComment}>
          <label>Enter Comment Here:</label>
          <input type="text" name="comment" onChange={handleChangeForm} />
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </>
  );
}
