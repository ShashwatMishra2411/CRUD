const express = require("express");
const mongoose = require("mongoose");
const User = require("./schemas/user");


const getUsers = async (req, res)=>{
    try{
        let users = await User.find();
        res.status(200).json(users)
    }catch(err){
        res.status(404).json({message:err.message})
    }
    
}

const createUser = async (req, res)=>{
    try{
        let name = req.body.name;
        let pass = req.body.password;

        let newUser = await User.create({username:name, password:pass})
        console.log(newUser);
    }catch(err){
        res.status(404).json({message:err.message})
    }
}

const deleteUser = async (req, res)=>{
    try{
        let id = req.params.id;
        let deleted = await User.findByIdAndDelete(id);
        console.log(deleted);
    }catch(err){
        res.status(404).json({message:err.message})
    }
}

module.exports = {getUsers, createUser, deleteUser}