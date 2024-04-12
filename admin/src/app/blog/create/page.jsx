'use client';

import React, { useState } from 'react';

import dynamic from 'next/dynamic';



let CustomEditor = dynamic(() => import('@/ui/Editor/CustomEditor'), {
    ssr: false,
});

const CreateBlog = () => {

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
                                <form>
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
                                                <input required id="con-name" name="name" type="text" className="form-control" placeholder="Slug" />
                                                {/* <small>Moving heaven divide two sea female great midst spirit</small> */}
                                            </div>
                                        </div>
                                        {/* Post type START */}
                                        {/* <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Post type</label>
                                                <div className="d-flex flex-wrap gap-3">
                                                  
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option" />
                                                        <label className="btn btn-outline-light w-100" for="option">
                                                            <i className="bi bi-chat-left-text fs-1"></i>
                                                            <span className="d-block"> Post </span>
                                                        </label>
                                                    </div>
                                                   
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option2" />
                                                        <label className="btn btn-outline-light w-100" for="option2">
                                                            <i className="bi bi-patch-question fs-1"></i>
                                                            <span className="d-block"> Question </span>
                                                        </label>
                                                    </div>
                                                    
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option3" checked />
                                                        <label className="btn btn-outline-light w-100" for="option3">
                                                            <i className="bi bi-chat-right-dots fs-1"></i>
                                                            <span className="d-block"> Poll </span>
                                                        </label>
                                                    </div>
                                                    
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option4" />
                                                        <label className="btn btn-outline-light w-100" for="option4">
                                                            <i className="bi bi-ui-checks-grid fs-1"></i>
                                                            <span className="d-block"> Images </span>
                                                        </label>
                                                    </div>
                                                 
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option5" />
                                                        <label className="btn btn-outline-light w-100" for="option5">
                                                            <i className="bi bi-camera-reels fs-1"></i>
                                                            <span className="d-block"> Video </span>
                                                        </label>
                                                    </div>
                                                   
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option6" />
                                                        <label className="btn btn-outline-light w-100" for="option6">
                                                            <i className="bi bi-chat-square fs-1"></i>
                                                            <span className="d-block"> Other </span>
                                                        </label>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* Post type END */}

                                        {/* Short description */}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Short description </label>
                                                <textarea className="form-control" rows="3" placeholder="Add description"></textarea>
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
                                                    <CustomEditor />
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
                                                            <input className="form-control stretched-link" type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
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
                                                <textarea className="form-control" rows="1" placeholder="business, sports ..."></textarea>
                                                <small>Maximum of 14 keywords. Keywords should all be in lowercase and separated by commas. e.g. javascript, react, marketing.</small>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            {/* Message */}
                                            <div className="mb-3">
                                                <label className="form-label">Category</label>
                                                <select className="form-select" aria-label="Default select example">
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
                                                <label className="form-check-label" for="postCheck">
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