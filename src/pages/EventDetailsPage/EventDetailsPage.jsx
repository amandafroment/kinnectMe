import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import * as eventsAPI from "../../utilities/events-api";

export default function EventDetailsPage({ event }) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [comments, setComments] = useState(event.comments);

  async function handleSubmitComment(evt) {
    evt.preventDefault();
    try {
      await eventsAPI.createComment({ comment }, event._id);
      setComments([...comments, { comment }]);

      setComment("");
    } catch (err) {
      console.log(err);
      setError("Adding a comment has failed. Try Again.");
    }
  }

  function handleChange(evt) {
    setComment(evt.target.value);
  }
  return (
    <>
      <div>
        <h1> Details Page</h1>
        {event.name}
        {event.category}
        {event.comment}
        {event._id}
        {event.details}
        {comments.map((comment, idx) => {
          return <div key={idx}>{comment.comment}</div>;
        })}

        <h1>Comment Box</h1>

        <form onSubmit={(evt) => handleSubmitComment(evt)}>
          <label>Enter Comment Here:</label>
          <input
            type="text"
            name="comment"
            onChange={handleChange}
            value={comment}
          />
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </>
  );
}
