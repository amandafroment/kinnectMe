const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/api/events");

// BEFORE CHANGING THIS:
// please remember BASE_URL in events-api is "api/events";

// // POST /api/events/create
router.get("/", eventsCtrl.getAllEvents);
router.post("/create", eventsCtrl.createEvent);

router.post("/:id/comment", eventsCtrl.createComment);

router.post("/attend", eventsCtrl.eventAddAttendee);
router.get("/:id", eventsCtrl.getDetails);
router.delete("/:id", eventsCtrl.delete);

module.exports = router;
