const express = require("express");
const importData = require("./data.json");
const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello Joe");
});

app.get("/members", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});