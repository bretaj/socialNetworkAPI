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

// TODO UPDATE USER BY ID
router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "user not found"});
        }
        res.json({
            message: "you have updated a user",
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({ message: "error updating user", error});
    }
});

// TODO DELETE USER BY ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "user not found" });
        }
        res.json ({
            message: "you have deleted a user",
            user: deletedUser
        });
    } catch (error) {
        res.status(500).json ({ message: "error deleting user", error});
    }
});

export default router;
