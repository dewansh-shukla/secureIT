import express from "express"
import Event from "../models/eventsModel.js"
import { addevents, getMyEvents } from "../controller/organizerController.js"
const router = express.Router()

router.post("/addevents", addevents)
router.get("/getmyevents/:id", getMyEvents)
export default router
