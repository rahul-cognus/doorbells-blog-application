import BlogCard from '@/ui/BlogCard/BlogCard'
import React from 'react'




const Blog = ({ params }) => {

    return (
        <>
            {/* <h1>{data.getArticleById.title}</h1> */}
            <BlogCard blogSlug={params.slug} />
        </>
    )
}


export default Blog