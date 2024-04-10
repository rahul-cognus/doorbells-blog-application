"use client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React from 'react'
import Image from 'next/image'
import { gql } from '@apollo/client';


const query = gql`query {
  getAllCategories {
    _id
    name
    description
    slug
  }
}`
const Dashboard = () => {
    const { data } = useSuspenseQuery(query);
    console.log(data)
    return (
        <section className="py-4">
            <div className="container">
                <div className="row g-4">

                    <div className="col-12">
                        {/* {/* <!-- Counter START --> */}
                        <div className="row g-4">

                            {/* {/* <!-- Counter item --> */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card card-body border p-3">
                                    <div className="d-flex align-items-center">
                                        {/* {/* <!-- Icon --> */}
                                        <div className="icon-xl fs-1 bg-success bg-opacity-10 rounded-3 text-success">
                                            <i className="bi bi-people-fill"></i>
                                        </div>
                                        {/* {/* <!-- Content --> */}
                                        <div className="ms-3">
                                            <h3>134K</h3>
                                            <h6 className="mb-0">Pageviews</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* {/* <!-- Counter item --> */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card card-body border p-3">
                                    <div className="d-flex align-items-center">
                                        {/* {/* <!-- Icon --> */}
                                        <div className="icon-xl fs-1 bg-primary bg-opacity-10 rounded-3 text-primary">
                                            <i className="bi bi-file-earmark-text-fill"></i>
                                        </div>
                                        {/* {/* <!-- Content --> */}
                                        <div className="ms-3">
                                            <h3>180</h3>
                                            <h6 className="mb-0">Posts</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* {/* <!-- Counter item --> */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card card-body border p-3">
                                    <div className="d-flex align-items-center">
                                        {/* <!-- Icon --> */}
                                        <div className="icon-xl fs-1 bg-danger bg-opacity-10 rounded-3 text-danger">
                                            <i className="bi bi-suit-heart-fill"></i>
                                        </div>
                                        {/* <!-- Content --> */}
                                        <div className="ms-3">
                                            <h3>2150</h3>
                                            <h6 className="mb-0">Likes</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Counter item --> */}
                            <div className="col-sm-6 col-lg-3">
                                <div className="card card-body border p-3">
                                    <div className="d-flex align-items-center">
                                        {/* <!-- Icon --> */}
                                        <div className="icon-xl fs-1 bg-info bg-opacity-10 rounded-3 text-info">
                                            <i className="bi bi-bar-chart-line-fill"></i>
                                        </div>
                                        {/* <!-- Content --> */}
                                        <div className="ms-3">
                                            <h3>84K</h3>
                                            <h6 className="mb-0">Visitors</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- Counter END --> */}
                    </div>

                    <div className="col-xl-8">
                        {/* <!-- Chart START --> */}
                        <div className="card border h-100">

                            {/* <!-- Card header --> */}
                            <div className="card-header p-3 border-bottom">
                                <h5 className="card-header-title mb-0">Traffic stats</h5>
                            </div>
                            {/* <!-- Card body --> */}
                            <div className="card-body">
                                {/* <!-- Apex chart --> */}
                                <div id="apexChartTrafficStats" className="mt-2"></div>
                            </div>
                        </div>
                        {/* <!-- Chart END --> */}
                    </div>

                    <div className="col-md-6 col-xxl-4">
                        {/* <!-- Latest blog START --> */}
                        <div className="card border h-100">
                            {/* <!-- Card header --> */}
                            <div className="card-header border-bottom p-3">
                                <h5 className="card-header-title mb-0">Latest post</h5>
                            </div>

                            {/* <!-- Card body START --> */}
                            <div className="card-body p-3">

                                <div className="row">
                                    {/* <!-- Blog item --> */}
                                    <div className="col-12">
                                        <div className="d-flex align-items-center position-relative">
                                            <Image className="w-60 rounded" width={60} height={60} src="/blog/1by1/01.jpg" alt="product" />
                                            <div className="ms-3">
                                                <a href="#" className="h6 stretched-link">Dirty little secrets about the business industry</a>
                                                <p className="small mb-0">Jun 17, 2022</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Divider --> */}
                                    <hr className="my-3" />

                                    {/* <!-- Blog item --> */}
                                    <div className="col-12">
                                        <div className="d-flex align-items-center position-relative">
                                            <Image className="w-60 rounded" width={60} height={60} src="/blog/1by1/02.jpg" alt="product" />
                                            <div className="ms-3">
                                                <a href="#" className="h6 stretched-link">12 worst types of business accounts you follow on Twitter</a>
                                                <p className="small mb-0">Nov 11, 2022</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Divider --> */}
                                    <hr className="my-3" />

                                    {/* <!-- Blog item --> */}
                                    <div className="col-12">
                                        <div className="d-flex align-items-center position-relative">
                                            <Image className="w-60 rounded" width={60} height={60} src="/blog/1by1/03.jpg" alt="product" />
                                            <div className="ms-3">
                                                <a href="#" className="h6 stretched-link">Bad habits that people in the industry need to quit</a>
                                                <p className="small mb-0">Sep 01, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card body END --> */}

                            {/* <!-- Card footer --> */}
                            <div className="card-footer border-top text-center p-3">
                                <a href="#">View all Posts</a>
                            </div>

                        </div>
                        {/* <!-- Latest blog END --> */}
                    </div>

                    <div className="col-md-6 col-xxl-4">
                        {/* <!-- Recent comment START --> */}
                        <div className="card border h-100">
                            {/* <!-- Card header --> */}
                            <div className="card-header border-bottom p-3">
                                <h5 className="card-header-title mb-0">Recent comments</h5>
                            </div>

                            {/* <!-- Card body START --> */}
                            <div className="card-body p-3">

                                <div className="row">
                                    {/* <!-- Comment item --> */}
                                    <div className="col-12">
                                        <div className="d-flex align-items-center position-relative">
                                            {/* <!-- Avatar --> */}
                                            <div className="avatar avatar-lg flex-shrink-0">
                                                <Image className="avatar-img rounded-2" width={64} height={64} src="/avatar/06.jpg" alt="avatar" />
                                            </div>
                                            {/* <!-- Info --> */}
                                            <div className="ms-3">
                                                <p className="mb-1"> <a className="h6 fw-normal stretched-link" href="#"> Supposing so be resolving breakfast am or perfectly.. </a></p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="small mb-0">by Joan</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Divider --> */}
                                    <hr className="my-3" />

                                    {/* <!-- Comment item --> */}
                                    <div className="col-12">
                                        <div className="d-flex align-items-center position-relative">
                                            {/* <!-- Avatar --> */}
                                            <div className="avatar avatar-lg flex-shrink-0">
                                                <Image className="avatar-img rounded-2" width={64} height={64} src="/avatar/08.jpg" alt="avatar" />
                                            </div>
                                            {/* <!-- Info --> */}
                                            <div className="ms-3">
                                                <p className="mb-1"> <a className="h6 fw-normal stretched-link" href="#"> We focus a great deal on the understanding of behavioral.. </a></p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="small mb-0">by Allen Smith</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Divider --> */}
                                    <hr className="my-3" />

                                    {/* <!-- Comment item --> */}
                                    <div className="col-12">
                                        <div className="d-flex align-items-center position-relative">
                                            {/* <!-- Avatar --> */}
                                            <div className="avatar avatar-lg flex-shrink-0">
                                                <Image className="avatar-img rounded-2" width={64} height={64} src="/avatar/04.jpg" alt="avatar" />
                                            </div>
                                            {/* <!-- Info --> */}
                                            <div className="ms-3">
                                                <p className="mb-1"> <a className="h6 fw-normal stretched-link" href="#"> Supposing so be resolving breakfast am or perfectly.. </a></p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="small mb-0">by Louis Ferguson</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Divider --> */}
                                    <hr className="my-3" />

                                    {/* <!-- Comment item --> */}
                                    <div className="col-12">
                                        <div className="d-flex align-items-center position-relative">
                                            {/* <!-- Avatar --> */}
                                            <div className="avatar avatar-lg flex-shrink-0">
                                                <Image className="avatar-img rounded-2" width={64} height={64} src="/avatar/05.jpg" alt="avatar" />
                                            </div>
                                            {/* <!-- Info --> */}
                                            <div className="ms-3">
                                                <p className="mb-1"> <a className="h6 fw-normal stretched-link" href="#"> Supposing so be resolving breakfast am or perfectly.. </a></p>
                                                <div className="d-flex justify-content-between">
                                                    <p className="small mb-0">by Joan Wallace</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card body END --> */}
                        </div>
                        {/* <!-- Recent comment END --> */}
                    </div>

                    <div className="col-md-6 col-xxl-4">
                        {/* <!-- Notice board START --> */}
                        <div className="card border h-100">
                            {/* <!-- Card header --> */}
                            <div className="card-header border-bottom d-flex justify-content-between align-items-center  p-3">
                                <h5 className="card-header-title mb-0">Notice board</h5>
                                {/* <!-- Dropdown button --> */}
                                <div className="dropdown text-end">
                                    <a href="#" className="btn border-0 p-0 mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots fa-fw"></i>
                                    </a>
                                    {/* <!-- dropdown button --> */}
                                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare3">
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square fa-fw me-2"></i>Edit</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="bi bi-trash fa-fw me-2"></i>Remove</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!-- Card body START --> */}
                            <div className="card-body p-3">
                                <div className="custom-scrollbar h-350">
                                    <div className="row">
                                        {/* <!-- Notice board item --> */}
                                        <div className="col-12">
                                            <div className="d-flex justify-content-between position-relative">
                                                <div className="d-sm-flex">
                                                    <div className="icon-lg bg-warning bg-opacity-15 text-warning rounded-2 flex-shrink-0">
                                                        <i className="fas fa-user-tie fs-5"></i>
                                                    </div>
                                                    {/* <!-- Info --> */}
                                                    <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                                        <h6 className="mb-0"><a href="#" className="stretched-link">Join New Author</a></h6>
                                                        <p className="mb-0">Amongst moments do in arrived Fat weddings believed prospect</p>
                                                        <span className="small">5 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Divider --> */}
                                        <hr className="my-3" />

                                        {/* <!-- Notice board item --> */}
                                        <div className="col-12">
                                            <div className="d-flex justify-content-between position-relative">
                                                <div className="d-sm-flex">
                                                    <div className="icon-lg bg-success bg-opacity-10 text-success rounded-2 flex-shrink-0">
                                                        <i className="bi bi-chat-left-quote-fill fs-5"></i>
                                                    </div>
                                                    {/* <!-- Info --> */}
                                                    <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                                        <h6 className="mb-0"><a href="#" className="stretched-link">Add 5 New Blogs</a></h6>
                                                        <p className="mb-0">Arrived Fat weddings believed prospect</p>
                                                        <span className="small">4 hour ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Divider --> */}
                                        <hr className="my-3" />

                                        {/* <!-- Notice board item --> */}
                                        <div className="col-12">
                                            <div className="d-flex justify-content-between position-relative">
                                                <div className="d-sm-flex">
                                                    <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-2 flex-shrink-0">
                                                        <i className="bi bi-bell-fill fs-5"></i>
                                                    </div>
                                                    {/* <!-- Info --> */}
                                                    <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                                        <h6 className="mb-0"><a href="#" className="stretched-link">5 New Subscribers</a></h6>
                                                        <p className="mb-0">Weddings believed prospect Arrived</p>
                                                        <span className="small">4 hour ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Divider --> */}
                                        <hr className="my-3" />

                                        {/* <!-- Notice board item --> */}
                                        <div className="col-12">
                                            <div className="d-flex justify-content-between position-relative">
                                                <div className="d-sm-flex">
                                                    <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-2 flex-shrink-0"><i className="fas fa-globe fs-5"></i></div>
                                                    {/* <!-- Info --> */}
                                                    <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                                                        <h6 className="mb-0"><a href="#" className="stretched-link">Update New Feature</a></h6>
                                                        <span className="small">3 days ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* <!-- Row END --> */}
                                </div>
                            </div>
                            {/* <!-- Card body END --> */}

                            {/* <!-- Card footer --> */}
                            <div className="card-footer border-top text-center p-3">
                                <a href="#">View all Notice List</a>
                            </div>

                        </div>
                        {/* <!-- Notice board END --> */}
                    </div>

                    <div className="col-md-6 col-xxl-4">
                        <div className="card border h-100">

                            {/* <!-- Card header --> */}
                            <div className="card-header border-bottom d-flex justify-content-between align-items-center p-3">
                                <h5 className="card-header-title mb-0">Traffic sources</h5>
                                <a href="#" className="btn btn-sm btn-link p-0 mb-0 text-reset">View all</a>
                            </div>

                            {/* <!-- Card body START --> */}
                            <div className="card-body p-4">
                                {/* <!-- Chart --> */}
                                <div className=" mx-auto">
                                    <div id="apexChartTrafficSources"></div>
                                </div>
                                {/* <!-- Content --> */}
                                <ul className="list-inline text-center mt-3">
                                    <li className="list-inline-item pe-2"><i className="text-primary fas fa-circle pe-1"></i> Search </li>
                                    <li className="list-inline-item pe-2"><i className="text-success fas fa-circle pe-1"></i> Direct </li>
                                    <li className="list-inline-item pe-2"><i className="text-danger fas fa-circle pe-1"></i> Social </li>
                                    <li className="list-inline-item pe-2"><i className="text-warning fas fa-circle pe-1"></i> Display ads </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        {/* <!-- Blog list table START --> */}
                        <div className="card border bg-transparent rounded-3">
                            {/* <!-- Card header START --> */}
                            <div className="card-header bg-transparent border-bottom p-3">
                                <div className="d-sm-flex justify-content-between align-items-center">
                                    <h5 className="mb-2 mb-sm-0">Blog list <span className="badge bg-primary bg-opacity-10 text-primary">105</span></h5>
                                    <a href="#" className="btn btn-sm btn-primary mb-0">Add New</a>
                                </div>
                            </div>
                            {/* <!-- Card header END --> */}

                            {/* <!-- Card body START --> */}
                            <div className="card-body">

                                {/* <!-- Search and select START --> */}
                                <div className="row g-3 align-items-center justify-content-between mb-3">
                                    {/* <!-- Search --> */}
                                    <div className="col-md-8">
                                        <form className="rounded position-relative">
                                            <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 "></i></button>
                                        </form>
                                    </div>

                                    {/* <!-- Select option --> */}
                                    <div className="col-md-3">
                                        {/* <!-- Short by filter --> */}
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
                                {/* <!-- Search and select END --> */}

                                {/* <!-- Blog list table START --> */}
                                <div className="table-responsive border-0">
                                    <table className="table align-middle p-4 mb-0 table-hover table-shrink">
                                        {/* <!-- Table head --> */}
                                        <thead className="table-dark">
                                            <tr>
                                                <th scope="col" className="border-0 rounded-start">Blog Name</th>
                                                <th scope="col" className="border-0">Author Name</th>
                                                <th scope="col" className="border-0">Published Date</th>
                                                <th scope="col" className="border-0">Categories</th>
                                                <th scope="col" className="border-0">Status</th>
                                                <th scope="col" className="border-0 rounded-end">Action</th>
                                            </tr>
                                        </thead>

                                        {/* <!-- Table body START --> */}
                                        <tbody className="border-top-0">
                                            {/* <!-- Table item --> */}
                                            <tr>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">12 worst types of business accounts you follow on Twitter</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="mb-0"><a href="#">Lori Stevens</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>Jan 22, 2022</td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <a href="#" className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Technology</a>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!-- Table item --> */}
                                            <tr>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">Dirty little secrets about the business industry</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="mb-0"><a href="#">Dennis Barrett</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>Jan 19, 2022</td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <a href="#" className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</a>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <span className="badge bg-warning bg-opacity-15 text-warning mb-2">Draft</span>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!-- Table item --> */}
                                            <tr>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">7 common mistakes everyone makes while traveling</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="mb-0"><a href="#">Billy Vasquez</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>Nov 11, 2022</td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Photography</a>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!-- Table item --> */}
                                            <tr>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">5 investment doubts you should clarify</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="mb-0"><a href="#">Lori Stevens</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>Jan 22, 2022</td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <a href="#" className="badge text-bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Gadgets</a>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!-- Table item --> */}
                                            <tr>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">Bad habits that people in the industry need to quit</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="mb-0"><a href="#">Larry Lawson</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>Dec 06, 2022</td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <a href="#" className="badge bg-primary mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Sports</a>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <span className="badge bg-danger bg-opacity-10 text-danger mb-2">Removed</span>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!-- Table item --> */}
                                            <tr>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="course-title mt-2 mt-md-0 mb-0"><a href="#">Around the web: 20 fabulous infographics about business</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <h6 className="mb-0"><a href="#">Bryan Knight</a></h6>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>Feb 14, 2022</td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Travel</a>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <span className="badge bg-success bg-opacity-10 text-success mb-2">Live</span>
                                                </td>
                                                {/* <!-- Table data --> */}
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <a href="#" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><i className="bi bi-trash"></i></a>
                                                        <a href="dashboard-post-edit.html" className="btn btn-light btn-round mb-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="bi bi-pencil-square"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                        {/* {/* <!-- Table body END --> */}
                                    </table>
                                </div>
                                {/* {/* <!-- Blog list table END --> */}

                                {/* {/* <!-- Pagination START --> */}
                                <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                                    {/* {/* <!-- Content --> */}
                                    <p className="mb-sm-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                                    {/* {/* <!-- Pagination --> */}
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
                                {/* {/* <!-- Pagination END --> */}
                            </div>
                        </div>
                        {/* {/* <!-- Blog list table END --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard