const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/test", (req, res) => {
    console.log("Received:", req.body);
    res.json({ value: "11110000" }); // test response
});

app.get("/", (req, res) => {
    res.send("HTTP Transmitter Test Server Running");
});

app.listen(3000, () => console.log("Local server running on port 3000"));
