const { timeStamp } = require("console");
const mongooese = require("mongoose");

const commentSchema = new mongooese.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timeStamp: true }
);

const Comment = mongooese.model("Comment", commentSchema);

module.exports = Comment
