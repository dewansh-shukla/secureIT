import User from "../models/userModel.js"

const userInfo = async (req, res) => {
  const userData = req.user
  const user = await User.findById(userData.id).select("-password")
  if (user) res.json(user)
  else res.json({ isLoggedIn: false, message: "User not found" })
}

export default userInfo
