const express = require("express");
const router = express.Router();
const {getUsers, createUser, deleteUser} = require("../methods")

router.get("/", (req, res)=>{
    getUsers(req, res);
})

router.post("/create", createUser);

router.delete("/delete/:id", deleteUser);
module.exports = router