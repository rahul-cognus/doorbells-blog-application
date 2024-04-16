import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark pt-5">
            <div className="container">
                {/* About and Newsletter START */}
                <div className="row pt-3 pb-4">
                    <div className="col-md-3">
                        <img src="/images/logo-footer.svg" alt="footer logo" />
                    </div>
                    <div className="col-md-5">
                        <p className="text-body-secondary">The next-generation blog, news, and magazine theme for you to start sharing your stories today! This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.</p>
                    </div>
                    <div className="col-md-4">
                        {/* Form */}
                        <form className="row row-cols-lg-auto g-2 align-items-center justify-content-end">
                            <div className="col-12">
                                <input type="email" className="form-control" placeholder="Enter your email address" />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary m-0">Subscribe</button>
                            </div>
                            <div className="form-text mt-2">By subscribing you agree to our
                                <a href="#" className="text-decoration-underline text-reset">Privacy Policy</a>
                            </div>
                        </form>
                    </div>
                </div>
                {/* About and Newsletter END */}

                {/* Divider */}
                <hr />

                {/* Widgets START */}
                <div className="row pt-5">
                    {/* Footer Widget */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <h5 className="mb-4 text-white">Recent post</h5>
                        {/* Item */}
                        <div className="mb-4 position-relative">
                            <div><a href="#" className="badge text-bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Business</a></div>
                            <a href="post-single-3.html" className="btn-link text-white fw-normal">Up-coming business bloggers, you need to watch</a>
                            <ul className="nav nav-divider align-items-center small mt-2 text-body-secondary">
                                <li className="nav-item position-relative">
                                    <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Dennis</a>
                                    </div>
                                </li>
                                <li className="nav-item">Apr 06, 2022</li>
                            </ul>
                        </div>
                        {/* Item */}
                        <div className="mb-4 position-relative">
                            <div><a href="#" className="badge text-bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Marketing</a></div>
                            <a href="post-single-3.html" className="btn-link text-white fw-normal">How did we get here? The history of the business told through tweets</a>
                            <ul className="nav nav-divider align-items-center small mt-2 text-body-secondary">
                                <li className="nav-item position-relative">
                                    <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Larry</a>
                                    </div>
                                </li>
                                <li className="nav-item">May 29, 2022</li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Widget */}
                    <div className="col-md-6 col-lg-3 mb-4">
                        <h5 className="mb-4 text-white">Navigation</h5>
                        <div className="row">
                            <div className="col-6">
                                <ul className="nav flex-column text-primary-hover">
                                    <li className="nav-item"><a className="nav-link pt-0" href="#">Features</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Style Guide</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Get Theme</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Privacy Policy</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Newsletter</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="nav flex-column text-primary-hover">
                                    <li className="nav-item"><a className="nav-link pt-0" href="#">News</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Career <span className="badge text-bg-danger ms-2">2 Job</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Technology</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Startups</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Gadgets</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Inspiration</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Footer Widget */}
                    <div className="col-sm-6 col-lg-3 mb-4">
                        <h5 className="mb-4 text-white">Get Regular Updates</h5>
                        <ul className="nav flex-column text-primary-hover">
                            <li className="nav-item"><a className="nav-link pt-0" href="#"><i className="fab fa-whatsapp fa-fw me-2"></i>WhatsApp</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="fab fa-youtube fa-fw me-2"></i>YouTube</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="far fa-bell fa-fw me-2"></i>Website Notifications</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="far fa-envelope fa-fw me-2"></i>Newsletters</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-headphones-alt fa-fw me-2"></i>Podcasts</a></li>
                        </ul>
                    </div>

                    {/* Footer Widget */}
                    <div className="col-sm-6 col-lg-3 mb-4">
                        <h5 className="mb-4 text-white">Our mobile App</h5>
                        <p className="text-body-secondary">Download our App and get the latest Breaking News Alerts and latest headlines and daily articles near you.</p>
                        <div className="row g-2">
                            <div className="col">
                                <a href="#"><img className="w-100" src="/images/app-store.svg" alt="app-store" /></a>
                            </div>
                            <div className="col">
                                <a href="#"><img className="w-100" src="/images/google-play.svg" alt="google-play" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Widgets END */}

                {/* Hot topics START */}
                <div className="row">
                    <h5 className="mb-2 text-white">Hot topics</h5>
                    <ul className="list-inline text-primary-hover lh-lg">
                        <li className="list-inline-item"><a href="#">Covid-19</a></li>
                        <li className="list-inline-item"><a href="#">Politics</a></li>
                        <li className="list-inline-item"><a href="#">Entertainment</a></li>
                        <li className="list-inline-item"><a href="#">Media</a></li>
                        <li className="list-inline-item"><a href="#">Royalist</a></li>
                        <li className="list-inline-item"><a href="#">World</a></li>
                        <li className="list-inline-item"><a href="#">Half Full</a></li>
                        <li className="list-inline-item"><a href="#">Scouted</a></li>
                        <li className="list-inline-item"><a href="#">Travel</a></li>
                        <li className="list-inline-item"><a href="#">Beast Inside</a></li>
                        <li className="list-inline-item"><a href="#">Crossword</a></li>
                        <li className="list-inline-item"><a href="#">Newsletters</a></li>
                        <li className="list-inline-item"><a href="#">Podcasts</a></li>
                        <li className="list-inline-item"><a href="#">Auction 2022</a></li>
                        <li className="list-inline-item"><a href="#">Protests</a></li>
                        <li className="list-inline-item"><a href="#">NewsCyber</a></li>
                        <li className="list-inline-item"><a href="#">Education</a></li>
                        <li className="list-inline-item"><a href="#">Sports</a></li>
                        <li className="list-inline-item"><a href="#">Tech And Auto</a></li>
                        <li className="list-inline-item"><a href="#">Opinion</a></li>
                        <li className="list-inline-item"><a href="#">Share Market</a></li>
                    </ul>
                </div>
                {/* Hot topics END */}
            </div>

            {/* Footer copyright START */}
            <div className="bg-dark-overlay-3 mt-5">
                <div className="container">
                    <div className="row align-items-center justify-content-md-between py-4">
                        <div className="col-md-6">
                            {/* Copyright */}
                            <div className="text-center text-md-start text-primary-hover text-body-secondary">©2023 <a href="https://www.webestica.com/" className="text-reset btn-link" target="_blank">Webestica</a>. All rights reserved
                            </div>
                        </div>
                        <div className="col-md-6 d-sm-flex align-items-center justify-content-center justify-content-md-end">
                            {/* Language switcher */}
                            <div className="dropup me-0 me-sm-3 mt-3 mt-md-0 text-center text-sm-end">
                                <a className="dropdown-toggle text-primary-hover" href="#" role="button" id="languageSwitcher" data-bs-toggle="dropdown" aria-expanded="false">
                                    English Edition
                                </a>
                                <ul className="dropdown-menu min-w-auto" aria-labelledby="languageSwitcher">
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><a className="dropdown-item" href="#">German </a></li>
                                    <li><a className="dropdown-item" href="#">French</a></li>
                                </ul>
                            </div>
                            {/* Links */}
                            <ul className="nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
                                <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Privacy</a></li>
                                <li className="nav-item"><a className="nav-link pe-0" href="#">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer copyright END */}
        </footer>
    )
}

export default Footer