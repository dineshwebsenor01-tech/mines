import React from "react";

function Footer() {
  return (
    // <!-- ========== FOOTER (identical to blog) ========== -->
    <footer className="bg-white border-top mt-5 py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="fw-normal mb-3 border-start border-3 ps-3" style={{borderColor: '#c97c5d'}}>Shubh
              Enterprises</h5>
            <p className="text-secondary small">Premium stone blocks mines, Mathata. Family-owned, supplying natural stone
              since 1995.</p>
            <p className="text-secondary small"><i className="bi bi-geo-alt me-2"></i>Kherwara tehsil, Mathata, Udaipur, RJ 313201
            </p>
          </div>
          <div className="col-md-2">
            <h5 className="fw-normal mb-3 border-start border-3 ps-3" style={{borderColor: '#c97c5d'}}>Quick links
            </h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="/" className="text-secondary text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-secondary text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="/products" className="text-secondary text-decoration-none">Products</a></li>
              <li className="mb-2"><a href="/contact" className="text-secondary text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-normal mb-3 border-start border-3 ps-3" style={{borderColor: '#c97c5d'}}>Stone
              varieties</h5>
            <ul className="list-unstyled small text-secondary">
              <li>Imperial Gold Granite</li>
              <li>Kotda Marble</li>
              <li>Rainbow Sandstone</li>
              <li>Slate · Quartzite · Limestone</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-normal mb-3 border-start border-3 ps-3" style={{borderColor: '#c97c5d'}}>Reach us</h5>
            <ul className="list-unstyled small">
              <li className="mb-2"><i className="bi bi-telephone me-2"></i><a href="tel:+919461643431"
                  className="text-secondary text-decoration-none">+91 94616 43431</a></li>
              <li className="mb-2"><i className="bi bi-telephone me-2"></i><a href="tel:+919001788766"
                  className="text-secondary text-decoration-none">+91 90017 88766</a></li>
              <li className="mb-2"><i className="bi bi-telephone me-2"></i><a href="tel:+919413318341"
                  className="text-secondary text-decoration-none">+91 94133 18341</a></li>
              <li className="mb-2"><i className="bi bi-envelope me-2"></i><a href="mailto:blocks@shubhenterprises.co.in"
                  className="text-secondary text-decoration-none">blocks@shubhenterprises.co.in</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-secondary small border-top mt-4 pt-4">
          <span>© 2026 Shubh Enterprises. All images represent actual quarry material. Design by <strong>Dinesh Kumar</strong></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;