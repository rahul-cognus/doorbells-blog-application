"use server"
import React from 'react'
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import { getClient } from "@/lib/client";

export async function generateMetadata({ }) {
    return {
        title: "Doorbelss"
    }
}

// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
const GET_CATEGORIES = gql`
  query GetAllArticles {
  getAllArticles {
    _id
    title
    description
    # content
    display_url
    image_url
    # number_of_likes
    # number_of_comments
    created_at
    updated_at
    tags {
      _id
    }
    categories {
      _id
    }
    author {
      _id
    }
  }
  getAllCategories {
    _id
    name
    description
    slug
  }
}
`;
const Category = async ({ params }) => {
    const client = getClient();
    // const { data, loading, error } = await useSuspenseQuery(GET_CATEGORIES);
    const { data } = await client.query({
        query: GET_CATEGORIES
    })

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    return (
        <>

            <section className="pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-300 text-center" style={{
                                backgroundImage: "url(/images/blog/16by9/08.jpg)",
                                backgroundPosition: "center left",
                                backgroundSize: "cover"
                            }}>
                                {/* Card Image overlay */}
                                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                                    <div className="w-100 my-auto">
                                        <div className="text-white mb-3">Browsing category:</div>
                                        <h1 className="text-white h2">
                                            <span className="badge text-bg-warning mb-2 text-capitalize">
                                                <i className="fas fa-circle me-2 small fw-bold"></i>{params.category}</span>
                                        </h1>
                                        <div className="text-center position-relative">
                                            <span className="badge text-bg-info fs-6">14 posts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Main content START */}
            <section className="position-relative pt-0">
                <div className="container" data-sticky-container>
                    <div className="row">
                        {/* Main Post START */}
                        <div className="col-lg-9">
                            <div className="row gy-4">
                                {/* Card item START */}
                                {
                                    data.getAllArticles.map((article) => (

                                        <div className="col-sm-6">
                                            <div className="card">
                                                {/* Card img */}
                                                <div className="position-relative">
                                                    <img className="card-img" src="/images/blog/4by3/09.jpg" alt="Card image" />
                                                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                        {/* Card overlay bottom */}
                                                        <div className="w-100 mt-auto">
                                                            {/* Card category */}
                                                            <a href={`/${params.category}`} className="badge text-bg-warning mb-2 text-capitalize"><i className="fas fa-circle me-2 small fw-bold"></i>{params.category}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body px-0 pt-3">
                                                    <h4 className="card-title"><Link href={`/${params.category}/${article.display_url}`} className="btn-link text-reset fw-bold">{article.title}</Link></h4>
                                                    <p className="card-text">{article.description}</p>
                                                    {/* Card info */}
                                                    <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                        <li className="nav-item">
                                                            <div className="nav-link">
                                                                <div className="d-flex align-items-center position-relative">
                                                                    <div className="avatar avatar-xs">
                                                                        <img className="avatar-img rounded-circle" src="/images/avatar/01.jpg" alt="avatar" />
                                                                    </div>
                                                                    <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Samuel</a></span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li className="nav-item">
                                                            {(() => {
                                                                // Assuming article.created_at is in the format "2024-04-14T22:59:44.960+00:00"
                                                                const createdAtDate = new Date(article.created_at);

                                                                // Check if the date is valid
                                                                if (isNaN(createdAtDate.getTime())) {
                                                                    // Handle invalid date
                                                                    return 'Invalid date';
                                                                } else {
                                                                    // Format the date
                                                                    return createdAtDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
                                                                }
                                                            })()}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }


                                {/* Pagination START */}
                                <div className="col-12 text-center mt-5">
                                    <nav className="mb-5 d-flex justify-content-center" aria-label="navigation">
                                        <ul className="pagination pagination-bordered ">
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
                        {/* Main Post END */}

                        {/* Sidebar START */}
                        <div className="col-lg-3 mt-5 mt-lg-0">
                            <div data-sticky data-margin-top="80" data-sticky-for="767">
                                {/* Categories */}
                                <div className="row g-2">
                                    <h5>Other Categories</h5>
                                    <div className="d-flex justify-content-between align-items-center bg-warning bg-opacity-15 rounded p-2 position-relative">
                                        <h6 className="m-0 text-warning">Photography</h6>
                                        <a href="#" className="badge bg-warning text-dark stretched-link">09</a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center bg-info bg-opacity-10 rounded p-2 position-relative">
                                        <h6 className="m-0 text-info">Travel</h6>
                                        <a href="#" className="badge bg-info stretched-link">25</a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center bg-danger bg-opacity-10 rounded p-2 position-relative">
                                        <h6 className="m-0 text-danger">Photography</h6>
                                        <a href="#" className="badge bg-danger stretched-link">75</a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center bg-primary bg-opacity-10 rounded p-2 position-relative">
                                        <h6 className="m-0 text-primary">Covid-19</h6>
                                        <a href="#" className="badge bg-primary stretched-link">19</a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center bg-success bg-opacity-10 rounded p-2 position-relative">
                                        <h6 className="m-0 text-success">Business</h6>
                                        <a href="#" className="badge bg-success stretched-link">35</a>
                                    </div>
                                </div>
                                {/* ADV widget START */}
                                <div className="col-12 col-sm-6 col-lg-12 my-4">
                                    <a href="#" className="d-block card-img-flash">
                                        <img src="/images/adv.png" alt="" />
                                    </a>
                                    <div className="smaller text-end mt-2">ads via <a href="#" className="text-body-secondary"><u>Bootstrap</u></a></div>
                                </div>
                                {/* ADV widget END */}
                            </div>
                        </div>
                        {/* Sidebar END */}
                    </div> {/* Row end */}
                </div>
            </section>
            {/* =======================Main content END */}
        </>
    )
}

export default Category