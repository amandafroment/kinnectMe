const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/api/events");

// BEFORE CHANGING THIS:
// please remember BASE_URL in events-api is "api/events";

// // POST /api/events/create
router.get("/", eventsCtrl.getAllEvents);
router.post("/create", eventsCtrl.createEvent);
// router.post("/attend", eventsCtrl.eventAddAttendee);

// // POST /api/events/comment
// router.post("/comment", eventsCtrl.createComment);

// GET /api/events
// router.get("/", eventsCtrl.getAll);
// // GET /api/events/detail
// router.get("/detail", eventsCtrl.eventDetail);

// // EDIT /api/events/:id
// router.put("/:id", eventsCtrl.updateEvent);
// // EDIT /api/events/comments/:id
// router.put("/comment/:id", eventsCtrl.updateComment);

// // DELETE /api/events/:id
// router.delete("/:id", eventsCtrl.deleteEvent);
// // DELETE /api/events/comments/:id
// router.delete("/comment/:id", eventsCtrl.deleteComment);

module.exports = router;
