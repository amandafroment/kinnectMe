const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

const eventSchema = new Schema(
  {
    name: String,
    date: Date,
    location: String,
    address: String,
    category: String,
    details: String,
    attendees: Number,
    comments: [commentSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// Static method to get the Event model? Once created?

// Instance method to add an event?

module.exports = mongoose.model("Event", eventSchema);
