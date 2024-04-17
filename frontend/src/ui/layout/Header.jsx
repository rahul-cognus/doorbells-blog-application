"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import useTheme from '@/hooks/useTheme';
import { websiteURL } from '@/constant/constant';
import { gql, useQuery } from '@apollo/client';


// CSS Plugin
import "@/public/vendor/bootstrap-icons/bootstrap-icons.css"
import "@/public/vendor/font-awesome/css/all.min.css"
import "@/public/vendor/tiny-slider/tiny-slider.css"
import "@/public/vendor/plyr/plyr.css"



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
const Header = () => {

	// const [isChecked, setIsChecked] = useState(false);
	// const handleCheckboxChange = (event) => {
	// 	setIsChecked(event.target.value);
	// };
	const [isChecked, setIsChecked] = useState('font-default');

	const handleCheckboxChange = (event) => {
		const doc = document.documentElement;
		const idZ = event.target.id;

		if (idZ === 'font-sm') {
			doc.classList.remove('font-lg');
			doc.classList.add('font-sm');
		} else if (idZ === 'font-default') {
			doc.classList.remove('font-sm', 'font-lg');
		} else if (idZ === 'font-lg') {
			doc.classList.remove('font-sm');
			doc.classList.add('font-lg');
		}
		setIsChecked(idZ);
	};

	useEffect(() => {
		const radios = document.querySelectorAll('input[type=radio][name="fntradio"]');
		radios.forEach(radio => {
			radio.addEventListener("change", handleCheckboxChange);
		});

		return () => {
			radios.forEach(radio => {
				radio.removeEventListener("change", handleCheckboxChange);
			});
		};
	}, []);



	// Change Theme
	const { theme, toggleTheme } = useTheme(); // Use the custom hook

	useEffect(() => {
		document.documentElement.setAttribute('data-bs-theme', theme);
	}, [theme]);

	const { loading, error, data } = useQuery(GET_CATEGORIES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<>
			<header className="navbar-light navbar-sticky header-static">
				<div className="navbar-top d-none d-lg-block small">
					<div className="container">
						<div className="d-md-flex justify-content-between align-items-center my-2">
							{/* Top bar left */}
							<ul className="nav">
								<li className="nav-item">
									<Link className="nav-link ps-0" href="/about">About</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" href="#">Forum</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" href="https://themes.getbootstrap.com/store/webestica/">Buy now!</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" href="/login">Login / Join</Link>
								</li>
							</ul>
							{/* Top bar right */}
							<div className="d-flex align-items-center">
								{/* Font size accessibility START */}
								<div className="btn-group me-3" role="group" aria-label="font size changer">
									<input type="radio" className="btn-check" name="fntradio" id="font-sm" checked={isChecked === 'font-sm'} onChange={handleCheckboxChange} />
									<label className="btn btn-xs btn-outline-primary mb-0" htmlFor="font-sm">A-</label>

									<input type="radio" className="btn-check" name="fntradio" id="font-default" checked={isChecked === 'font-default'} onChange={handleCheckboxChange} />
									<label className="btn btn-xs btn-outline-primary mb-0" htmlFor="font-default">A</label>

									<input type="radio" className="btn-check" name="fntradio" id="font-lg" checked={isChecked === 'font-lg'} onChange={handleCheckboxChange} />
									<label className="btn btn-xs btn-outline-primary mb-0" htmlFor="font-lg">A+</label>
								</div>

								{/* Dark mode options START */}
								<div className="nav-item dropdown mx-2">
									{/* Switch button */}
									<button className="modeswitch" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
										<svg className="theme-icon-active"><use href="#"></use></svg>
									</button>
									{/* Dropdown items */}
									<ul className="dropdown-menu min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
										<li className="mb-1">
											<button type="button" className={`dropdown-item d-flex align-items-center ${theme === 'light' ? 'active' : ''}`} data-bs-theme-value="light" onClick={() => toggleTheme('light')}>
												<svg width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill fa-fw mode-switch me-1" viewBox="0 0 16 16">
													<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
													<use href="#"></use>
												</svg>Light
											</button>
										</li>
										<li className="mb-1">
											<button type="button" className={`dropdown-item d-flex align-items-center ${theme === 'dark' ? 'active' : ''}`} data-bs-theme-value="dark" onClick={() => toggleTheme('dark')}>
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill fa-fw mode-switch me-1" viewBox="0 0 16 16">
													<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
													<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
													<use href="#"></use>
												</svg>Dark
											</button>
										</li>
										<li>
											<button type="button" className={`dropdown-item d-flex align-items-center ${theme === 'auto' ? 'active' : ''}`} data-bs-theme-value="auto" onClick={() => toggleTheme('auto')}>
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-half fa-fw mode-switch me-1" viewBox="0 0 16 16">
													<path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
													<use href="#"></use>
												</svg>Auto
											</button>
										</li>
									</ul>
								</div>
								{/* Dark mode options END */}

								<ul className="nav">
									<li className="nav-item">
										<Link className="nav-link px-2 fs-5" href="#"><i className="fab fa-facebook-square"></i></Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link px-2 fs-5" href="#"><i className="fab fa-twitter-square"></i></Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link px-2 fs-5" href="#"><i className="fab fa-linkedin"></i></Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link px-2 fs-5" href="#"><i className="fab fa-youtube-square"></i></Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link ps-2 pe-0 fs-5" href="#"><i className="fab fa-vimeo"></i></Link>
									</li>
								</ul>
							</div>
						</div>
						{/* Divider */}
						<div className="border-bottom border-2 border-primary opacity-1"></div>
					</div>
				</div>

				{/* Logo Nav START */}
				<nav className="navbar navbar-expand-lg">
					<div className="container">
						{/* Logo START */}
						<a className="navbar-brand" href="/">
							<Image className="navbar-brand-item light-mode-item" src={'/images/logo.svg'} alt="logo" width={139} height={30} />
							<Image className="navbar-brand-item dark-mode-item" src={'/images/logo-light.svg'} alt="logo" width={139} height={30} />
						</a>
						{/* Logo END */}

						{/* Responsive navbar toggler */}
						<button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="text-body h6 d-none d-sm-inline-block">Menu</span>
							<span className="navbar-toggler-icon"></span>
						</button>

						{/* Main navbar START */}
						<div className="collapse navbar-collapse" id="navbarCollapse">
							<ul className="navbar-nav navbar-nav-scroll mx-auto">

								{/* Nav item 1 Demos */}
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle active" href="#" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
									<ul className="dropdown-menu" aria-labelledby="homeMenu">
										<li> <Link className="dropdown-item active" href="index-2.html">Home default</Link></li>
										<li> <Link className="dropdown-item" href="index-lazy.html">Home lazy load</Link></li>
										<li> <Link className="dropdown-item" href="index-3.html">Magazine classic</Link></li>
										<li> <Link className="dropdown-item" href="index-4.html">Magazine</Link></li>
										<li> <Link className="dropdown-item" href="index-5.html">Home cards</Link></li>
										<li> <Link className="dropdown-item" href="index-6.html">Blog classic</Link></li>
										<li> <Link className="dropdown-item" href="index-7.html">Blog Personal </Link></li>
										<li> <Link className="dropdown-item" href="index-8.html">Blog Vintage</Link></li>
										<li> <Link className="dropdown-item" href="index-9.html">Blog Tech</Link></li>
										<li> <Link className="dropdown-item" href="index-10.html">Blog Fashion</Link></li>
										<li> <Link className="dropdown-item" href="index-11.html">Blog Podcast</Link></li>
										<li> <Link className="dropdown-item" href="index-12.html">Home Shop </Link></li>
									</ul>
								</li>

								{/* Nav item 2 Pages */}
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
									<ul className="dropdown-menu" aria-labelledby="pagesMenu">
										<li> <a className="dropdown-item" href="/about">About</a></li>
										<li> <a className="dropdown-item" href="/contact">Contact</a></li>
										{/* Dropdown submenu */}
										<li className="dropdown-submenu dropend">
											<a className="dropdown-item dropdown-toggle" href="#">Shop</a>
											<ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
												<li> <Link className="dropdown-item" href="shop-grid.html">Shop grid</Link> </li>
												<li> <Link className="dropdown-item" href="shop-detail.html">Shop detail</Link> </li>
												<li> <Link className="dropdown-item" href="checkout.html">Checkout</Link> </li>
												<li> <Link className="dropdown-item" href="my-cart.html">Cart</Link> </li>
												<li> <Link className="dropdown-item" href="empty-cart.html">Empty Cart</Link> </li>
											</ul>
										</li>
										{/* Dropdown submenu */}
										<li className="dropdown-submenu dropend">
											<a className="dropdown-item dropdown-toggle" href="#">Other Archives</a>
											<ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
												<li> <Link className="dropdown-item" href="author.html">Author Page</Link> </li>
												<li> <Link className="dropdown-item" href="categories.html">Category page 1</Link> </li>
												<li> <Link className="dropdown-item" href="categories-2.html">Category page 2</Link> </li>
												<li> <Link className="dropdown-item" href="tag.html"># tag</Link> </li>
												<li> <Link className="dropdown-item" href="search-result.html">Search result</Link> </li>
											</ul>
										</li>
										<li> <a className="dropdown-item" href="404.html">Error 404</a></li>
										<li> <a className="dropdown-item" href="/login">signin</a></li>
										<li> <a className="dropdown-item" href="signup.html">signup</a></li>
										<li> <a className="dropdown-item" href="offline.html">offline</a></li>
										{/* Dropdown submenu levels */}
										<li className="dropdown-divider"></li>
										<li className="dropdown-submenu dropend">
											<a className="dropdown-item dropdown-toggle" href="#">Dropdown levels</a>
											<ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
												{/* dropdown submenu open right */}
												<li className="dropdown-submenu dropend">
													<a className="dropdown-item dropdown-toggle" href="#">Dropdown (end)</a>
													<ul className="dropdown-menu" data-bs-popper="none">
														<li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
														<li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
													</ul>
												</li>
												<li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
												{/* dropdown submenu open left */}
												<li className="dropdown-submenu dropstart">
													<a className="dropdown-item dropdown-toggle" href="#">Dropdown (start)</a>
													<ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
														<li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
														<li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
													</ul>
												</li>
												<li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
											</ul>
										</li>
										<li className="dropdown-divider"></li>
										<li>
											<a className="dropdown-item" href="https://support.webestica.com/" target="_blank">
												<i className="text-warning fa-fw bi bi-life-preserver me-2"></i>Support
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="docs/index.html" target="_blank">
												<i className="text-danger fa-fw bi bi-card-text me-2"></i>Documentation
											</a>
										</li>
										<li className="dropdown-divider"></li>
										<li>
											<a className="dropdown-item" href="rtl/index.html" target="_blank">
												<i className="text-info fa-fw bi bi-toggle-off me-2"></i>RTL demo
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
												<i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy blogzine!
											</a>
										</li>
									</ul>
								</li>
								{/* Category */}
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</a>
									<ul className="dropdown-menu" aria-labelledby="pagesMenu">
										{
											data.getAllCategories.map((category, index) => (
												<li> <Link key={index} className="dropdown-item" href={category.slug}>{category.name}</Link></li>
											))
										}

									</ul>
								</li>

								{/* Nav item 3 Post */}
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Post</a>
									<ul className="dropdown-menu" aria-labelledby="postMenu">
										{/* dropdown submenu */}
										<li className="dropdown-submenu dropend">
											<a className="dropdown-item dropdown-toggle" href="#">Post grid</a>
											<ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
												<li> <a className="dropdown-item" href="post-grid.html">Post grid</a> </li>
												<li> <a className="dropdown-item" href="post-grid-4-col.html">Post grid 4 col</a> </li>
												<li> <a className="dropdown-item" href="post-grid-masonry.html">Post grid masonry</a> </li>
												<li> <a className="dropdown-item" href="post-grid-masonry-filter.html">Post grid masonry filter</a> </li>
												<li> <a className="dropdown-item" href="post-large-and-grid.html">Post mixed large than grid</a> </li>
											</ul>
										</li>
										<li> <a className="dropdown-item" href="post-list.html">Post list</a> </li>
										<li> <a className="dropdown-item" href="post-list-2.html">Post list 2</a> </li>
										<li> <a className="dropdown-item" href="post-cards.html">Post card</a> </li>
										<li> <a className="dropdown-item" href="post-overlay.html">Post Overlay</a> </li>
										<li> <a className="dropdown-item" href="post-types.html">Post types</a> </li>
										<li className="dropdown-divider"></li>
										<li> <a className="dropdown-item" href="post-single.html">Post single magazine</a> </li>
										<li> <a className="dropdown-item" href="post-single-2.html">Post single classic</a> </li>
										<li> <a className="dropdown-item" href="post-single-3.html">Post single minimal</a> </li>
										<li> <a className="dropdown-item" href="post-single-4.html">Post single card</a> </li>
										<li> <a className="dropdown-item" href="post-single-5.html">Post single review</a> </li>
										<li> <a className="dropdown-item" href="post-single-6.html">Post single video</a> </li>
										<li> <a className="dropdown-item" href="podcast-single.html">Podcast single</a> </li>
										<li className="dropdown-divider"></li>
										<li> <a className="dropdown-item" href="pagination-styles.html">Pagination styles</a> </li>
									</ul>
								</li>

								{/* Nav item 4 Mega menu */}
								<li className="nav-item dropdown dropdown-fullwidth">
									<a className="nav-link dropdown-toggle" href="#" id="megaMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Lifestyle</a>
									<div className="dropdown-menu" aria-labelledby="megaMenu">
										<div className="container">
											<div className="row g-4 p-3 flex-fill">
												{/* Card item START */}
												<div className="col-sm-6 col-lg-3">
													<div className="card bg-transparent">
														{/* Card img */}
														<Image className="card-img rounded" src={'/images/blog/16by9/small/01.jpg'} alt="Card image" width={261} height={147} />
														<div className="card-body px-0 pt-3">
															<h6 className="card-title mb-0"><Link href={'/'} className="btn-link text-reset fw-bold">7 common mistakes everyone makes while traveling</Link></h6>
															{/* Card info */}
															<ul className="nav nav-divider align-items-center text-uppercase small mt-2">
																<li className="nav-item">
																	<Link href={'/'} className="text-reset btn-link">Joan Wallace</Link>
																</li>
																<li className="nav-item">Feb 18, 2022</li>
															</ul>
														</div>
													</div>
												</div>
												{/* Card item END */}
												{/* Card item START */}
												<div className="col-sm-6 col-lg-3">
													<div className="card bg-transparent">
														{/* Card img */}
														<Image className="card-img rounded" src={'/images/blog/16by9/small/02.jpg'} alt="Card image" width={261} height={147} />
														<div className="card-body px-0 pt-3">
															<h6 className="card-title mb-0"><Link href={'/'} className="btn-link text-reset fw-bold">12 worst types of business accounts you follow on Twitter</Link></h6>
															{/* Card info */}
															<ul className="nav nav-divider align-items-center text-uppercase small mt-2">
																<li className="nav-item">
																	<Link href={'/'} className="text-reset btn-link">Lori Stevens</Link>
																</li>
																<li className="nav-item">Jun 03, 2022</li>
															</ul>
														</div>
													</div>
												</div>
												{/* Card item END */}
												{/* Card item START */}
												<div className="col-sm-6 col-lg-3">
													<div className="card bg-transparent">
														{/* Card img */}
														<Image className="card-img rounded" src={'/images/blog/16by9/small/03.jpg'} alt="Card image" width={261} height={147} />
														<div className="card-body px-0 pt-3">
															<h6 className="card-title mb-0"><Link href={'/'} className="btn-link text-reset fw-bold">Skills that you can learn from business</Link></h6>
															{/* Card info */}
															<ul className="nav nav-divider align-items-center text-uppercase small mt-2">
																<li className="nav-item">
																	<Link href={'/'} className="text-reset btn-link">Judy Nguyen</Link>
																</li>
																<li className="nav-item">Sep 07, 2022</li>
															</ul>
														</div>
													</div>
												</div>
												{/* Card item END */}
												{/* Card item START */}
												<div className="col-sm-6 col-lg-3">
													<div className="bg-primary bg-opacity-10 p-4 text-center h-100 w-100 rounded">
														<span>The Blogzine</span>
														<h3>Premium Membership</h3>
														<p>Become a Member Today!</p>
														<Link href={'/'} className="btn btn-warning">View pricing plans</Link>
													</div>
												</div>
												{/* Card item END */}
											</div> {/* Row END */}
											{/* Trending tags */}
											<div className="row px-3">
												<div className="col-12">
													<ul className="list-inline mt-3">
														<li className="list-inline-item">Trending tags:</li>
														<li className="list-inline-item"><Link href={'/'} className="btn btn-sm btn-primary-soft">Travel</Link></li>
														<li className="list-inline-item"><Link href={'/'} className="btn btn-sm btn-warning-soft">Business</Link></li>
														<li className="list-inline-item"><Link href={'/'} className="btn btn-sm btn-success-soft">Tech</Link></li>
														<li className="list-inline-item"><Link href={'/'} className="btn btn-sm btn-danger-soft">Gadgets</Link></li>
														<li className="list-inline-item"><Link href={'/'} className="btn btn-sm btn-info-soft">Lifestyle</Link></li>
														<li className="list-inline-item"><Link href={'/'} className="btn btn-sm btn-primary-soft">Vaccine</Link></li>
														<li className="list-inline-item"><Link href={'/'} className="btn btn-sm btn-success-soft">Sports</Link></li>
														<li className="list-inline-item"><Link href={'/'} className="btn btn-sm btn-danger-soft">Covid-19</Link></li>
														<li className="list-inline-item"><Link href={'/'} className="btn btn-sm btn-info-soft">Politics</Link></li>
													</ul>
												</div>
											</div> {/* Row END */}
										</div>
									</div>
								</li>
							</ul>
						</div>
						{/* Main navbar END */}

						{/* Nav right START */}
						<div className="nav flex-nowrap align-items-center">
							{/* Nav Button */}
							<div className="nav-item d-none d-md-block">
								<Link href={'/'} className="btn btn-sm btn-danger mb-0 mx-2">Subscribe!</Link>
							</div>
							{/* Nav Search */}
							<div className="nav-item dropdown dropdown-toggle-icon-none nav-search">
								<a className="nav-link dropdown-toggle" role="button" href="#" id="navSearch" data-bs-toggle="dropdown" aria-expanded="false">
									<i className="bi bi-search fs-4"> </i>
								</a>
								<div className="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch">
									<form className="input-group">
										<input className="form-control border-success" type="search" placeholder="Search" aria-label="Search" />
										<button className="btn btn-success m-0" type="submit">Search</button>
									</form>
								</div>
							</div>
							{/* Offcanvas menu toggler */}
							<div className="nav-item">
								<a className="nav-link p-0" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
									<i className="bi bi-text-right rtl-flip fs-2" data-bs-target="#offcanvasMenu"> </i>
								</a>
							</div>
						</div>
						{/* Nav right END */}
					</div>
				</nav>
				{/* Logo Nav END */}
			</header>
		</>
	)
}

export default Header