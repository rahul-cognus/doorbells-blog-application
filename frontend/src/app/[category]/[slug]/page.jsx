"use client"
import BlogCard from '@/ui/BlogCard/BlogCard'
import React from 'react'
import { gql, useQuery } from '@apollo/client';


const GET_ARTICLEBYID = gql`
 query GetArticleById($getArticleByIdId: ID!) {
  getArticleById(id: $getArticleByIdId) {
    _id
    title
    description
    content
    display_url
    image_url
    number_of_likes
    number_of_comments
    created_at
    updated_at
  }
}
`;
const Blog = ({ params }) => {
    const { loading, error, data } = useQuery(GET_ARTICLEBYID, {
        variables: { getArticleByIdId: '661c5f0749578b1d92ef7dab' },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const content = JSON.parse(data.getArticleById.content);
    console.log(content);

    return (
        <>
            {

            }
            <h1>{data.getArticleById.title}</h1>
            <BlogCard />
        </>
    )
}


export default Blog