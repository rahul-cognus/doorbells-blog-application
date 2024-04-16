import React from 'react'

const Category = ({ params }) => {
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
                                <div className="col-sm-6">
                                    <div className="card">
                                        {/* Card img */}
                                        <div className="position-relative">
                                            <img className="card-img" src="/images/blog/4by3/09.jpg" alt="Card image" />
                                            <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                {/* Card overlay bottom */}
                                                <div className="w-100 mt-auto">
                                                    {/* Card category */}
                                                    <a href="#" className="badge text-bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Technology</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 pt-3">
                                            <h4 className="card-title"><a href="post-single-2.html" className="btn-link text-reset fw-bold">12 worst types of business accounts you follow on Twitter</a></h4>
                                            <p className="card-text">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to</p>
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
                                                <li className="nav-item">Jan 22, 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Card item END */}
                                {/* Card item START */}
                                <div className="col-sm-6">
                                    <div className="card">
                                        {/* Card img */}
                                        <div className="position-relative">
                                            <img className="card-img" src="/images/blog/4by3/10.jpg" alt="Card image" />
                                            <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                {/* Card overlay Top */}
                                                <div className="w-100 mb-auto d-flex justify-content-end">
                                                    <div className="text-end ms-auto">
                                                        {/* Card format icon */}
                                                        <div className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle" title="This post has video"><i className="fas fa-video"></i></div>
                                                    </div>
                                                </div>
                                                {/* Card overlay bottom */}
                                                <div className="w-100 mt-auto">
                                                    {/* Card category */}
                                                    <a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Travel</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 pt-3">
                                            <h4 className="card-title"><a href="post-single-2.html" className="btn-link text-reset fw-bold">Dirty little secrets about the business industry</a></h4>
                                            <p className="card-text">Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor.</p>
                                            {/* Card info */}
                                            <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                <li className="nav-item">
                                                    <div className="nav-link">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <div className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="/images/avatar/02.jpg" alt="avatar" />
                                                            </div>
                                                            <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Dennis</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">Mar 07, 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Card item END */}
                                {/* Card item START */}
                                <div className="col-sm-6">
                                    <div className="card">
                                        {/* Card img */}
                                        <div className="position-relative">
                                            <img className="card-img" src="/images/blog/4by3/11.jpg" alt="Card image" />
                                            <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                {/* Card overlay bottom */}
                                                <div className="w-100 mt-auto">
                                                    {/* Card category */}
                                                    <a href="#" className="badge text-bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Gadgets</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 pt-3">
                                            <h4 className="card-title"><a href="post-single-2.html" className="btn-link text-reset fw-bold">Bad habits that people in the industry need to quit</a></h4>
                                            <p className="card-text">For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected</p>
                                            {/* Card info */}
                                            <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                <li className="nav-item">
                                                    <div className="nav-link">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <div className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="/images/avatar/03.jpg" alt="avatar" />
                                                            </div>
                                                            <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Bryan</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">Jun 17, 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Card item END */}
                                {/* Card item START */}
                                <div className="col-sm-6">
                                    <div className="card">
                                        {/* Card img */}
                                        <div className="position-relative">
                                            <img className="card-img" src="/images/blog/4by3/12.jpg" alt="Card image" />
                                            <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                {/* Card overlay bottom */}
                                                <div className="w-100 mt-auto">
                                                    {/* Card category */}
                                                    <a href="#" className="badge bg-primary mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Sports</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 pt-3">
                                            <h4 className="card-title"><a href="post-single-2.html" className="btn-link text-reset fw-bold">Around the web: 20 fabulous infographics about business</a></h4>
                                            <p className="card-text">Projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but.</p>
                                            {/* Card info */}
                                            <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                <li className="nav-item">
                                                    <div className="nav-link">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <div className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="/images/avatar/04.jpg" alt="avatar" />
                                                            </div>
                                                            <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Billy</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">Dec 29, 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Card item END */}
                                {/* Card item START */}
                                <div className="col-sm-6">
                                    <div className="card">
                                        {/* Card img */}
                                        <div className="position-relative">
                                            <img className="card-img" src="/images/blog/4by3/13.jpg" alt="Card image" />
                                            <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                {/* Card overlay Top */}
                                                <div className="w-100 mb-auto d-flex justify-content-end">
                                                    <div className="text-end ms-auto">
                                                        {/* Card format icon */}
                                                        <div className="icon-md bg-white bg-opacity-10 bg-blur text-white rounded-circle" title="This post has audio"><i className="fas fa-volume-up"></i></div>
                                                    </div>
                                                </div>
                                                {/* Card overlay bottom */}
                                                <div className="w-100 mt-auto">
                                                    {/* Card category */}
                                                    <a href="#" className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 pt-3">
                                            <h4 className="card-title"><a href="post-single-2.html" className="btn-link text-reset fw-bold">7 common mistakes everyone makes while traveling</a></h4>
                                            <p className="card-text">Drawings offended yet answered Jennings perceive laughing six did far. Rooms oh fully taken by worse do. Points afraid but may end law lasted. </p>
                                            {/* Card info */}
                                            <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                <li className="nav-item">
                                                    <div className="nav-link">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <div className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="/images/avatar/05.jpg" alt="avatar" />
                                                            </div>
                                                            <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Jacqueline</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">Nov 11, 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Card item END */}
                                {/* Card item START */}
                                <div className="col-sm-6">
                                    <div className="card">
                                        {/* Card img */}
                                        <div className="position-relative">
                                            <img className="card-img" src="/images/blog/4by3/14.jpg" alt="Card image" />
                                            <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                                                {/* Card overlay bottom */}
                                                <div className="w-100 mt-auto">
                                                    {/* Card category */}
                                                    <a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Photography</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body px-0 pt-3">
                                            <h4 className="card-title"><a href="post-single-2.html" className="btn-link text-reset fw-bold">5 investment doubts you should clarify</a></h4>
                                            <p className="card-text">Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.</p>
                                            {/* Card info */}
                                            <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                                                <li className="nav-item">
                                                    <div className="nav-link">
                                                        <div className="d-flex align-items-center position-relative">
                                                            <div className="avatar avatar-xs">
                                                                <img className="avatar-img rounded-circle" src="/images/avatar/06.jpg" alt="avatar" />
                                                            </div>
                                                            <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Carolyn</a></span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">Sep 01, 2022</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Card item END */}
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