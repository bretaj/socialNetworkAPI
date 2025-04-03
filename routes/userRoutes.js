import express from "express";
const router = express.Router();
import User from "../models/User.js";

// GET ALL USERS
router.get("/", async (req, res) => {
    const users = await User.find();

    res.json(users)
})

// GET USER BY ID
router.get("/:userId", async (req, res) => {
    const targetUserId = req.params.userId;

    const user = await User.findById(targetUserId)
    
    res.json(user)
})

// CREATE NEW USER
router.post("/", async (req, res) => {

    const newUser = await User.create({
        username: req.body.username,
        email: req.body.email
    })


    res.json(newUser)
})

// UPDATE USER BY ID
router.put("/", async (req, res) => {

    // User.findByIdAndUpdate()
    
    res.json({
        message: "You have updated a user!"
    })
})

// DELETE USER BY ID
router.delete("/", async (req, res) => {

    // User.findByIdAndDelete??
    
    res.json({
        message: "You have deleted a user!"
    })
})

export default router;
