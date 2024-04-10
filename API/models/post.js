const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  shortDescription: String,
  content: String,
  author: String,
  tags: String,
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
