import express from "express";
const router = express.Router();
import Thought from "../models/Thought.js";

// GET ALL THOUGHTS
router.get("/", async (req, res) => {
    const thoughts = await Thought.find();

    res.json(thoughts)
})

// GET THOUGHTS BY ID
router.get("/:thoughtId", async (req, res) => {
    const targetThoughtId = req.params.thoughtId;

    const user = await Thought.findById(targetThoughtId)
    
    res.json(user)
})

// CREATE NEW THOUGHT
router.post("/", async (req, res) => {

    const newThought = await Thought.create({
        username: req.body.username,
        thoughtText: req.body.thoughtText
    })


    res.json(newThought)
})

// TODO UPDATE THOUGHT BY ID
router.put("/:id", async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedThought) {
            return res.status(404).json({ message: "thought not found"});
        }
        res.json({
            message: "you have updated a thought",
            user: updatedThought
        });
    } catch (error) {
        res.status(500).json({ message: "error updating user", error});
    }
});

// TODO DELETE THOUGHT BY ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.id);
        if (!deletedThought) {
            return res.status(404).json({ message: "thought not found" });
        }
        res.json ({
            message: "you have deleted a thought",
            thought: deletedThought
        });
    } catch (error) {
        res.status(500).json ({ message: "error deleting thought", error});
    }
});


// ADD REACTION
router.post("/:thoughtId/reactions", async (req, res) => {

    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            {
                $push: {
                    reactions: req.body
                }
            },
            { new: true }
        );
        if (!updatedThought) {
            return res.status(404).json({ message: "reaction not found" });
        }
        res.json({
            message: "you have updated a reaction",
            user: updatedThought
        });
    } catch (error) {
        res.status(500).json({ message: "error updating reaction", error });
    }
})



// // REMOVE REACTION
router.delete("/:thoughtId/reactions", async (req, res) => {

    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            {
                $pull: {
                    reactions: req.body
                }
            },
            { new: true }
        );
        if (!updatedThought) {
            return res.status(404).json({ message: "user not found" });
        }
        res.json({
            message: "you have updated a user",
            user: updatedThought
        });
    } catch (error) {
        res.status(500).json({ message: "error updating user", error });
    }
})



export default router;