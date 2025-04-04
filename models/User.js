import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
       username: {
        type: String,
        unique: true,
        required: true,
        trim: true
       },
       email: {
        type: String,
        required: true,
        unique: true,
        // validation
       },
       thoughts: [], //define this properly later
       friends: []
    }, 
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// virtual for friendcount ???
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model("User", userSchema);


export default User;