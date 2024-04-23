import { mongoose } from "mongoose";
import Users from "./user.mjs";
import Category from "./category.mjs";
import Tag from "./tag.mjs";
// const Users = require("./user");
// const mongoose = require("mongoose");
// const Category = require("./category.mjs");
// const Tag = require("./tag");
const articleSchema = new mongoose.Schema(
  {
    author: {
      type: {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Users",
        },
      },
    },
    title: { type: String, required: [true, "Title is required."] },
    description: { type: String, required: [true, "Description is required."] },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    content: [{ type: String, required: [true, "Content is required."] }],
    display_url: {
      type: String,
      required: [true, "Display URL is required."],
      unique: [true, "Display URL has to be unique."],
      index: true,
    },
    image_url: { type: String },
    tags: {
      default: [],
      type: [
        {
          _id: { type: mongoose.Schema.Types.ObjectId, ref: "Tags" },
          name: { type: String },
          description: { type: String },
          display_url: { type: String },
        },
      ],
    },
    number_of_likes: { type: Number, default: 0 },
    number_of_comments: { type: Number, default: 0 },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Article = mongoose.model("Articles", articleSchema);

export default Article;
