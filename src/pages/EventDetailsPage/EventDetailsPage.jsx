export default function EventDetailsPage({ event }) {
  console.log(event);
  return (
    <>
      <h1> Details Page</h1>
      {event.name}
      {event.category}
      {event.comment}
    </>
  );
}
