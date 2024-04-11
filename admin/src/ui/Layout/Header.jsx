"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, [])
    return (
        <header className="navbar-light navbar-sticky header-static border-bottom navbar-dashboard">

            <nav className="navbar navbar-expand-xl">
                <div className="container">

                    <a className="navbar-brand me-3" href="index-2.html">
                        <Image className="navbar-brand-item light-mode-item" src="logo.svg" width={130} height={30} alt="logo" />
                        <Image className="navbar-brand-item dark-mode-item" src="logo-light.svg" width={130} height={30} alt="logo" />
                    </a>

                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="text-body h6 d-none d-sm-inline-block">Menu</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav navbar-nav-scroll mx-auto">


                            <li className="nav-item"><Link className="nav-link" href="/dashboard"><i className="bi bi-house-door me-1"></i>Dashboard</Link></li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/blog" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="bi bi-pencil me-1"></i>Blog</a>
                                <ul className="dropdown-menu" aria-labelledby="postMenu">

                                    <li> <Link className="dropdown-item" href="/blog">Blog List</Link> </li>
                                    <li> <Link className="dropdown-item" href="/blog/create">Create Blog</Link> </li>
                                    <li> <Link className="dropdown-item" href="/blog/edit">Edit Blog</Link> </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="bi bi-pencil me-1"></i>Category</a>
                                <ul className="dropdown-menu" aria-labelledby="postMenu">

                                    <li> <Link className="dropdown-item" href="dashboard-post-list.html">Category List</Link> </li>
                                    <li> <Link className="dropdown-item" href="dashboard-post-create.html">Create Category</Link> </li>
                                    <li> <Link className="dropdown-item" href="dashboard-post-edit.html">Edit Category</Link> </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="bi bi-pencil me-1"></i>Author</a>
                                <ul className="dropdown-menu" aria-labelledby="postMenu">

                                    <li> <Link className="dropdown-item" href="dashboard-post-list.html">Author List</Link> </li>
                                    <li> <Link className="dropdown-item" href="dashboard-post-create.html">Create Author</Link> </li>
                                    <li> <Link className="dropdown-item" href="dashboard-post-edit.html">Edit Author</Link> </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="bi bi-folder me-1"></i>Pages</a>
                                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                                    <li> <Link className="dropdown-item" href="dashboard-author-single.html">Author Single</Link></li>
                                    <li> <Link className="dropdown-item" href="dashboard-author-list.html">Author List</Link></li>
                                    <li> <Link className="dropdown-item" href="dashboard-edit-profile.html">Edit Profile</Link></li>
                                    <li> <Link className="dropdown-item" href="dashboard-reviews.html">Reviews</Link></li>
                                    <li> <Link className="dropdown-item" href="dashboard-settings.html">Settings</Link></li>
                                    <li className="dropdown-divider"></li>
                                    <li> <Link className="dropdown-item" href="https://support.webestica.com/" target="_blank"> <i className="text-warning fa-fw bi bi-life-preserver me-2"></i>Support</Link></li>
                                    <li> <Link className="dropdown-item" href="docs/index.html" target="_blank"> <i className="text-danger fa-fw bi bi-card-text me-2"></i>Documentation</Link></li>
                                    <li className="dropdown-divider"></li>
                                    <li><Link className="dropdown-item" href="rtl/index.html" target="_blank"> <i className="text-info fa-fw bi bi-toggle-off me-2"></i>RTL demo</Link></li>
                                    <li><Link className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank"> <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy blogzine!</Link> </li>
                                </ul>
                            </li>
                        </ul>


                        <div className="nav my-3 my-xl-0 px-4 px-lg-1 flex-nowrap align-items-center">
                            <div className="nav-item w-100">
                                <form className="position-relative">
                                    <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 "></i></button>
                                </form>
                            </div>
                        </div>

                    </div>



                    <div className="nav flex-nowrap align-items-center">


                        <div className="nav-item ms-2 ms-md-3 dropdown">

                            <a className="btn btn-primary-soft btn-round mb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                <i className="bi bi-bell fa-fw"></i>
                            </a>

                            <span className="notif-badge animation-blink"></span>


                            <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                                <div className="card bg-transparent">
                                    <div className="card-header bg-transparent border-bottom p-3 d-flex justify-content-between align-items-center">
                                        <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">2 new</span></h6>
                                        <a className="small" href="#">Clear all</a>
                                    </div>
                                    <div className="card-body p-0">
                                        <ul className="list-group list-unstyled list-group-flush">

                                            <li>
                                                <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                                                    <div className="me-3">
                                                        <div className="avatar avatar-sm">
                                                            <Image className="avatar-img rounded-circle" width={40} height={40} src="/avatar/08.jpg" alt="avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">12 new members joined</h6>
                                                        <span className="small"> <i className="bi bi-clock"></i> 3 min ago</span>
                                                    </div>
                                                </a>
                                            </li>


                                            <li>
                                                <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                                                    <div className="me-3">
                                                        <div className="avatar avatar-sm">
                                                            <Image className="avatar-img rounded-circle" width={40} height={40} src="/avatar/02.jpg" alt="avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">Larry Lawson deleted account</h6>
                                                        <span className="small"> <i className="bi bi-clock"></i> 6 min ago</span>
                                                    </div>
                                                </a>
                                            </li>


                                            <li>
                                                <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                                                    <div className="me-3">
                                                        <div className="avatar avatar-sm">
                                                            <Image className="avatar-img rounded-circle" width={40} height={40} src="/avatar/05.jpg" alt="avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">Byan commented on your post</h6>
                                                        <span className="small"> <i className="bi bi-clock"></i> 10 min ago</span>
                                                    </div>
                                                </a>
                                            </li>


                                            <li>
                                                <a href="#" className="list-group-item-action border-0 border-bottom d-flex p-3">
                                                    <div className="me-3">
                                                        <div className="avatar avatar-sm">
                                                            <Image className="avatar-img rounded-circle" width={40} height={40} src="/avatar/03.jpg" alt="avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">Settings updated</h6>
                                                        <span className="small"> <i className="bi bi-clock"></i> Yesterday</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-footer bg-transparent border-0 py-3 text-center position-relative">
                                        <a href="#" className="stretched-link">See all incoming activity</a>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="nav-item ms-2 ms-md-3 dropdown">

                            <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image className="avatar-img rounded-circle" width={40} height={40} src="/avatar/03.jpg" alt="avatar" />
                            </a>


                            <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">

                                <li className="px-3">
                                    <div className="d-flex align-items-center">

                                        <div className="avatar me-3">
                                            <Image className="avatar-img rounded-circle shadow" width={40} height={40} src="/avatar/03.jpg" alt="avatar" />
                                        </div>
                                        <div>
                                            <a className="h6 mt-2 mt-sm-0" href="#"> Louis Ferguson</a>
                                            <p className="small m-0">example@gmail.com</p>
                                        </div>
                                    </div>
                                    <hr />
                                </li>

                                <li><a className="dropdown-item" href="#"><i className="bi bi-person fa-fw me-2"></i>Edit Profile</a></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
                                <li className="dropdown-divider mb-2"></li>
                                <li>
                                    <div className="align-items-center text-center py-0">
                                        <span className="me-3">mode:</span>
                                        <div className="btn-group theme-icon-active" role="group" aria-label="Default button group">
                                            <button type="button" className="btn btn-light btn-sm mb-0" data-bs-theme-value="light">
                                                <svg width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill fa-fw mode-switch" viewBox="0 0 16 16">
                                                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                                    <use href="#"></use>
                                                </svg>
                                            </button>
                                            <button type="button" className="btn btn-light btn-sm mb-0" data-bs-theme-value="dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill fa-fw mode-switch" viewBox="0 0 16 16">
                                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                                                    <use href="#"></use>
                                                </svg>
                                            </button>
                                            <button type="button" className="btn btn-light btn-sm mb-0 active" data-bs-theme-value="auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                                                    <use href="#"></use>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>



                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header