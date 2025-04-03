import mongoose from "mongoose";

const connectToDb = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/socialNetworkDb")
    console.log("Connected to the database!")
}

export default connectToDb;