const express = require("express");
const env = require("dotenv");

env.config();
const app = express();

app.get("/", (req, res) => {
    res.json({ response: "hello world", from: `${process.env.APP_NAME}` });
});

app.listen(3000, () => {
    console.log("Serving on port 3000");
});
