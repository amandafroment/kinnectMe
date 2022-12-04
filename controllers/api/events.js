const Event = require("../../models/event");
// const User = require("../../models/user");

// get all events that are created
async function getAll(req, res) {
  const events = await Event.find({}, function (err, events) {
    if (err) {
      res.send(err.message);
    } else {
      res.json(events);
    }
  });
}

async function getAllForUser(req, res) {
  const events = Event.find({ user: req.user._id }).sort();
}
res.json(events);

//create
async function createEvent(req, res) {
  req.body.user = req.body._id;
  const newEvent = await Event.create(req.body);
  res.json(newEvent);
}

//edit event
async function editEvent(req, res) {}

//delete event
async function deleteEvent(req, res) {}

module.exports = {
  // getAll,
  // getAllForUser,
  // createEvent,
};
