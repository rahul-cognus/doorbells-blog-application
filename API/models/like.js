const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Articles",
      required: [true, "Article is required"],
      index: true,
    },
    user: {
      required: [true, "User is required."],
      type: {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Users",
          required: [true, "User _id is required"],
        },
        name: { type: String, required: [true, "User name is required"] },
        image_url: { type: String },
      },
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Likes", likeSchema);
