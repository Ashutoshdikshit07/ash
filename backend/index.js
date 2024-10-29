require("dotenv").config(); // Load environment variables from .env

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index");
app.use("/api/v1", mainRouter);

app.get("/", (req, res) => {
    const message = process.env.NODE_ENV === "production"
        ? "Hello from Production at https://ash-backend-alpha.vercel.app/"
        : "Hello from Development at http://localhost:3000";
    res.send(message);
});

// Export app for serverless deployment on Vercel
module.exports = app;
