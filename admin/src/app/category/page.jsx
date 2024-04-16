"use client"
import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      _id
      name
      description
      slug
    }
  }
`;
const Category = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <>
            <section className="py-4">
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-12">
                            {/* Title */}
                            <div className="d-sm-flex justify-content-sm-between align-items-center">
                                <h1 className="mb-2 mb-sm-0 h2">Categories <span className="badge bg-primary bg-opacity-10 text-primary">07</span></h1>
                                <a href="/category/create" className="btn btn-sm btn-primary mb-0"><i className="fas fa-plus me-2"></i>Add new category</a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">

                        {
                            data.getAllCategories.map((category) => (
                                <div className="col-md-6 col-xl-4">
                                    {/* Category item START */}
                                    <div className="card border h-100">
                                        {/* Card header */}
                                        <div className="card-header border-bottom p-3">
                                            <div className="d-flex align-items-center">
                                                <div className="icon-lg shadow bg-body rounded-circle">🤖</div>
                                                <h3 className="mb-0 ms-3">{category.name}</h3>
                                            </div>
                                        </div>

                                        {/* Card body START */}
                                        <div className="card-body p-3">
                                            <p>{category.description}</p>

                                            {/* Followers and Post */}
                                            <div className="d-flex justify-content-between">
                                                {/* Total post */}
                                                <div>
                                                    <h5 className="mb-0">846</h5>
                                                    <h6 className="mb-0 fw-light">Total posts</h6>
                                                </div>

                                                {/* Avatar group */}
                                                {/* <ul className="avatar-group mb-0">
                                                    <li className="avatar avatar-xs">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar" />
                                                    </li>
                                                    <li className="avatar avatar-xs">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/11.jpg" alt="avatar" />
                                                    </li>
                                                    <li className="avatar avatar-xs">
                                                        <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="avatar" />
                                                    </li>
                                                    <li className="avatar avatar-xs">
                                                        <div className="avatar-img rounded-circle bg-primary"><i className="fas fa-plus text-white position-absolute top-50 start-50 translate-middle"></i></div>
                                                    </li>
                                                </ul> */}
                                            </div>

                                        </div>
                                        {/* Card body END */}

                                        {/* Card footer */}
                                        <div className="card-footer border-top text-center p-3">
                                            <a href={category.slug} className="btn btn-primary-soft w-100 mb-0">View posts</a>
                                        </div>
                                    </div>
                                    {/* Category item END */}
                                </div>
                            ))
                        }
                        <div className="col-12">
                            {/* Blog list table START */}
                            <div className="card border bg-transparent rounded-3">
                                {/* Card header START */}
                                <div className="card-header bg-transparent border-bottom p-3">
                                    <div className="d-sm-flex justify-content-sm-between align-items-center">
                                        <h5 className="mb-2 mb-sm-0">Technology <span className="badge bg-primary bg-opacity-10 text-primary">105</span></h5>
                                        <a href="#" className="btn btn-sm btn-primary mb-0"><i className="fas fa-plus me-2"></i>Create a post</a>
                                    </div>
                                </div>
                                {/* Card header END */}

                                {/* Card body START */}
                                <div className="card-body p-3">

                                    {/* Search and select START */}
                                    <div className="row g-3 align-items-center justify-content-between mb-3">
                                        {/* Search */}
                                        <div className="col-md-8">
                                            <form className="rounded position-relative">
                                                <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 "></i></button>
                                            </form>
                                        </div>

                                        {/* Select option */}
                                        <div className="col-md-3">
                                            {/* Short by filter */}
                                            <form>
                                                <select className="form-select z-index-9 bg-transparent" aria-label=".form-select-sm">
                                                    <option value="">Sort by</option>
                                                    <option>Free</option>
                                                    <option>Newest</option>
                                                    <option>Oldest</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                    {/* Search and select END */}

                                    {/* Blog list table START */}
                                    <div className="table-responsive border-0">
                                        <table className="table table-dark-gray align-middle p-4 mb-0 table-hover table-shrink">
                                            {/* Table head */}
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="border-0 rounded-start">Post Name</th>
                                                    <th scope="col" className="border-0">Author Name</th>
                                                    <th scope="col" className="border-0">Published Date</th>
                                                    <th scope="col" className="border-0">Views</th>
                                                    <th scope="col" className="border-0">Status</th>
                                                    <th scope="col" className="border-0 rounded-end">Action</th>
                                                </tr>
                                            </thead>

                                            {/* Table body START */}
                                            <tbody>
                                                {/* Table item */}
                                                <tr>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">12 worst types of business accounts you follow on Twitter</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="mb-0"><a href="#">Lori Stevens</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>Jan 22, 2022</td>
                                                    {/* Table data */}
                                                    <td>2,546</td>
                                                    {/* Table data */}
                                                    <td>
                                                        <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>

                                                {/* Table item */}
                                                <tr>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">Dirty little secrets about the business industry</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="mb-0"><a href="#">Dennis Barrett</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>Jan 19, 2022</td>
                                                    {/* Table data */}
                                                    <td>1,456</td>
                                                    {/* Table data */}
                                                    <td>
                                                        <span className="badge bg-warning bg-opacity-15 text-warning mb-2">Draft</span>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>

                                                {/* Table item */}
                                                <tr>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">7 common mistakes everyone makes while traveling</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="mb-0"><a href="#">Billy Vasquez</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>Nov 11, 2022</td>
                                                    {/* Table data */}
                                                    <td>3,456</td>
                                                    {/* Table data */}
                                                    <td>
                                                        <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>

                                                {/* Table item */}
                                                <tr>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">5 investment doubts you should clarify</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="mb-0"><a href="#">Lori Stevens</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>Jan 22, 2022</td>
                                                    {/* Table data */}
                                                    <td>5,456</td>
                                                    {/* Table data */}
                                                    <td>
                                                        <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>

                                                {/* Table item */}
                                                <tr>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">Bad habits that people in the industry need to quit</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="mb-0"><a href="#">Larry Lawson</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>Oct 21, 2022</td>
                                                    {/* Table data */}
                                                    <td>2,845</td>
                                                    {/* Table data */}
                                                    <td>
                                                        <span className="badge bg-warning bg-opacity-10 text-warning mb-2">Draft</span>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>

                                                {/* Table item */}
                                                <tr>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">Around the web: 20 fabulous infographics about business</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <h6 className="mb-0"><a href="#">Carolyn Ortiz</a></h6>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>Feb 10, 2022</td>
                                                    {/* Table data */}
                                                    <td>1,456</td>
                                                    {/* Table data */}
                                                    <td>
                                                        <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                    </td>
                                                    {/* Table data */}
                                                    <td>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                            <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                            {/* Table body END */}
                                        </table>
                                    </div>
                                    {/* Blog list table END */}

                                    {/* Pagination START */}
                                    <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                                        {/* Content */}
                                        <p className="mb-sm-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                                        {/* Pagination */}
                                        <nav className="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
                                            <ul className="pagination pagination-sm pagination-bordered mb-0">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Prev</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item disabled"><a className="page-link" href="#">..</a></li>
                                                <li className="page-item"><a className="page-link" href="#">15</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* Pagination END */}
                                </div>
                            </div>
                            {/* Blog list table END */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category