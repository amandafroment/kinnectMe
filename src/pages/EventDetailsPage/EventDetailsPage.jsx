import { useState } from "react";
import { Link } from "react-router-dom";
import * as eventsAPI from "../../utilities/events-api";
import "./EventDetailsPage.css";

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
          <h2 className="bold-header">{event.name.toUpperCase()}</h2>
          <p>
            <span className="bold-header">Date:</span> {event.date.slice(0, 10)}
          </p>
          <p>
            <span className="bold-header">Time:</span>{" "}
            {event.date.slice(11, 19)}
          </p>
          <p>
            <span className="bold-header">Location:</span> {event.location}
          </p>
          <p>
            <span className="bold-header">Address:</span> {event.address}
          </p>
          <p className="details-text">
            <span className="bold-header">All The Details: </span>{" "}
            {event.details}
          </p>
          <div className="edit-delete-container">
            <Link to={"/" + event._id + "/edit"}>
              {event.user == user._id && (
                <button className="edit-button">EDIT MY EVENT</button>
              )}
            </Link>
            <p>
              {event.user == user._id && (
                <button
                  className="delete-button"
                  onClick={() => handleDelete(event._id)}
                >
                  X
                </button>
              )}
            </p>
          </div>
        </div>

        <div className="comments-form-container">
          <h2>Have a question? Ask below!</h2>

          <div className="comment-box-container">
            {" "}
            {comments.map((comment, idx) => {
              return (
                <div key={idx} className="comment">
                  <p>
                    <span className="bold-header user-span">
                      {user.name} said:
                    </span>{" "}
                    <span className="comment-span">{comment.comment}</span>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="comment-form-container">
            <form
              onSubmit={(evt) => handleSubmitComment(evt)}
              className="comment-form"
            >
              <label>Ask away: </label>
              <input
                type="text"
                name="comment"
                onChange={handleChange}
                value={comment}
                required
              />
              <button type="submit">Submit Comment</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
