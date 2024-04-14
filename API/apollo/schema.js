const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Article {
    _id: ID!
    author: User
    title: String!
    description: String!
    categories: Category!
    content: [String]!
    display_url: String!
    image_url: String
    tags: [Tag]
    number_of_likes: Int
    number_of_comments: Int
    created_at: String
    updated_at: String
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    linkedin: String
    stackoverflow: String
    github: String
    twitter: String
    website: String
    company: String
    company_website: String
    author_url: String!
    image_url: String
    author_description: String
    google_id: String
    role: String!
    last_visited: String!
    number_of_articles: Int
    newsletter: Boolean!
    followed_tags: [Tag]!
    created_at: String!
    updated_at: String!
  }

  type Category {
    _id: ID!
    name: String!
    description: String
    slug: String!
  }

  type Comment {
    _id: ID!
    article: Article!
    user: User!
    content: String!
    created_at: String!
    updated_at: String!
  }

  type Like {
    _id: ID!
    article: Article!
    user: User!
    created_at: String!
    updated_at: String!
  }

  type Tag {
    _id: ID!
    name: String!
    description: String!
    display_url: String!
    image_url: String
    documentation_url: String
    number_of_articles: Int!
    created_at: String!
    updated_at: String!
  }

  type BlogSettings {
    siteTitle: String!
    siteDescription: String
    logo: String
    socialMediaLinks: SocialMediaLinks
  }

  type SocialMediaLinks {
    facebook: String
    twitter: String
    instagram: String
  }

  type Query {
    getArticleById(id: ID!): Article
    getAllArticles: [Article]
    getCategoryById(id: ID!): Category
    getAllCategories: [Category]
    getCommentById(id: ID!): Comment
    getCommentsByArticle(articleId: ID!): [Comment]
    getLikeById(id: ID!): Like
    getLikesByArticle(articleId: ID!): [Like]
    getTagById(id: ID!): Tag
    getAllTags: [Tag]
    getBlogSettings: BlogSettings
  }

  input UserInput {
    name: String!
    email: String!
    linkedin: String
    stackoverflow: String
    github: String
    twitter: String
    website: String
    company: String
    company_website: String
    author_url: String!
    image_url: String
    author_description: String
    google_id: String
    role: String!
    last_visited: String!
    number_of_articles: Int
    newsletter: Boolean!
    followed_tags: [TagInput]!
  }

  input ArticleInput {
    author: ID
    title: String!
    description: String!
    categories: ID!
    content: [String]!
    display_url: String!
    image_url: String
    tags: [ID]
  }
  input CategoryInput {
    name: String!
    description: String
    slug: String!
  }
  input CommentInput {
    article_id: ID!
    user_id: ID!
    content: String!
  }

  input LikeInput {
    article_id: ID!
    user_id: ID!
  }

  input TagInput {
    name: String!
    description: String!
    display_url: String!
    image_url: String
    documentation_url: String
  }

  type Mutation {
    createArticle(input: ArticleInput!): Article
    updateArticle(id: ID!, input: ArticleInput!): Article
    deleteArticle(id: ID!): Article
    createCategory(input: CategoryInput!): Category
    updateCategory(id: ID!, input: CategoryInput!): Category
    deleteCategory(id: ID!): Category
    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): User
    createComment(input: CommentInput!): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deleteComment(id: ID!): Comment
    createLike(input: LikeInput!): Like
    deleteLike(id: ID!): Like
    createTag(input: TagInput!): Tag
    updateTag(id: ID!, input: TagInput!): Tag
    deleteTag(id: ID!): Tag
    updateBlogSettings(input: BlogSettingsInput!): BlogSettings
  }

  input BlogSettingsInput {
    siteTitle: String!
    siteDescription: String
    logo: String
    socialMediaLinks: SocialMediaLinksInput
  }

  input SocialMediaLinksInput {
    facebook: String
    twitter: String
    instagram: String
  }
`;
module.exports = typeDefs;
