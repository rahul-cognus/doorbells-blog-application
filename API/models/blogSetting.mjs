import { mongoose } from "mongoose";
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

const BlogSettings = mongoose.model("BlogSettings", blogSettingsSchema);
export default BlogSettings;
