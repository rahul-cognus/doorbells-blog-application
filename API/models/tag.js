const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: [true, "Name has to be unique"],
    },
    description: { type: String, required: [true, "Description is required"] },
    display_url: {
      type: String,
      required: [true, "Display URL is required"],
      index: true,
    },
    image_url: { type: String },
    documentation_url: { type: String },
    number_of_articles: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tags", tagSchema);
