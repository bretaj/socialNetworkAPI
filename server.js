import express from "express";
import connectToDb from "./config/connection.js";
import userRoutes from "./routes/userRoutes.js";
import ThoughtRoutes from "./routes/ThoughtRoutes.js"

await connectToDb();

const app = express();

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/thoughts", ThoughtRoutes)

app.listen(3001, () => {
    console.log("Server is now running!")
})