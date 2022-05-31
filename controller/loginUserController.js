import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const loginUser = (req, res) => {
  const userLogginIn = req.body
  User.findOne({ username: userLogginIn.username }).then((dbUser) => {
    if (!dbUser) {
      return res.json({
        message: "Invalid Username or Password",
      })
    }
    bcrypt.compare(userLogginIn.password, dbUser.password).then((isCorrect) => {
      if (isCorrect) {
        const payload = {
          id: dbUser._id,
          username: dbUser.username,
        }
        jwt.sign(payload, "abc123", { expiresIn: 3600 }, (err, token) => {
          if (err) return res.json({ message: "Error" })

          return res.json({
            message: "Success",
            token: "Bearer " + token,
          })
        })
      } else {
        return res.json({ message: "Invalid Username or Password" })
      }
    })
  })
}

export default loginUser
