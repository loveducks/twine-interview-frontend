const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()
const employee = require("./routes/employee")

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(express.json())
app.use("/", employee)

app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`))
