import { Schema, model } from "mongoose";

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            
        }
    }
)