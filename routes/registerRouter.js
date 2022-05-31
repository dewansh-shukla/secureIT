import express from "express"
const router = express.Router()
import register from "../controller/registerUserController.js"

router.post("/", register)

export default router
