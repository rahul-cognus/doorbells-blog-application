const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  slug: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Category", categorySchema);
