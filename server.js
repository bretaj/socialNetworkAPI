import express from "express";
import connectToDb from "./config/connection.js";
import userRoutes from "./routes/userRoutes.js";

await connectToDb();

const app = express();

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use("/api/users", userRoutes)

app.listen(3001, () => {
    console.log("Server is now running!")
})