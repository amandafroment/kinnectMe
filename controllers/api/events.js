const Event = require("../../models/event");
const User = require("../../models/user");

// // get all events that are created
// async function getAll(req, res) {
//   const events = await Event.find({}, function (err, events) {
//     if (err) {
//       res.send(err.message);
//     } else {
//       res.json(events);
//     }
//   });
// }
// // users past and future events
// async function getAllForUser(req, res) {
//   const events = Event.find({ user: req.user._id }).sort();
// }
// res.json(events);

// //create event
// async function createEvent(req, res) {
//   req.body.user = req.body._id;
//   const newEvent = await Event.create(req.body);
//   res.json(newEvent);
// }

// //create comment

// //edit event
// // async function updateEvent(req, res) {}

// //edit comment
// // async function updateComment(req, res) {}

// //delete event
// // async function deleteEvent(req, res) {}

// //delete comment
// // async function deleteComment(req, res) {}

// module.exports = {
//   getAll,
//   getAllForUser,
//   createEvent,
// };
