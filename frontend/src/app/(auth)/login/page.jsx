import React from 'react'

const Login = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                        <div className="p-4 p-sm-5 bg-primary bg-opacity-10 rounded">
                            <h2>Log in to your account</h2>
                            {/* Form START */}
                            <form className="mt-4">
                                {/* Email */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="E-mail" />
                                </div>
                                {/* Password */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*********" />
                                </div>
                                {/* Checkbox */}
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">keep me signed in</label>
                                </div>
                                {/* Button */}
                                <div className="row align-items-center">
                                    <div className="col-sm-4">
                                        <button type="submit" className="btn btn-success">Sign me in</button>
                                    </div>
                                    <div className="col-sm-8 text-sm-end">
                                        <span>Don't have an account? <a href="signup.html"><u>Sign up</u></a></span>
                                    </div>
                                </div>
                            </form>
                            {/* Form END */}
                            <hr />
                            {/* Social-media btn */}
                            <div className="text-center">
                                <p>Sign in with your social network for quick access</p>
                                <ul className="list-unstyled d-sm-flex mt-3 justify-content-center">
                                    <li className="mx-2">
                                        <a href="#" className="btn bg-facebook d-inline-block"><i className="fab fa-facebook-f me-2"></i> Sign in with Facebook</a>
                                    </li>
                                    <li className="mx-2">
                                        <a href="#" className="btn bg-google d-inline-block"><i className="fab fa-google me-2"></i> Sign in with google</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login