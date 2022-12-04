const Event = require("../../models/event");

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

//create
async function createEvent(req, res) {
  // await
}

//
async function setEvent(req, res) {}

//edit event
async function editEvent(req, res) {}

//delete event
async function deleteEvent(req, res) {}

module.exports = {};
