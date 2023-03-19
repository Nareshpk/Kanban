import React from 'react'
// import './login.css'

function Loggin() {
    return (
        <>
            <div class="auth-fluid">
                <div class="auth-fluid-form-box">
                    <div class="card-body d-flex flex-column h-100 gap-3">

                        <div class="auth-brand text-center text-lg-center">

                            <a href="index.html" class="logo-dark">
                                <span><img src="images/yozy-logo.png" alt="dark logo" height="22"/></span>
                            </a>
                            <a href="index.html" class="logo-light">
                                <span><img src="" alt="logo" height="22"/></span>
                                <span><img src="images/devozy-logo.png" class="devozy-brand" alt="devozy logo"/></span>
                                <span class="devozy-tagline">Next gen DevOps Accelerator platform. The way forward</span>
                            </a>
                        </div>

                        <div class="my-auto">
                            <h4 class="mt-0">Sign In</h4>
                            <p class="text-muted mb-4">Enter your email address and password to access account.</p>

                            <form action="#" class="theme-form">
                                <div class="mb-3">
                                    <label for="emailaddress" class="form-label">Email address</label>
                                    <input class="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email"/>
                                </div>
                                <div class="mb-3">
                                    <a href="pages-recover.html" class="text-muted float-end"><small>Forgot your password?</small></a>
                                    <label for="password" class="form-label">Password</label>
                                    <input class="form-control" type="password" required="" id="password" placeholder="Enter your password"/>
                                </div>
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="checkbox-signin"/>
                                            <label class="form-check-label" for="checkbox-signin">Remember me</label>
                                    </div>
                                </div>
                                <div class="d-grid mb-0 text-center">
                                    <button class="btn btn-primary" type="submit"><i class="mdi mdi-login"></i> Log In </button>
                                </div>
                                <div class="text-center mt-4">
                                    <p class="text-muted font-16">Sign in with</p>
                                    <ul class="social-list list-inline mt-3">
                                        <li class="list-inline-item">
                                            <a href="javascript: void(0);" class="social-list-item border-primary text-primary"><i class="mdi mdi-facebook"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="javascript: void(0);" class="social-list-item border-danger text-danger"><i class="mdi mdi-google"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="javascript: void(0);" class="social-list-item border-info text-info"><i class="mdi mdi-twitter"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i class="mdi mdi-github"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>

                        <footer class="footer footer-alt">
                            <p class="text-muted">Don't have an account? <a href="registraion.html" class="text-muted ms-1"><b>Sign Up</b></a></p>
                        </footer>

                    </div>
                </div>
                <div class="auth-fluid-right text-center">
                    <div class="auth-user-testimonial">
                        <h2 class="mb-2">Next gen DevOps Accelerator platform</h2>
                        <p class="lead"><i class="mdi mdi-format-quote-open"></i> The way forward <i class="mdi mdi-format-quote-close"></i>
                        </p>
                        <p class="lead"><i class="mdi mdi-format-quote-open"></i> Welcome to the Next Generation DevOps Accelerator Platform. Please log in to access our powerful tools and features designed to help you streamline and optimize your software development and deployment processes. <i class="mdi mdi-format-quote-close"></i>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Loggin
