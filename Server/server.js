const express = require("express");
const mongoose= require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/users")


const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Shashwatmishra2411:niceninja467@cluster0.fdscgv8.mongodb.net/?retryWrites=true&w=majority/users").then(()=>{console.log("Connected to DB")}).catch(()=>{console.log("Connection failed")})

app.use("/users", userRoutes)

app.listen(5000, ()=>{console.log(`listening on port ${5000}`)})
