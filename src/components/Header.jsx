import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const location = useLocation();

  // Handle hash links when component mounts or location changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleContactClick = (e) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home with hash
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      // If we're already on home page, just scroll
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <a className="navbar-brand fw-light fs-3" href="/">
          Shubh Enterprises <small className="d-none d-md-block d-block d-block fs-6 fw-normal">Premium stone blocks mines, Mathata · Udaipur</small>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active text-dark fw-semibold" : "nav-link text-dark"
                }
              >
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                to="/about"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active text-dark fw-semibold" : "nav-link text-dark"
                }
              >
                About
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                to="/products"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active text-dark fw-semibold" : "nav-link text-dark"
                }
              >
                Products
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                to="/blogs"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active text-dark fw-semibold" : "nav-link text-dark"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active text-dark fw-semibold" : "nav-link text-dark"
                }
              >
                Contact Us
              </NavLink>
            </li>
            
            {/* Contact Us - with smooth scroll */}
            {/* <li className="nav-item">
              <a 
                href="/contact"
                className="nav-link text-dark"
                onClick={handleContactClick}
              >
                Contact Us
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;