import { Link } from "react-router-dom";
export default function EventDetailsPage({ event, user, handleDelete }) {
  console.log(user);
  return (
    <>
      <h1> Details Page</h1>
      {event.name}
      {event.category}
      {event.comment}
      <Link to={"/" + event._id + "/edit"}>
        {event.user == user._id && <button>EDIT</button>}
      </Link>
      <p>
        {event.user == user._id && (
          <button onClick={() => handleDelete(event._id)}>X</button>
        )}
      </p>
    </>
  );
}
