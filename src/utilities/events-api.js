import sendRequest from "./send-request";

const BASE_URL = "/api/events";

// needs to match the events router
export function createAddEvent(formData) {
  return sendRequest(`${BASE_URL}/create`, "POST", formData);
}

export function getAllEvents(formData) {
  return sendRequest(BASE_URL);
}

export function getDetails(id) {
  console.log(id, "from events-api");
  return sendRequest(`${BASE_URL}/${id}`);
}

export function updateEvent(formData, id) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT", formData);
}

export function eventAddAttendee(event) {
  return sendRequest(`${BASE_URL}/attend`, "POST", { eventId: event });
}

export function eventRemoveAttendee(eventId, userId) {
  return sendRequest(`${BASE_URL}/attend/${userId}`, "DELETE", {
    eventId: eventId,
  });
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}/user`);
}