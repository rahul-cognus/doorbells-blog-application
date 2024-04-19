const Article = require("../models/article");
const Users = require("../models/user");
const Category = require("../models/category");
const Comment = require("../models/comment");
const Like = require("../models/like");
const Tag = require("../models/tag");
const BlogSettings = require("../models/blogSetting");
// const upload = require("../s3.config");
const { GraphQLUpload } = require("apollo-upload-server");
// const AWS = require("aws-sdk");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { createReadStream } = require("fs");
const { v4: uuidv4 } = require("uuid");
const { Readable } = require("stream");

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });
const resolvers = {
  Upload: GraphQLUpload,
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
    uploadImage: async (_, { file }) => {
      try {
        if (!file) {
          throw new Error("No file provided");
        }
        console.log("File:", file);
        const { filename, mimetype } = file;
        // const { createReadStream, filename, mimetype } = await file;
        // console.log("createReadStream:", createReadStream);
        // const stream = createReadStream();
        // const key = `uploads/${uuidv4()}-${filename}`;
        const objectKey = `uploads/${uuidv4()}-${filename}`;
        // const uploadParams = {
        //   Bucket: process.env.S3_BUCKET_NAME,
        //   Key: objectKey,
        //   Body: stream,
        //   ContentType: mimetype,
        // };
        if (typeof file.createReadStream === "function") {
          const stream = file.createReadStream(); // Create stream if available
          const uploadParams = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: objectKey,
            Body: stream,
            ContentType: mimetype,
          };
          const command = new PutObjectCommand(uploadParams);
          const response = await s3Client.send(command);
          return response.Location;
        } else {
          throw new Error("Error accessing uploaded file"); // More specific error
        }
        // const params = {
        //   Bucket: process.env.S3_BUCKET_NAME,
        //   Key: key,
        //   Body: stream,
        //   ContentType: mimetype,
        // };
        const command = new PutObjectCommand(uploadParams);
        const response = await s3Client.send(command);
        // const { Location } = await s3.upload(params).promise();
        // return Location;
        return response.Location;
      } catch (error) {
        console.log("File:", file);
        console.error("Error uploading image:", error);
        throw new Error("Error uploading image");
      }
    },

    createArticle: async (_, { input }) => await Article.create(input),
    updateArticle: async (_, { id, input }) =>
      await Article.findByIdAndUpdate(id, input, { new: true }),
    deleteArticle: async (_, { id }) => await Article.findByIdAndDelete(id),
    createCategory: async (_, { input }) => await Category.create(input),
    updateCategory: async (_, { id, input }) =>
      await Category.findByIdAndUpdate(id, input, { new: true }),
    deleteCategory: async (_, { id }) => await Category.findByIdAndDelete(id),
    createUser: async (_, { input }) => await Users.create(input),
    updateUser: async (_, { id, input }) =>
      await Users.findByIdAndUpdate(id, input, { new: true }),
    deleteUser: async (_, { id }) => await Users.findByIdAndDelete(id),
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
