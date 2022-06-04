import express from "express"
const router = express.Router()
import userInfo from "../controller/userInfoController.js"
import verify from "../middleware/verifyJWT.js"
router.get("/info/", verify, userInfo)

export default router
