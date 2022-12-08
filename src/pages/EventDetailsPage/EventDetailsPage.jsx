import { useState } from "react";
import { Link } from "react-router-dom";
import * as eventsAPI from "../../utilities/events-api";

export default function EventDetailsPage({ event, user, handleDelete }) {
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
      setError("Adding a comment has failed. Try Again.");
    }
  }

  function handleChange(evt) {
    setComment(evt.target.value);
  }
  return (
    <>
      <div className="details-page-container">
        <div className="details-card-container">
          {" "}
          <h1> {event.name}</h1>
          {event.category}
          {event.comment}
          {event.details}
          <Link to={"/" + event._id + "/edit"}>
            {event.user == user._id && <button>EDIT</button>}
          </Link>
          <p>
            {event.user == user._id && (
              <button onClick={() => handleDelete(event._id)}>X</button>
            )}
          </p>
        </div>

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
