import mongoose from "mongoose"

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log(`Connected to DB  ${res.connection.host} `)
    })
    .catch((err) => console.log("Error from db ", err))
}

export default connectDB
