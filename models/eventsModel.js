import mongoose from "mongoose"
import User from "../models/userModel.js"
const eventSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  eventName: {
    type: String,
    required: true,
  },
  eventVenue: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventStartDate: {
    type: Date,
  },
  eventEndDate: {
    type: Date,
  },
})
const Event = mongoose.model("Event", eventSchema)

export default Event
