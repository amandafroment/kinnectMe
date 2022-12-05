const Event = require("../../models/event");
const User = require("../../models/user");

// // get all events that are created
async function getAllEvents(req, res) {
  const events = await Event.find({});
  if (!events) {
    res.send("controller events api has an error");
  } else {
    res.json(events);
  }
}

// // users past and future events
// async function getAllForUser(req, res) {
//   const events = Event.find({ user: req.user._id }).sort();
// }
// res.json(events);

// //create event
async function createEvent(req, res) {
  req.body.user = req.user._id;
  const event = await Event.create(req.body);
  res.json(event);
}
//

// //create comment

// //edit event
// // async function updateEvent(req, res) {}

// //edit comment
// // async function updateComment(req, res) {}

// //delete event
// // async function deleteEvent(req, res) {}

// //delete comment
// // async function deleteComment(req, res) {}

module.exports = {
  //   getAll,
  //   getAllForUser,
  getAllEvents,
  createEvent,
};
