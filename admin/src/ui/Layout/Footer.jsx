import React from 'react'

const Footer = () => {
    return (
        <footer class="mb-3">
            <div class="container">
                <div class="card card-body bg-light">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-lg-6">
                            {/* Copyright */}
                            <div class="text-center text-lg-start">©2023 <a href="https://www.webestica.com/" class="text-reset btn-link" target="_blank">Webestica</a>. All rights reserved
                            </div>
                        </div>
                        <div class="col-lg-6 d-sm-flex align-items-center justify-content-center justify-content-lg-end">
                            {/* Links */}
                            <ul class="nav text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
                                <li class="nav-item"><a class="nav-link" href="#">Terms</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
                                <li class="nav-item"><a class="nav-link pe-0" href="#">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer