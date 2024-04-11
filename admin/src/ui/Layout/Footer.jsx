import React from 'react'

const Footer = () => {
    return (
        <footer className="mb-3">
            <div className="container">
                <div className="card card-body bg-light">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            {/* Copyright */}
                            <div className="text-center text-lg-start">©2023 <a href="https://www.webestica.com/" className="text-reset btn-link" target="_blank">Webestica</a>. All rights reserved
                            </div>
                        </div>
                        <div className="col-lg-6 d-sm-flex align-items-center justify-content-center justify-content-lg-end">
                            {/* Links */}
                            <ul className="nav text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
                                <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Privacy</a></li>
                                <li className="nav-item"><a className="nav-link pe-0" href="#">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer