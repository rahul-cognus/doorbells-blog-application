'use client';

import React, { useState } from 'react';
import { gql, useMutation } from "@apollo/client";

const CREATE_CATEGORY = gql`
  mutation CreateCategory($input: CategoryInput!) {
  createCategory(input: $input) {
    _id
    name
    description
    slug
  }
}
`;
const CreateCategory = () => {
    const [createCategory] = useMutation(CREATE_CATEGORY);
    const [createCategoryData, setCategoryData] = useState(null);
    const [slug, setSlug] = useState(""); // Define slug state
    const [alert, setAlert] = useState(null); // State for displaying alert


    const handleCategoryData = (e) => {
        const { name, value } = e.target;

        setCategoryData((prevCreateCategoryData) => ({
            ...prevCreateCategoryData,
            [name]: value,
        }));

        if (name === 'category' || name === 'slug')
            setSlug(value.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""));
    }

    const handleCategorySave = async (e) => {
        e.preventDefault();

        try {
            const { data } = await createCategory({
                variables: {
                    input: {
                        name: createCategoryData.category,
                        description: createCategoryData.description,
                        slug: slug,
                    },
                },
            });

            console.log("Blog Category created successfully:", data.createCategory);

            // Show alert
            setAlert("Category created successfully!");

            // Clear form fields
            setCategoryData({
                category: '',
                description: '',
                slug: ''
              });

              setSlug("");

            setTimeout(() => {
                setAlert(null);
            }, 3000);
        } catch (error) {
            console.error("Error creating blog category:", error);
        }

    };

    return (
        <section className="py-4">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-12">
                        {/* Title */}
                        <h1 className="mb-0 h2">Create Category</h1>
                    </div>
                </div>
                {alert && (
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-success" role="alert">
                                {alert}
                            </div>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-12">
                        {/* Chart START */}
                        <div className="card border">
                            {/* Card body */}
                            <div className="card-body">
                                {/* Form START */}
                                <form onSubmit={handleCategorySave}>
                                    {/* Main form */}
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Post name */}
                                            <div className="mb-3">
                                                <label className="form-label">Category</label>
                                                <input id="con-name" onChange={handleCategoryData} name="category" type="text" value={createCategoryData?.category} className="form-control" placeholder="Category" />
                                                {/* <small>Moving heaven divide two sea female great midst spirit</small> */}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Post name */}
                                            <div className="mb-3">
                                                <label className="form-label">Slug</label>
                                                <input id="con-name" onChange={handleCategoryData} name="slug" type="text" className="form-control" value={slug} placeholder="Slug" />
                                                {/* <small>Moving heaven divide two sea female great midst spirit</small> */}
                                            </div>
                                        </div>


                                        {/* Short description */}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Short description </label>
                                                <textarea className="form-control" onChange={handleCategoryData} value={createCategoryData?.description} name="description" rows="3" placeholder="Add description"></textarea>
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

export default CreateCategory