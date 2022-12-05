import FindEventButtons from "../../components/FindEventButtons/FindEventButtons";

export default function SearchEventPage() {
  // is the handleAddEvent
  // async function handleAddEvent(formData) {
  //   const event = await eventsAPI.add(formData);
  //   setEvents([...events, event]);
  // }

  return (
    <>
      <div>
        <h1>KinnectMe with...</h1>
        <FindEventButtons />
      </div>
    </>
  );
}
