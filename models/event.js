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
    attendees: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    comments: [commentSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

eventSchema.virtual("getAttendees").get(function () {
  return this.attendees.length;
});

eventSchema.methods.addAttendee = async function (userId) {
  const event = this;
  const isAttending = event.attendees.find((attendee) =>
    attendee._id.equals(userId)
  );
  if (isAttending) return;
  event.attendees.push(userId);
  return event.save();
};

module.exports = mongoose.model("Event", eventSchema);
