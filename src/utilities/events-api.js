import sendRequest from "./send-request";

const BASE_URL = "/api/events";

// this needs to gete all future events, not past events
// past events should show on the users page
// export function getAll() {
//   return sendRequest(`${BASE_URL}`);
// }


// needs to match the events router
export function createAddEvent(formData) {
  return sendRequest(`${BASE_URL}/create`, "POST", formData);
}

export function getAllEvents(formData) {
  return sendRequest(BASE_URL);
}

export function eventAddAttendee(event) {
  console.log("event", event);
  return sendRequest(`${BASE_URL}/attend`, "POST", {eventId: event});
}
// needs user's events components
// export function getAllForUser() {
//   return sendRequest(`${BASE_URL}/user`);
// }

// export function getCommentById() {
//   return sendRequest(`${BASE_URL}/comment/${id}`);
// }
// export function getCommentById() {
//   return sendRequest(`${BASE_URL}/comment/${id}`);
// }

// // this needs work - passing in 'editedData' and eventId???
// // would it be formData?
// export function updateEvent(eventId, editedData) {
//   return sendRequest(`${BASE_URL}/${id}/edit`, PUT, { eventId, editedData });
// }

// export function updateComment(commentId, editedComment) {
//   return sendRequest(`${BASE_URL}/${id}/edit`, PUT, {
//     commentId,
//     editedComment,
//   });
// }

// // this needs work - passing in 'editedData' and eventId
// // would it be formData?
// export function editEvent(eventId, editedData) {
//   return sendRequest(`${BASE_URL}/${id}/edit`, PUT, { eventId, editedData});
// }
