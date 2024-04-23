import { mongoose } from "mongoose";
// const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    email_lowercase: { type: String, required: true, index: true },
    linkedin: { type: String },
    stackoverflow: { type: String },
    github: { type: String },
    twitter: { type: String },
    website: { type: String },
    company: { type: String },
    company_website: { type: String },
    author_url: {
      type: String,
      required: [true, "Display URL is required."],
      unique: [true, "Display URL has to be unique."],
      index: true,
    },
    image_url: { type: String },
    author_description: { type: String },
    google_id: { type: String, index: true },
    role: { type: String, default: "USER" },
    last_visited: { type: Date, default: Date.now() },
    reset_password_token: { type: String, default: "" },
    salt: { type: String, select: false },
    hash: { type: String, select: false },
    number_of_articles: { type: Number },
    newsletter: { type: Boolean, default: false },
    followed_tags: {
      default: [],
      type: [
        {
          tag: { type: mongoose.Schema.Types.ObjectId, ref: "Tags" },
          name: { type: String },
          description: { type: String },
          display_url: { type: String },
        },
      ],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
const Users = mongoose.model("Users", userSchema);
export default Users;
