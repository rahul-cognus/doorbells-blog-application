const mongoose = require("mongoose");
const blogSettingsSchema = new mongoose.Schema({
  siteTitle: { type: String, required: true },
  siteDescription: { type: String },
  logo: { type: String },
  socialMediaLinks: {
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String },
  },
});

module.exports = mongoose.model("BlogSettings", blogSettingsSchema);
