import User from "../models/userModel.js"
import EventJoined from "../models/userJoinedModel.js"
const userInfo = async (req, res) => {
  const userData = req.user
  const user = await User.findById(userData.id).select("-password")
  if (user) res.json(user)
  else res.json({ isLoggedIn: false, message: "User not found" })
}

const addJoinedEvent = async (req, res) => {
  const data = req.body
  console.log(data)
  if (data) {
    const eventName = new EventJoined({
      user_id: data.user_id,
      eventName: data.eventName,
      eventVenue: data.eventVenue,
      eventDescription: data.eventDescription,
      eventStartDate: data.eventStartDate,
      eventEndDate: data.eventEndDate,
      eventCheckStatus: data.eventCheckStatus,
      contact1: data.contact1,
      contact2: data.contact2,
      contact3: data.contact3,
    })
    eventName.save()
    res.json({ message: "event joined" })
  } else res.json({ message: "User already exist" })
}

const getAllJoinedEvents = async (req, res) => {
  const id = req.params.id
  const allJoinedEvents = await EventJoined.find({ user_id: id })
  if (allJoinedEvents) res.json(allJoinedEvents)
  else res.json({ message: "no events" })
}
export { userInfo, addJoinedEvent, getAllJoinedEvents }
