import mongoose from "mongoose"
import Event from "../models/eventsModel.js"
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
  eventCheckStatus: {
    type: Boolean,
    required: true,
  },
  contact1: {
    type: String,
    required: true,
  },
  contact2: {
    type: String,
    required: true,
  },
  contact3: {
    type: String,
    required: true,
  },
})
const JoinedEvent = mongoose.model("JoinedEvent", eventSchema)

export default JoinedEvent
