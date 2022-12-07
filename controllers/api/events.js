const Event = require("../../models/event");
// const User = require("../../models/user");

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
async function getAllForUser(req, res) {
  const eventsCreated = await Event.find({ user: req.user._id }).sort();

  const allEvents = await Event.find({});
  let eventsAttending = [];
  allEvents.forEach((event) => {
    event.attendees.forEach((attendee) => {
      if (attendee._id == req.user._id) {
        eventsAttending.push(event);
      }
    });
  });
  console.log(eventsAttending);

  res.json([eventsCreated, eventsAttending]);
}

// //create event
async function createEvent(req, res) {
  req.body.user = req.user._id;
  const event = await Event.create(req.body);
  res.json(event);
}

//  add attendee
async function eventAddAttendee(req, res) {
  try {
    console.log(req.body);
    const event = await Event.findById(req.body.eventId);
    event.addAttendee(req.user._id);
    res.json(event);
  } catch (error) {
    console.log("error", error);
    res.json(error);
  }
}
// remove attendee
async function eventRemoveAttendee(req, res) {
  try {
    console.log(req.body);
    const event = await Event.findById(req.body.eventId);
    event.attendees.forEach((attendee) => {
      console.log(
        attendee._id.toString(),
        req.params.id,
        attendee._id.toString() !== req.params.id
      );
    });
    event.attendees = event.attendees.filter(
      (attendee) => attendee._id.toString() !== req.params.id
    );
    event.save();
    // event.removeAttendee(req.user._id);
    res.json(event);
  } catch (error) {
    console.log("error", error);
    res.json(error);
  }
}

// delete event
async function deleteEvent(req, res) {
  await Event.findByIdAndDelete(req.params.id);
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
  getAllForUser,
  getAllEvents,
  createEvent,
  eventAddAttendee,
  eventRemoveAttendee,
  delete: deleteEvent,
};
