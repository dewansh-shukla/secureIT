import express from "express"
const router = express.Router()
import {
  userInfo,
  addJoinedEvent,
  getAllJoinedEvents,
} from "../controller/userInfoController.js"
import verify from "../middleware/verifyJWT.js"
router.get("/info/", verify, userInfo)
router.get("/getalljoinedevents/:id", getAllJoinedEvents)
router.post("/joinedevents", addJoinedEvent)
export default router
