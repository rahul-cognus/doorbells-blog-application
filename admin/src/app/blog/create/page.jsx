'use client';

import React, { useState } from 'react';

import dynamic from 'next/dynamic';
import { gql, useMutation, useQuery } from "@apollo/client";


let CustomEditor = dynamic(() => import('@/ui/Editor/CustomEditor'), {
    ssr: false,
});

const GET_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      _id
      name
      slug
    }
  }
`;
const CREATE_ARTICLE = gql`
  mutation CreateArticle($input: ArticleInput!) {
    createArticle(input: $input) {
      title
      description
      categories{
        _id
      }
      content
      display_url
      image_url
    }
  }
`;
const UPLOAD_IMAGE = gql`
  mutation UploadImage($file: Upload!) {
    uploadImage(file: $file)
  }
`;

const CreateBlog = () => {
    const [editorData, setEditorData] = useState(null);
    const [createArticle] = useMutation(CREATE_ARTICLE);
    const [createData, setCreateData] = useState(null);
    const [slug, setSlug] = useState(""); // Define slug state
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    const [uploadImage] = useMutation(UPLOAD_IMAGE);

    const handleEditorDataChange = async (dataPromise) => {
        const data = await dataPromise;
        setEditorData(data);
        console.log(data);
        // You can perform further actions with the editor data here
    };


    const handleFormData = async (e) => {
        const { name, value, files } = e.target;

        setCreateData((prevCreateData) => ({
            ...prevCreateData,
            [name]: value,
        }));

        if (name === 'title' || name === 'slug')
            setSlug(value.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""));

        // if (name === "image_url") {
        //     const file = files[0];
        //     const formData = new FormData();
        //     formData.append('file', file);

        //     // try {
        //     // Call the uploadImage mutation
        //     const { data } = await uploadImage({
        //         variables: {
        //             file: file,
        //         },
        //     });
        //     // Verify that the data object and uploadImage field are present
        //     if (data && data.uploadImage) {
        //         const imageUrl = data.uploadImage;
        //         // Set the imageUrl in the state
        //         setCreateData((prevCreateData) => ({
        //             ...prevCreateData,
        //             image_url: imageUrl,
        //         }));
        //         console.log("if statement reuning")
        //     } else {
        //         console.error("Invalid response from uploadImage mutation:", data);
        //         // Handle invalid response or missing uploadImage field
        //         console.log("else statement reuning")
        //     }
        //     // } catch (error) {
        //     //     // console.log('file', file)
        //     //     console.error("Error uploading image:", error);
        //     // }

        //     // const { data } = uploadImage({
        //     //     variables: {
        //     //         file: file,
        //     //     },
        //     // });
        //     // const imageUrl = data.uploadImage;
        //     // console.log(imageUrl)
        //     // setImage(URL.createObjectURL(file));
        //     // console.log(file);
        //     // setCreateData((prevCreateData) => ({
        //     //     ...prevCreateData,
        //     //     // image: file,
        //     // }));
        // }
        if (name === "image_url" && files.length > 0) {
            const file = files[0];
            const formData = new FormData();
            formData.append('file', file);
            try {
                const { data } = await uploadImage({ variables: { file: formData } });
                console.log("Image uploaded successfully:", data.uploadImage);
                // setCreateData((prevCreateData) => ({
                //     ...prevCreateData,
                //     image_url: imageUrl,
                // }));
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }
        console.log(name, value);
    }
    console.log(createData);
    // console.log(createData.image);
    const handleSave = async (e) => {
        e.preventDefault();
        // const title = e.target.title.value;
        // // Gather data from form inputs
        // const description = e.target.description.value;
        // const categories = e.target.categories.value.split(',');
        // const content = JSON.stringify(editorData);
        // const display_url = e.target.display_url.value;
        // const image_url = e.target.image_url.value;

        // const tags = e.target.tags.value.split(',');

        try {
            // Call the createArticle mutation
            const { data } = await createArticle({
                variables: {
                    input: {
                        title: createData.title,
                        description: createData.description,
                        categories: createData.categories,
                        content: JSON.stringify(editorData),
                        display_url: slug,
                        image_url: createData.imageUrl,
                        // tags: createData.tags ? createData.tags.split(',') : "",
                    },
                },
            });

            console.log("Blog post created successfully:", data.createArticle);
        } catch (error) {
            console.error("Error creating blog post:", error);
        }

    };



    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
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
                                                <input id="con-name" onChange={handleFormData} name="title" type="text" className="form-control" placeholder="Title" />
                                                {/* <small>Moving heaven divide two sea female great midst spirit</small> */}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Post name */}
                                            <div className="mb-3">
                                                <label className="form-label">Slug</label>
                                                <input id="con-name" onChange={handleFormData} name="slug" type="text" className="form-control" value={slug} placeholder="Slug" />
                                                {/* <small>Moving heaven divide two sea female great midst spirit</small> */}
                                            </div>
                                        </div>


                                        {/* Short description */}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Short description </label>
                                                <textarea className="form-control" onChange={handleFormData} name="description" rows="3" placeholder="Add description"></textarea>
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
                                                            <input className="form-control stretched-link" onChange={handleFormData} type="file" name="image_url" id="image" accept="image/gif, image/jpeg, image/png" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <p className="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG and PNG. Our suggested dimensions are 37.5rem * 28.125rem. Larger image will be cropped to 4:3 to fit our thumbnails/previews.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            {/* Tags */}
                                            <div className="mb-3">
                                                <label className="form-label">Tags</label>
                                                <textarea className="form-control" onChange={handleFormData} name='tags' rows="1" placeholder="business, sports ..."></textarea>
                                                <small>Maximum of 14 keywords. Keywords should all be in lowercase and separated by commas. e.g. javascript, react, marketing.</small>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            {/* Message */}
                                            <div className="mb-3">
                                                <label className="form-label">Category</label>
                                                <select name="categories" onChange={handleFormData} value={createData?.categories} className="form-select" aria-label="Default select example">
                                                    <option value="">Select a category</option>
                                                    {data.getAllCategories.map(categoryList => (
                                                        <option key={categoryList._id} value={categoryList._id}>{categoryList.name}</option>
                                                    ))}
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