require("dotenv").config();
const express = require("express");
const app = express();
const port = 5700;
const mongooese = require("mongoose");
const Comment = require("./models/commentModel");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "*" }));
const DATABASE_URI = process.env.DATABASE_URI;

app.get("/api/comments", async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(200).json(comments);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
app.post("/api/comments", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(200).json(comment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongooese
  .connect(DATABASE_URI)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(port, async () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
