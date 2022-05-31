import express from "express"
const router = express.Router()
import loginController from "../controller/loginUserController.js"

router.post("/", loginController)

export default router
