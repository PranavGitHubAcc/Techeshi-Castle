const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

// Landing page route
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});