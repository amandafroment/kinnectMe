const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/api/events");

// BEFORE CHANGING THIS:
// please remember BASE_URL in events-api is "api/events";

router.post("/:id/comment", eventsCtrl.createComment);

router.post("/create", eventsCtrl.createEvent);
router.get("/user", eventsCtrl.getAllForUser);
router.get("/:id", eventsCtrl.getDetails);
router.post("/attend", eventsCtrl.eventAddAttendee);
router.put("/:id", eventsCtrl.update);

// GET /api/events
router.get("/", eventsCtrl.getAllEvents);

// // DELETE /api/events/:id
router.delete("/:id", eventsCtrl.delete);

// // DELETE /api/events/attend/:id
router.delete("/attend/:id", eventsCtrl.eventRemoveAttendee);

module.exports = router;
