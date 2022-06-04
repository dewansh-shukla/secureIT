import express from "express"
import Event from "../models/eventsModel.js"
import { addevents } from "../controller/organizerController.js"
const router = express.Router()

router.post("/addevents", addevents)

export default router
