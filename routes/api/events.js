const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/api/events");

// BEFORE CHANGING THIS:
// please remember BASE_URL in events-api is "api/events";

// // POST /api/events/create
router.get("/", eventsCtrl.getAllEvents);
router.post("/create", eventsCtrl.createEvent);

router.get("/:id", eventsCtrl.getDetails);

router.post("/attend", eventsCtrl.eventAddAttendee);
router.delete("/:id", eventsCtrl.delete);
router.put("/:id", eventsCtrl.update);


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
// // DELETE /api/events/comments/:id
// router.delete("/comment/:id", eventsCtrl.deleteComment);

module.exports = router;
