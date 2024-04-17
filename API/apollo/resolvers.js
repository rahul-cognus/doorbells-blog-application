const Article = require("../models/article");
const User = require("../models/user");
const Category = require("../models/category");
const Comment = require("../models/comment");
const Like = require("../models/like");
const Tag = require("../models/tag");
const BlogSettings = require("../models/blogSetting");

const resolvers = {
  Query: {
    getArticleById: async (_, { id }) => await Article.findById(id),
    getArticleBySlug: async (_, { display_url }) =>
      await Article.findOne({ display_url }).populate("categories"),
    getAllArticles: async () => await Article.find().populate("categories"),
    getCategoryById: async (_, { id }) => await Category.findById(id),
    getAllCategories: async () => await Category.find(),
    getCommentById: async (_, { id }) => await Comment.findById(id),
    getCommentsByArticle: async (_, { articleId }) =>
      await Comment.find({ article: articleId }),
    getLikeById: async (_, { id }) => await Like.findById(id),
    getLikesByArticle: async (_, { articleId }) =>
      await Like.find({ article: articleId }),
    getTagById: async (_, { id }) => await Tag.findById(id),
    getAllTags: async () => await Tag.find(),
    getBlogSettings: async () => await BlogSettings.findOne(),
  },
  Mutation: {
    createArticle: async (_, { input }) => await Article.create(input),
    updateArticle: async (_, { id, input }) =>
      await Article.findByIdAndUpdate(id, input, { new: true }),
    deleteArticle: async (_, { id }) => await Article.findByIdAndDelete(id),
    createCategory: async (_, { input }) => await Category.create(input),
    updateCategory: async (_, { id, input }) =>
      await Category.findByIdAndUpdate(id, input, { new: true }),
    deleteCategory: async (_, { id }) => await Category.findByIdAndDelete(id),
    createUser: async (_, { input }) => await User.create(input),
    updateUser: async (_, { id, input }) =>
      await User.findByIdAndUpdate(id, input, { new: true }),
    deleteUser: async (_, { id }) => await User.findByIdAndDelete(id),
    createComment: async (_, { input }) => await Comment.create(input),
    updateComment: async (_, { id, input }) =>
      await Comment.findByIdAndUpdate(id, input, { new: true }),
    deleteComment: async (_, { id }) => await Comment.findByIdAndDelete(id),
    createLike: async (_, { input }) => await Like.create(input),
    deleteLike: async (_, { id }) => await Like.findByIdAndDelete(id),
    createTag: async (_, { input }) => await Tag.create(input),
    updateTag: async (_, { id, input }) =>
      await Tag.findByIdAndUpdate(id, input, { new: true }),
    deleteTag: async (_, { id }) => await Tag.findByIdAndDelete(id),
    updateBlogSettings: async (_, { input }) => {
      const settings = await BlogSettings.findOne();
      if (settings) {
        return await BlogSettings.findByIdAndUpdate(settings._id, input, {
          new: true,
        });
      } else {
        return await BlogSettings.create(input);
      }
    },
  },
};

module.exports = resolvers;
