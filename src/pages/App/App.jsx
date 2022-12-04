import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
import EventDetailsPage from "../EventDetailsPage/EventDetailsPage";
import SearchEventPage from "../SearchEventsPage/SearchEventsPage";
import CreateEventPage from "../CreateEventPage/CreateEventPage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* // routes is another component that allows us to set up all of our
              different routes, it is a package built into react-router */}
              <Route path="/orders/new" element={<EventDetailsPage />} />
              {/* // Route
              is always going to expect a path and an element(as the prop to
              pass down information) as the naming conventions */}
              <Route path="/newpage" element={<CreateEventPage />} />
              <Route path="/searchevents" element={<SearchEventPage />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </>
  );
}
