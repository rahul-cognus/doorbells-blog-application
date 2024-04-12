'use client';

import React, { useState } from 'react';

import dynamic from 'next/dynamic';
import { gql, useMutation } from "@apollo/client";


let CustomEditor = dynamic(() => import('@/ui/Editor/CustomEditor'), {
    ssr: false,
});


const CREATE_ARTICLE = gql`
  mutation CreateArticle($input: ArticleInput!) {
    createArticle(input: $input) {
      id
      title
      description
      categories
      content
      display_url
      image_url
      tags {
        name
      }
    }
  }
`;
const CreateBlog = () => {
    const [editorData, setEditorData] = useState(null);
    const [createArticle] = useMutation(CREATE_ARTICLE);
    const [slug, setSlug] = useState(""); // Define slug state

    const handleEditorDataChange = (data) => {
        setEditorData(data);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const slugValue = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
        setSlug(slugValue);
        // Gather data from form inputs
        const description = e.target.description.value;
        const categories = e.target.categories.value.split(',');
        const content = JSON.stringify(editorData);
        const display_url = e.target.display_url.value;
        const image_url = e.target.image_url.value;
        const tags = e.target.tags.value.split(',');

        try {
            // Call the createArticle mutation
            const { data } = await createArticle({
                variables: {
                    input: {
                        title,
                        description,
                        categories,
                        content,
                        display_url,
                        image_url,
                        tags,
                    },
                },
            });

            console.log("Blog post created successfully:", data.createArticle);
        } catch (error) {
            console.error("Error creating blog post:", error);
        }
    };

    // const handleSave = async () => {
    //     // Extract title from editor data
    //     const titleBlock = editorData.blocks.find(block => block.type === 'header' && block.data.level === 2);
    //     const title = titleBlock ? titleBlock.data.text : 'Untitled';

    //     const slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

    //     try {
    //         await createPost({
    //             variables: {
    //                 content: JSON.stringify(editorData),
    //                 slug: slug,
    //             },
    //         });
    //         console.log("Blog post created successfully!");
    //     } catch (error) {
    //         console.error("Error creating blog post:", error);
    //     }
    // };
    return (
        <section className="py-4">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-12">
                        {/* Title */}
                        <h1 className="mb-0 h2">Create a post</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Chart START */}
                        <div className="card border">
                            {/* Card body */}
                            <div className="card-body">
                                {/* Form START */}
                                <form onSubmit={handleSave}>
                                    {/* Main form */}
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Post name */}
                                            <div className="mb-3">
                                                <label className="form-label">Title</label>
                                                <input required id="con-name" name="name" type="text" className="form-control" placeholder="Title" />
                                                {/* <small>Moving heaven divide two sea female great midst spirit</small> */}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Post name */}
                                            <div className="mb-3">
                                                <label className="form-label">Slug</label>
                                                <input required id="con-name" name="display_url" type="text" className="form-control" defaultValue={slug} placeholder="Slug" />
                                                {/* <small>Moving heaven divide two sea female great midst spirit</small> */}
                                            </div>
                                        </div>


                                        {/* Short description */}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Short description </label>
                                                <textarea className="form-control" name="description" rows="3" placeholder="Add description"></textarea>
                                            </div>
                                        </div>

                                        {/* Main toolbar */}
                                        <div className="col-md-12">
                                            {/* Subject */}
                                            <div className="mb-3">
                                                <label className="form-label">Post body</label>
                                                {/* Editor toolbar */}
                                                {/* <div className="bg-light border border-bottom-0 rounded-top py-3" id="quilltoolbar">
                                                    
                                                </div> */}
                                                {/* Main toolbar */}
                                                <div className="bg-body border rounded-bottom">
                                                    <CustomEditor onEditorDataChange={handleEditorDataChange} />
                                                </div>
                                                {/* <CustomEditor
                                                    handleInstance={handleInstance}
                                                    imageArray={imageArray}
                                                /> */}

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                {/* Image */}
                                                <div className="position-relative">
                                                    <h6 className="my-2">Upload post image here, or<a href="#!" className="text-primary"> Browse</a></h6>
                                                    <label className="w-100" style={{ cursor: 'pointer' }}>
                                                        <span>
                                                            <input className="form-control stretched-link" type="file" name="image_url" id="image" accept="image/gif, image/jpeg, image/png" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <p className="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG and PNG. Our suggested dimensions are 600px * 450px. Larger image will be cropped to 4:3 to fit our thumbnails/previews.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            {/* Tags */}
                                            <div className="mb-3">
                                                <label className="form-label">Tags</label>
                                                <textarea className="form-control" name='tags' rows="1" placeholder="business, sports ..."></textarea>
                                                <small>Maximum of 14 keywords. Keywords should all be in lowercase and separated by commas. e.g. javascript, react, marketing.</small>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            {/* Message */}
                                            <div className="mb-3">
                                                <label className="form-label">Category</label>
                                                <select name="categories" className="form-select" aria-label="Default select example">
                                                    <option selected>Lifestyle</option>
                                                    <option value="1">Technology</option>
                                                    <option value="2">Travel</option>
                                                    <option value="3">Business</option>
                                                    <option value="4">Sports</option>
                                                    <option value="5">Marketing</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" type="checkbox" value="" id="postCheck" />
                                                <label className="form-check-label" htmlFor="postCheck">
                                                    Make this post featured?
                                                </label>
                                            </div>
                                        </div>
                                        {/* Create post button */}
                                        <div className="col-md-12 text-start">
                                            <button className="btn btn-primary w-100" type="submit">Create post</button>
                                        </div>
                                    </div>
                                </form>
                                {/* Form END */}
                            </div>
                        </div>
                        {/* Chart END */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateBlog