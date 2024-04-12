import { gql } from '@apollo/client';

export const CREATE_ARTICLE = gql`
  mutation createArticle($data: ArticleInput!) {
    createArticle(data: $data) {
      _id
      title
      // Include any other fields you want to return after creating the article
    }
  }
`;