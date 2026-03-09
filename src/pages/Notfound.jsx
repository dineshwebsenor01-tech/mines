import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
    return (
        <>
            <main className="container my-5">
                <div className="row min-vh-100 align-items-center">
                    <div className="col-12">
                        <div className="text-center">
                            {/* 404 Illustration */}
                            <div className="position-relative mb-5">
                                <h1 className="display-1 fw-bold text-secondary" style={{ fontSize: "8rem", opacity: "0.1" }}>404</h1>
                                <div className="position-absolute top-50 start-50 translate-middle w-100">
                                    <i className="bi bi-exclamation-triangle-fill text-warning fs-1 mb-3"></i>
                                    <h2 className="display-4 fw-light mb-3">Page Not Found</h2>
                                    <p className="lead text-secondary col-lg-6 mx-auto">
                                        The page you're looking for doesn't exist or has been moved.
                                    </p>
                                </div>
                            </div>

                            {/* Illustration */}
                            <div className="mb-5">
                                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6c757d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 8V12" stroke="#6c757d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 16H12.01" stroke="#6c757d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>

                            {/* Navigation Options */}
                            <div className="row g-4 mb-5">
                                <div className="col-md-3">
                                    <div className="bg-white p-4 shadow-sm h-100">
                                        <i className="bi bi-house-door fs-1 text-secondary mb-3"></i>
                                        <h5 className="fw-normal">Go Home</h5>
                                        <p className="small text-secondary">Return to our homepage</p>
                                        <Link to="/" className="btn btn-outline-secondary rounded-0 w-100">Home</Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="bg-white p-4 shadow-sm h-100">
                                        <i className="bi bi-box-seam fs-1 text-secondary mb-3"></i>
                                        <h5 className="fw-normal">Our Products</h5>
                                        <p className="small text-secondary">Explore stone varieties</p>
                                        <Link to="/products" className="btn btn-outline-secondary rounded-0 w-100">Products</Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="bg-white p-4 shadow-sm h-100">
                                        <i className="bi bi-newspaper fs-1 text-secondary mb-3"></i>
                                        <h5 className="fw-normal">Read Blog</h5>
                                        <p className="small text-secondary">Latest insights</p>
                                        <Link to="/blogs" className="btn btn-outline-secondary rounded-0 w-100">Blogs</Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="bg-white p-4 shadow-sm h-100">
                                        <i className="bi bi-telephone fs-1 text-secondary mb-3"></i>
                                        <h5 className="fw-normal">Contact Us</h5>
                                        <p className="small text-secondary">Get in touch</p>
                                        <Link to="/contact" className="btn btn-outline-secondary rounded-0 w-100">Contact</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Search Suggestion */}
                            <div className="bg-white p-4 shadow-sm col-lg-6 mx-auto">
                                <h5 className="fw-light mb-3">Looking for something specific?</h5>
                                <p className="small text-secondary mb-3">
                                    Try searching our site or contact us directly for help finding what you need.
                                </p>
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        className="form-control rounded-0 border-secondary" 
                                        placeholder="Search our site..."
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                window.location.href = `/search?q=${e.target.value}`;
                                            }
                                        }}
                                    />
                                    <button className="btn btn-outline-secondary rounded-0" type="button">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Help Links */}
                            <div className="mt-5">
                                <p className="small text-secondary">
                                    <i className="bi bi-info-circle me-2"></i>
                                    Need immediate assistance? 
                                    <a href="tel:+919461343431" className="text-secondary text-decoration-none ms-2">
                                        <i className="bi bi-telephone me-1"></i>+91 94613 43431
                                    </a>
                                    <span className="mx-2">|</span>
                                    <a href="mailto:blocks@shubhenterprises.co.in" className="text-secondary text-decoration-none">
                                        <i className="bi bi-envelope me-1"></i>blocks@shubhenterprises.co.in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Notfound;