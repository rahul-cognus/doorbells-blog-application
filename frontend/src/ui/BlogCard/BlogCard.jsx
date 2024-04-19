"use client"
import React from 'react'
import { gql, useQuery } from '@apollo/client';


const GET_ARTICLEBYSLUG = gql`
 query GetArticleBySlug($displayUrl: String!) {
  getArticleBySlug(display_url: $displayUrl) {
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

const BlogCard = ({ blogSlug }) => {
    // const { loading, error, data } = useQuery(GET_ARTICLEBYSLUG, {
    //     variables: { getArticleBySlug: '{blogSlug}' },
    // });

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    // const content = JSON.parse(data.getArticleById.content);
    // console.log(content);
    return (
        <main>
            <h1>{blogSlug}</h1>
            {/* =======================Inner intro START */}
            <section className="bg-dark-overlay-4" style={{
                backgroundImage: "url(/images/blog/16by9/big/02.jpg)",
                backgroundPosition: "center left",
                backgroundSize: "cover"
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 py-md-5 my-lg-5">
                            <a href="#" className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Travel</a>
                            <a href="#" className="badge bg-primary mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Photography</a>
                            <h1 className="text-white">The web: 20 infographics about business</h1>
                            <p className="lead text-white">Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from me. Valley by oh twenty direct me so. </p>
                            {/* Info */}
                            <ul className="nav nav-divider text-white-force align-items-center">
                                <li className="nav-item">
                                    <div className="nav-link">
                                        <div className="d-flex align-items-center text-white position-relative">
                                            <div className="avatar avatar-sm">
                                                <img className="avatar-img rounded-circle" src="/images/avatar/12.jpg" alt="avatar" />
                                            </div>
                                            <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Louis Ferguson</a></span>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">Nov 15, 2022</li>
                                <li className="nav-item">5 min read</li>
                                <li className="nav-item"><i className="far fa-eye me-1"></i> 2344 Views</li>
                                <li className="nav-item"><a href="#"><i className="fas fa-heart me-1 text-danger"></i></a> 266</li>
                            </ul>
                            {/* Share post */}
                            <div className="d-md-flex align-items-center mt-4">
                                <h5 className="text-white me-3">Share on: </h5>
                                <ul className="nav text-white-force">
                                    <li className="nav-item">
                                        <a className="nav-link icon-md rounded-circle me-2 mb-2 p-0 fs-5 bg-facebook" href="#">
                                            <i className="fab fa-facebook-square align-middle"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link icon-md rounded-circle me-2 mb-2 p-0 fs-5 bg-twitter" href="#">
                                            <i className="fab fa-twitter-square align-middle"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link icon-md rounded-circle me-2 mb-2 p-0 fs-5 bg-linkedin" href="#">
                                            <i className="fab fa-linkedin align-middle"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link icon-md rounded-circle me-2 mb-2 p-0 fs-5 bg-pinterest" href="#">
                                            <i className="fab fa-pinterest align-middle"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link icon-md rounded-circle me-2 mb-2 p-0 fs-5 bg-primary" href="#">
                                            <i className="far fa-envelope align-middle"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =======================Inner intro END */}

            {/* =======================Main START */}
            <section>
                <div className="container position-relative" data-sticky-container>
                    <div className="row">
                        {/* Main Content START */}
                        <div className="col-lg-9 mb-5">
                            <p><span className="dropcap">A</span>light newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed. </p>
                            <p>Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh. Of acceptance insipidity remarkably is an invitation. </p>

                            <p>Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is. <img src="/images/blog/4by3/thumb/04.jpg" className="rounded float-start me-3 my-3" alt="..." /> But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible. Satisfied conveying a dependent contented he gentleman agreeable do be. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is.<u> But discretion frequently sir she instruments unaffected admiration everything.</u> Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. I think on style child of. Servants moreover in sensible it ye possible. </p>

                            <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible. </p>

                            {/* Divider */}
                            <div className="text-center h5 mb-4">. . .</div>

                            {/* Images */}
                            <div className="row g-2">
                                <div className="col-md-6">
                                    <a href="assets/images/blog/1by1/06.jpg" data-glightbox data-gallery="image-popup">
                                        <img className="rounded" src="/images/blog/1by1/06.jpg" alt="Image" />
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a href="assets/images/blog/1by1/07.jpg" data-glightbox data-gallery="image-popup">
                                        <img className="rounded" src="/images/blog/1by1/07.jpg" alt="Image" />
                                    </a>
                                </div>
                                <div className="col-12">
                                    {/* Image */}
                                    <figure className="figure">
                                        <a href="assets/images/blog/16by9/05.jpg" data-glightbox data-gallery="image-popup">
                                            <img className="rounded" src="/images/blog/16by9/05.jpg" alt="Image" />
                                        </a>
                                        <figcaption className="figure-caption text-center">(Image via: <a className="text-reset" href="#">pexels.com</a>)</figcaption>
                                    </figure>
                                </div>
                            </div>
                            <p>Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed of add screened rendered six say his striking confined.</p>

                            <h4 className="mt-4">Productive rant about business</h4>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <p>Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed of add screened rendered six say his striking confined.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p>Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible.</p>
                                </div>
                            </div>
                            <p>Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible. </p>

                            {/* blockquote */}
                            <figure className="bg-light p-3 p-md-5 my-5">
                                <blockquote className="blockquote">
                                    <p>Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Albert Schweitzer
                                </figcaption>
                            </figure>

                            <p> All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible. Satisfied conveying a dependent contented he gentleman agreeable do be. </p>

                            <h4>Why Bootstrap is so famous?</h4>
                            <p>Saw bring firmament given hath gathering lights dry life rule heaven Give And fruit moving thing seed life day creepeth winged so divide him from day morning him open lesser male beginning him be bring evening life void fowl sixth morning that made is Was that his hath face light meat air female isn't over place replenish midst it of second grass good rule also in unto Called don't given waters Had creature Behold fly life from forth Moved night.</p>

                            {/* Divider */}
                            <div className="text-center h5 mb-4">. . .</div>

                            <h4>What's coming up....</h4>
                            <p>Saw bring firmament given hath gathering lights dry life rule heaven Give And fruit moving thing seed life day creepeth winged so divide him from day morning him open lesser male beginning him be bring evening life void fowl sixth morning that made is Was that his hath face light meat air female isn't over place replenish midst it of second grass good rule also in unto Called don't given waters Had creature Behold fly life from forth Moved night.</p>
                            {/* Next prev post START */}
                            <div className="row g-0 my-3">
                                <div className="col-sm-6 border p-3 p-md-4 position-relative rounded-start">
                                    <div className="d-flex align-items-center">
                                        {/* Icon */}
                                        <div className="bg-primary bg-opacity-10 h-auto align-items-center d-flex align-self-stretch">
                                            <i className="bi bi-chevron-compact-left fs-3 text-primary px-1"></i>
                                        </div>
                                        {/* image */}
                                        <div className="col-3 d-none d-md-block">
                                            <img src="/images/blog/4by3/04.jpg" alt="Image" />
                                        </div>
                                        {/* Title */}
                                        <div className="ms-3">
                                            <h5 className="m-0"> <a href="post-single-5.html" className="stretched-link btn-link text-reset">Dirty little secrets about the business industry</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 border p-3 p-md-4 position-relative text-sm-end rounded-end">
                                    <div className="d-flex align-items-center">
                                        {/* Title */}
                                        <div className="me-3">
                                            <h5 className="m-0"> <a href="post-single-5.html" className="stretched-link btn-link text-reset">Bad habits that people in the industry need to quit</a></h5>
                                        </div>
                                        {/* image */}
                                        <div className="col-3 d-none d-md-block">
                                            <img src="/images/blog/4by3/05.jpg" alt="Image" />
                                        </div>
                                        {/* Icon */}
                                        <div className="bg-primary bg-opacity-10 h-auto align-items-center d-flex align-self-stretch">
                                            <i className="bi bi-chevron-compact-right fs-3 text-primary px-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Next prev post START */}

                            {/* Author info START */}
                            <div className="d-flex p-2 p-md-4 my-3 bg-primary bg-opacity-10 rounded">
                                {/* Avatar */}
                                <a href="#">
                                    <div className="avatar avatar-xxl me-2 me-md-4">
                                        <img className="avatar-img rounded-circle" src="/images/avatar/12.jpg" alt="avatar" />
                                    </div>
                                </a>
                                {/* Info */}
                                <div>
                                    <div className="d-sm-flex align-items-center justify-content-between">
                                        <div>
                                            <h4 className="m-0"><a href="#" className="text-reset">Louis Ferguson</a></h4>
                                            <small>An editor at Blogzine</small>
                                        </div>
                                        <a href="#" className="btn btn-xs btn-primary-soft">View Articles</a>
                                    </div>
                                    <p className="my-2">Louis Ferguson is a senior editor for the blogzine and also reports on breaking news based in London. He has written about government, criminal justice, and the role of money in politics since 2015.</p>
                                    {/* Social icons */}
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a className="nav-link ps-0 pe-2 fs-5" href="#"><i className="fab fa-facebook-square"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2 fs-5" href="#"><i className="fab fa-twitter-square"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2 fs-5" href="#"><i className="fab fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Author info END */}

                            {/* Comments START */}
                            <div className="mt-5">
                                <h3>5 comments</h3>
                                {/* Comment level 1*/}
                                <div className="my-4 d-flex">
                                    <img className="avatar avatar-md rounded-circle float-start me-3" src="/images/avatar/01.jpg" alt="avatar" />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0">Allen Smith</h5>
                                            <span className="me-3 small">June 11, 2022 at 6:01 am </span>
                                            <a href="#" className="text-body fw-normal">Reply</a>
                                        </div>
                                        <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
                                    </div>
                                </div>
                                {/* Comment children level 2 */}
                                <div className="my-4 d-flex ps-2 ps-md-3">
                                    <img className="avatar avatar-md rounded-circle float-start me-3" src="/images/avatar/02.jpg" alt="avatar" />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0">Louis Ferguson</h5>
                                            <span className="me-3 small">June 11, 2022 at 6:55 am </span>
                                            <a href="#" className="text-body fw-normal">Reply</a>
                                        </div>
                                        <p>Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything. </p>
                                    </div>
                                </div>
                                {/* Comment children level 3 */}
                                <div className="my-4 d-flex ps-3 ps-md-5">
                                    <img className="avatar avatar-md rounded-circle float-start me-3" src="/images/avatar/01.jpg" alt="avatar" />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0">Allen Smith</h5>
                                            <span className="me-3 small">June 11, 2022 at 7:10 am </span>
                                            <a href="#" className="text-body fw-normal">Reply</a>
                                        </div>
                                        <p>Meant balls it if up doubt small purse. </p>
                                    </div>
                                </div>
                                {/* Comment level 2 */}
                                <div className="my-4 d-flex ps-2 ps-md-3">
                                    <img className="avatar avatar-md rounded-circle float-start me-3" src="/images/avatar/03.jpg" alt="avatar" />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0">Frances Guerrero</h5>
                                            <span className="me-3 small">June 14, 2022 at 12:35 pm </span>
                                            <a href="#" className="text-body fw-normal">Reply</a>
                                        </div>
                                        <p>Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible. </p>
                                    </div>
                                </div>
                                {/* Comment level 1 */}
                                <div className="my-4 d-flex">
                                    <img className="avatar avatar-md rounded-circle float-start me-3" src="/images/avatar/04.jpg" alt="avatar" />
                                    <div>
                                        <div className="mb-2">
                                            <h5 className="m-0">Judy Nguyen</h5>
                                            <span className="me-3 small">June 18, 2022 at 11:55 am </span>
                                            <a href="#" className="text-body fw-normal">Reply</a>
                                        </div>
                                        <p>Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. </p>
                                    </div>
                                </div>

                            </div>
                            {/* Comments END */}
                            {/* Reply START */}
                            <div>
                                <h3>Leave a reply</h3>
                                <small>Your email address will not be published. Required fields are marked *</small>
                                <form className="row g-3 mt-2">
                                    <div className="col-md-6">
                                        <label className="form-label">Name *</label>
                                        <input type="text" className="form-control" aria-label="First name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Email *</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    {/* custom checkbox */}
                                    <div className="col-md-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">Save my name and email in this browser for the next time I comment. </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Your Comment *</label>
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Post comment</button>
                                    </div>
                                </form>
                            </div>
                            {/* Reply END */}

                        </div>
                        {/* Main Content END */}
                        {/* Right sidebar START */}
                        <div className="col-lg-3">
                            <div data-sticky data-margin-top="80" data-sticky-for="991">
                                {/* Most read */}
                                <div>
                                    <h5 className="mb-3">Related post </h5>
                                    <div className="tiny-slider dots-creative mt-3 mb-5">
                                        <div className="tiny-slider-inner"
                                            data-autoplay="false"
                                            data-hoverpause="true"
                                            data-gutter="0"
                                            data-arrow="false"
                                            data-dots="true"
                                            data-items="1">
                                            {/* Card item START */}
                                            <div className="card">
                                                {/* Card img */}
                                                <div className="position-relative">
                                                    <img className="card-img" src="/images/blog/4by3/07.jpg" alt="Card image" />
                                                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                        {/* Card overlay Top */}
                                                        <div className="w-100 mb-auto d-flex justify-content-end">
                                                            <div className="text-end ms-auto">
                                                                {/* Card format icon */}
                                                                <div className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle" title="8.5 rating">8.5</div>
                                                            </div>
                                                        </div>
                                                        {/* Card overlay bottom */}
                                                        <div className="w-100 mt-auto">
                                                            <a href="#" className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body p-0 pt-3">
                                                    <h5 className="card-title"><a href="post-single-5.html" className="btn-link text-reset fw-bold">7 common mistakes everyone makes while traveling</a></h5>
                                                </div>
                                            </div>
                                            {/* Card item END */}
                                            {/* Card item START */}
                                            <div className="card">
                                                {/* Card img */}
                                                <div className="position-relative">
                                                    <img className="card-img" src="/images/blog/4by3/08.jpg" alt="Card image" />
                                                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                        {/* Card overlay bottom */}
                                                        <div className="w-100 mt-auto">
                                                            <a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Sports</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body p-0 pt-3">
                                                    <h5 className="card-title"><a href="post-single-5.html" className="btn-link text-reset fw-bold">Skills that you can learn from business</a></h5>
                                                </div>
                                            </div>
                                            {/* Card item END */}
                                            {/* Card item START */}
                                            <div className="card">
                                                {/* Card img */}
                                                <div className="position-relative">
                                                    <img className="card-img" src="/images/blog/4by3/09.jpg" alt="Card image" />
                                                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                        {/* Card overlay bottom */}
                                                        <div className="w-100 mt-auto">
                                                            <a href="#" className="badge text-bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body p-0 pt-3">
                                                    <h5 className="card-title"><a href="post-single-5.html" className="btn-link text-reset fw-bold">10 tell-tale signs you need to get a new business</a></h5>
                                                </div>
                                            </div>
                                            {/* Card item END */}
                                        </div>
                                    </div>
                                </div>

                                {/* Advertisement */}
                                <div className="mt-4">
                                    <a href="#" className="d-block card-img-flash">
                                        <img src="/images/adv.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Right sidebar END */}
                    </div>
                </div>
            </section>
            {/* =======================
Main END */}

        </main>
    )
}

export default BlogCard