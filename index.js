const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog");

//mounting
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

//Default Route
app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage running at localhost:4000!</h1>`);
})

//Start the server
app.listen(PORT, () => {
    console.log(`App is Started at ${PORT}`);
})

