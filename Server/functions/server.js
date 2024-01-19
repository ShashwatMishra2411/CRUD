const express = require("express");
const mongoose= require("mongoose");
const serverless = require("serverless-http")

const cors = require("cors");
const userRoutes = require("./routes/users")


const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/users").then(()=>{console.log("Connected to DB")}).catch(()=>{console.log("Connection failed")})

app.use("/.netlify/functions/server", userRoutes)

// app.listen(5000, ()=>{console.log(`listening on port ${5000}`)})

module.exports.handler = serverless(app)