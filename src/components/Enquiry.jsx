

function Enquiry() {
    return (
        <div id="contact" className="container my-5" style={{ scrollMarginTop: "3rem" }}>
            <div className="bg-white p-5 shadow-sm">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="fw-light border-bottom pb-2 d-inline-block">Reach us</h4>
                        <ul className="list-unstyled mt-4 small">
                            <li className="mb-3"><i className="bi bi-geo-alt me-3 fs-5 align-middle"></i> Kherwara tehsil, Mathata, Udaipur, Rajasthan 313201</li>
                            <li className="mb-3"><i className="bi bi-telephone me-3 fs-5 align-middle"></i> <a href="tel:+919461643431" className="text-decoration-none">+91 94616 43431</a> (Sales)</li>
                            <li className="mb-3"><i className="bi bi-telephone me-3 fs-5 align-middle"></i> <a href="tel:+919001788766" className="text-decoration-none">+91 90017 88766</a> (Operations)</li>
                            <li className="mb-3"><i className="bi bi-envelope me-3 fs-5 align-middle"></i> <a href="mailto:blocks@shubhenterprises.co.in" className="text-decoration-none">blocks@shubhenterprises.co.in</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h4 className="fw-light border-bottom pb-2 d-inline-block">Get in touch</h4>
                        <p className="small mt-3">Have a specific requirement or want to visit our quarry? We're happy to welcome serious buyers.</p>
                        <div className="input-group mt-4">
                            <input
                                type="email"
                                className="form-control rounded-0 border-secondary"Ī
                                placeholder="Your email"
                            />
                            <button className="btn btn-outline-secondary rounded-0" type="button">Send</button>
                        </div>
                        <p className="small text-secondary mt-3"><i className="bi bi-info-circle"></i> We reply within one working day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Enquiry;