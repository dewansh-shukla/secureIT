import Event from "../models/eventsModel.js"

const addevents = async (req, res) => {
  const info = req.body
  const eventName = info.eventName
  const eventNameFromDB = await Event.findOne({ eventName: eventName })
  if (eventNameFromDB === null) {
    if (info) {
      const event = new Event({
        user_id: info.user_id,
        eventName: info.eventName,
        eventVenue: info.eventVenue,
        eventDescription: info.eventDescription,
        eventStartDate: info.eventStartTime,
        eventEndDate: info.eventEndTime,
      })
      event.save()
      res.json({ message: "User Added" })
    } else res.json({ message: "Failed to add User" })
  } else res.status(500).json({ message: "Failed to add User" })
}

export { addevents }
