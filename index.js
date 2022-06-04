import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import db from "./config/db.js"
import dotenv from "dotenv"

dotenv.config()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express()
const PORT = process.env.PORT || 4000
import registerRoutes from "./routes/registerRouter.js"
import loginRoutes from "./routes/loginRouter.js"
import userInfoRoutes from "./routes/userRouter.js"
import organizerRoutes from "./routes/organizerRouter.js"
db()
app.use(bodyParser.json(), urlencodedParser)
app.use(cors())
app.use("/signup", registerRoutes)
app.use("/login", loginRoutes)
app.use("/user", userInfoRoutes)
app.use("/organizer", organizerRoutes)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
