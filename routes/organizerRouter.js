import express from "express"
import Event from "../models/eventsModel.js"
import {
  addevents,
  getMyEvents,
  getallevents,
} from "../controller/organizerController.js"
const router = express.Router()

router.post("/addevents", addevents)
router.get("/getmyevents/:id", getMyEvents)
router.get("/getallevents", getallevents)
export default router
