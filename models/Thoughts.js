import { Schema, model } from "mongoose";

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        }
        createdAt: {
            
        }
    }
)

const Thoughts = model("Thoughts", thoughtSchema);

export default Thoughts;