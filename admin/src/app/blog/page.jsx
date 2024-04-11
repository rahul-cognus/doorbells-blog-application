import React from 'react'

const Blog = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-12">
                        {/* Title */}
                        <div className="d-sm-flex justify-content-sm-between align-items-center">
                            <h1 className="mb-2 mb-sm-0 h2">Post List <span className="badge bg-primary bg-opacity-10 text-primary">110</span></h1>
                            <a href="#" className="btn btn-sm btn-primary mb-0"><i className="fas fa-plus me-2"></i>Add a post</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row g-4 mb-4">
                            <div className="col-sm-4 col-lg-2">
                                {/* Card START */}
                                <div className="card card-body border h-100">
                                    {/* Icon */}
                                    <div className="fs-3 text-start text-success">
                                        <i className="bi bi-file-earmark-text"></i>
                                    </div>
                                    {/* Content */}
                                    <div className="ms-0">
                                        <h3 className="mb-0">305</h3>
                                        <h6 className="mb-0">Document</h6>
                                    </div>
                                </div>
                                {/* Card END */}
                            </div>
                            <div className="col-sm-4 col-lg-2">
                                {/* Card START */}
                                <div className="card card-body border h-100">
                                    {/* Icon */}
                                    <div className="fs-3 text-start text-success">
                                        <i className="bi bi-camera-reels"></i>
                                    </div>
                                    {/* Content */}
                                    <div className="ms-0">
                                        <h3 className="mb-0">120</h3>
                                        <h6 className="mb-0">Videos</h6>
                                    </div>
                                </div>
                                {/* Card END */}
                            </div>
                            <div className="col-sm-4 col-lg-2">
                                {/* Card START */}
                                <div className="card card-body border h-100">
                                    {/* Icon */}
                                    <div className="fs-3 text-start text-success">
                                        <i className="bi bi-image"></i>
                                    </div>
                                    {/* Content */}
                                    <div className="ms-0">
                                        <h3 className="mb-0">475</h3>
                                        <h6 className="mb-0">Images</h6>
                                    </div>
                                </div>
                                {/* Card END */}
                            </div>
                            <div className="col-lg-6">
                                {/* Card START */}
                                <div className="card card-body border h-100">
                                    <h3>Storage space </h3>
                                    <div>
                                        <div className="d-flex">
                                            <h6 className="mt-0">Storage 80%</h6>
                                            <span className="ms-auto">6.80GB of 10GB</span>
                                        </div>
                                        <div className="progress progress-percent-bg progress-md">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        {/* Card END */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Post list table START */}
                        <div className="card border bg-transparent rounded-3">

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

                                {/* Post list table START */}
                                <div className="table-responsive border-0">
                                    <table className="table align-middle p-4 mb-0 table-hover table-shrink">
                                        {/* Table head */}
                                        <thead className="table-dark">
                                            <tr>
                                                <th scope="col" className="border-0 rounded-start">Post Name</th>
                                                <th scope="col" className="border-0">Author Name</th>
                                                <th scope="col" className="border-0">Published Date</th>
                                                <th scope="col" className="border-0">Category</th>
                                                <th scope="col" className="border-0">Status</th>
                                                <th scope="col" className="border-0 rounded-end">Action</th>
                                            </tr>
                                        </thead>

                                        {/* Table body START */}
                                        <tbody className="border-top-0">
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
                                                <td>
                                                    <a href="#" className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Technology</a>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
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
                                                <td>
                                                    <a href="#" className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</a>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <span className="badge bg-warning bg-opacity-15 text-warning mb-2">Draft</span>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
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
                                                <td>
                                                    <a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Photography</a>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
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
                                                <td>
                                                    <a href="#" className="badge text-bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Gadgets</a>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
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
                                                <td>Oct 14, 2022</td>
                                                {/* Table data */}
                                                <td>
                                                    <a href="#" className="badge bg-primary mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Sports</a>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <span className="badge bg-danger bg-opacity-10 text-danger mb-2">Removed</span>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
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
                                                    <h6 className="mb-0"><a href="#">Billy Vasquez</a></h6>
                                                </td>
                                                {/* Table data */}
                                                <td>Feb 23, 2022</td>
                                                {/* Table data */}
                                                <td>
                                                    <a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Travel</a>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* Table item */}
                                            <tr>
                                                {/* Table data */}
                                                <td>
                                                    <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">Best Pinterest boards for learning about business</a></h6>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <h6 className="mb-0"><a href="#">Amanda Reed</a></h6>
                                                </td>
                                                {/* Table data */}
                                                <td>Dec 16, 2022</td>
                                                {/* Table data */}
                                                <td>
                                                    <a href="#" className="badge text-bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Business</a>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* Table item */}
                                            <tr>
                                                {/* Table data */}
                                                <td>
                                                    <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">Five unbelievable facts about money.</a></h6>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <h6 className="mb-0"><a href="#">Carolyn Ortiz</a></h6>
                                                </td>
                                                {/* Table data */}
                                                <td>Nov 10, 2022</td>
                                                {/* Table data */}
                                                <td>
                                                    <a href="#" className="badge bg-primary mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Sports</a>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <span className="badge bg-danger bg-opacity-10 text-danger mb-2">Removed</span>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* Table item */}
                                            <tr>
                                                {/* Table data */}
                                                <td>
                                                    <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">Ten questions you should answer truthfully.</a></h6>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <h6 className="mb-0"><a href="#">Samuel Bishop</a></h6>
                                                </td>
                                                {/* Table data */}
                                                <td>Mar 06, 2022</td>
                                                {/* Table data */}
                                                <td>
                                                    <a href="#" className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</a>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <span className="badge bg-warning bg-opacity-15 text-warning mb-2">Draft</span>
                                                </td>
                                                {/* Table data */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* Table body END */}
                                    </table>
                                </div>
                                {/* Post list table END */}

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
                        {/* Post list table END */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog