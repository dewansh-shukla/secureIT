const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()
const cors = require("cors")
const path = require("path")
const PORT = process.env.PORT || 4000

const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlencodedParser)
app.use(cors())

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
