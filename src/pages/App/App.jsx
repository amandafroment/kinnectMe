import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import EventDetailsPage from "../EventDetailsPage/EventDetailsPage";
import CreateEventPage from "../CreateEventPage/CreateEventPage";
import FindEventsPage from "../FindEventsPage/FindEventsPage";
import MyEvents from "../MyEvents/MyEvents";
import EditEventForm from "../../components/EditEventForm/EditEventForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [event, setEvent] = useState({});
  const [showAllEvents, setShowAllEvents] = useState([]);
  const navigate = useNavigate();
  function handleDelete(id) {
    console.log("Delete clicked!");
    setShowAllEvents(showAllEvents.filter((event) => event.id !== id));
    axios.delete(`/api/events/${id}`);
    console.log("Delete finished!");
    navigate("/");
  }
  return (
    <>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />

            <Routes>
              <Route
                path="/"
                element={
                  <FindEventsPage
                    showAllEvents={showAllEvents}
                    setShowAllEvents={setShowAllEvents}
                    setEvent={setEvent}
                    user={user}
                  />
                }
              />
              <Route
                path="/myevents"
                element={
                  <MyEvents
                    user={user}
                    event={event}
                    setEvent={setEvent}
                    showAllEvents={showAllEvents}
                    setShowAllEvents={setShowAllEvents}
                  />
                }
              />

              <Route
                path="/:id"
                element={
                  <EventDetailsPage
                    handleDelete={handleDelete}
                    event={event}
                    user={user}
                    showAllEvents={showAllEvents}
                    setShowAllEvents={setShowAllEvents}
                  />
                }
              />

              <Route path="/createevent" element={<CreateEventPage />} />
              <Route
                path="/:id/edit"
                element={<EditEventForm event={event} />}
              />
            </Routes>
            <Footer />
          </>
        ) : (
          <>
            <AuthPage setUser={setUser} />
          </>
        )}
      </main>
    </>
  );
}
