import React from "react";

function Contact() {
    return (
        <main className="container my-5">
            {/* Page Header */}
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <h1 className="display-5 fw-light border-bottom pb-3 d-inline-block">Get in touch with us</h1>
                    <p className="mt-3 col-lg-7 mx-auto">Visit our mine office, call us, or reach out through any of our contact channels.</p>
                </div>
            </div>

            {/* Map and Contact Info Section */}
            <div id="contact" className="row g-4" style={{ scrollMarginTop: "4rem" }}>
                {/* Map Column */}
                <div className="col-md-6">
                    <div className="bg-white shadow-sm h-100 p-3 p-lg-4">
                        <h5 className="fw-light border-bottom pb-2 mb-3">Our location — Mathata, Udaipur</h5>
                        <div className="ratio ratio-4x3">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.896005103987!2d73.62412331500001!3d24.585207784196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967c5b2f4b8b9f1%3A0x6f5c5f5c5f5c5f5c!2sKherwara%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Shubh Enterprises Location"
                            ></iframe>
                        </div>
                        <div className="mt-3 small text-secondary">
                            <i className="bi bi-geo-alt-fill me-1"></i> 
                            Kherwara tehsil, Mathata, Udaipur, RJ 313201
                            <br />
                            <i className="bi bi-telephone me-1"></i> 
                            <a href="tel:+919461343431" className="text-decoration-none text-secondary">+91 94613 43431</a> · 
                            <a href="tel:+9190015488766" className="text-decoration-none text-secondary ms-1">+91 90015 488766</a>
                        </div>
                    </div>
                </div>

                {/* Company Contact Information Column */}
                <div className="col-md-6">
                    <div className="bg-white p-4 p-lg-5 shadow-sm h-100">
                        <h5 className="fw-light border-bottom pb-2 mb-4">Company Information</h5>
                        
                        {/* Office Address */}
                        <div className="d-flex mb-4">
                            <div className="me-3">
                                <i className="bi bi-building fs-3 text-secondary"></i>
                            </div>
                            <div>
                                <h6 className="fw-medium mb-1">Head Office & Quarry</h6>
                                <p className="small text-secondary mb-0">
                                    Shubh Enterprises<br />
                                    Kherwara tehsil, Mathata<br />
                                    Udaipur District, Rajasthan 313201<br />
                                    India
                                </p>
                            </div>
                        </div>

                        {/* Contact Numbers */}
                        <div className="d-flex mb-4">
                            <div className="me-3">
                                <i className="bi bi-telephone fs-3 text-secondary"></i>
                            </div>
                            <div>
                                <h6 className="fw-medium mb-1">Phone Numbers</h6>
                                <p className="small text-secondary mb-1">
                                    <strong>Sales:</strong> <a href="tel:+919461643431" className="text-decoration-none text-secondary">+91 94616 43431</a>
                                </p>
                                <p className="small text-secondary mb-1">
                                    <strong>Operations:</strong> <a href="tel:+919001788766" className="text-decoration-none text-secondary">+91 90017 88766</a>
                                </p>
                                <p className="small text-secondary mb-0">
                                    <strong>Emergency:</strong> <a href="tel:+919413318341" className="text-decoration-none text-secondary">+91 94133 18341</a>
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="d-flex mb-4">
                            <div className="me-3">
                                <i className="bi bi-envelope fs-3 text-secondary"></i>
                            </div>
                            <div>
                                <h6 className="fw-medium mb-1">Email Addresses</h6>
                                <p className="small text-secondary mb-0">
                                    <strong>Blocks:</strong> <a href="mailto:blocks@shubhenterprises.co.in" className="text-decoration-none text-secondary">blocks@shubhenterprises.co.in</a>
                                </p>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="d-flex">
                            <div className="me-3">
                                <i className="bi bi-clock fs-3 text-secondary"></i>
                            </div>
                            <div>
                                <h6 className="fw-medium mb-1">Office Hours</h6>
                                <p className="small text-secondary mb-1">
                                    <strong>Monday - Saturday:</strong> 9:00 AM – 6:00 PM
                                </p>
                                <p className="small text-secondary mb-1">
                                    <strong>Sunday:</strong> Closed (quarry operations off)
                                </p>
                                <p className="small text-secondary mb-0">
                                    <i className="bi bi-info-circle me-1"></i>
                                    24/7 emergency contact available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Additional Information Row */}
            <div className="row mt-5">
                <div className="col-12">
                    <div className="bg-white p-4 shadow-sm">
                        <h5 className="fw-light border-bottom pb-2 mb-3">Visit Our Mines</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="small text-secondary mb-2">
                                    <i className="bi bi-geo-alt-fill text-secondary me-2"></i>
                                    <strong>Main Quarry:</strong> Mathata Mines, Kherwara Road
                                </p>
                                <p className="small text-secondary mb-2">
                                    <i className="bi bi-geo-alt-fill text-secondary me-2"></i>
                                    <strong>Granite Unit:</strong> Kotda Extension, Udaipur
                                </p>
                                <p className="small text-secondary mb-2">
                                    <i className="bi bi-geo-alt-fill text-secondary me-2"></i>
                                    <strong>Marble Unit:</strong> Kotda Village
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className="small text-secondary mb-2">
                                    <i className="bi bi-truck text-secondary me-2"></i>
                                    <strong>Dispatch Office:</strong> Near Bus Stand, Mathata
                                </p>
                                <p className="small text-secondary mb-2">
                                    <i className="bi bi-person-badge text-secondary me-2"></i>
                                    <strong>Site Visits:</strong> Prior appointment required
                                </p>
                                <p className="small text-secondary mb-0">
                                    <i className="bi bi-shield-check text-secondary me-2"></i>
                                    <strong>Safety:</strong> Helmets and safety gear provided on site
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Contact;