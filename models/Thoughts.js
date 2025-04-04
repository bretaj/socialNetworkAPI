import { Schema, model } from "mongoose";

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: function (timestamp) {
                return new Date(timestamp).toLocaleString();
            } 
        },

    },
    {
        toJSON: { getters: true },
        toObject: { getters: true }
    }
);



const Thoughts = model("Thoughts", thoughtSchema);

export default Thoughts;