import React, { useState } from "react";
import blackMarble from "../assets/videos/black-marble.mp4";
import black1Marble from "../assets/videos/black1-marble.mp4";
import WhiteMarble from "../assets/videos/white-marble.mp4";

// Images
import blackMarbleImages from "../assets/images/mine3.jpeg";

function Products() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showVideoModal, setShowVideoModal] = useState(false);

    // Video data array for gallery
    const videoGallery = [
        { id: 1, src: black1Marble, title: "Black Marquina Marble", thumbnail: black1Marble },
        { id: 2, src: WhiteMarble, title: "White Statuario Marble", thumbnail: WhiteMarble },
        { id: 3, src: blackMarble, title: "Black Galaxy Granite", thumbnail: blackMarble },
        { id: 4, src: blackMarble, title: "Brown Antique Marble", thumbnail: blackMarble },
        { id: 5, src: WhiteMarble, title: "White Thassos Marble", thumbnail: WhiteMarble },
        { id: 6, src: blackMarble, title: "Black Pearl Granite", thumbnail: blackMarble },
    ];

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
        setShowVideoModal(true);
    };

    const closeModal = () => {
        setShowVideoModal(false);
        setTimeout(() => setSelectedVideo(null), 300);
    };

    return (
        <>
            <main className="container my-5">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h1 className="display-5 fw-light border-bottom pb-3 d-inline-block">Our stone varieties · mine direct</h1>
                        <p className="text-secondary mt-3 col-lg-6 mx-auto">We offer a wide range of natural stone blocks extracted from our own quarries in Mathata. Each block is hand‑picked and graded for consistency.</p>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-sm-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            {/* blackMarbleImages */}
                            <img 
                                src={blackMarbleImages}
                                className="card-img-top" 
                                alt="Imperial Gold Granite" 
                                style={{ height: "240px", objectFit: "cover" }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-normal">Imperial Gold Granite</h5>
                                <p className="card-text text-secondary">Coarse‑grain granite with warm beige tones and golden flecks. Ideal for monumental architecture and heavy‑duty cladding.</p>
                                <ul className="list-unstyled small text-secondary">
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Block size: up to 3m × 1.8m</li>
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Density: 2.65 g/cm³</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-transparent border-0 pb-3">
                                <a href="#" className="btn btn-outline-secondary rounded-0 w-100">Inquire about price</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <img 
                                src={blackMarbleImages}
                                className="card-img-top" 
                                alt="Kotda Marble" 
                                style={{ height: "240px", objectFit: "cover" }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-normal">Kotda Marble</h5>
                                <p className="card-text text-secondary">Pure white marble with subtle grey waves. Quarried from our Kotda lease, known for its fine grain and excellent workability.</p>
                                <ul className="list-unstyled small text-secondary">
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Block size: up to 2.5m × 1.5m</li>
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Compressive strength: 85 MPa</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-transparent border-0 pb-3">
                                <a href="#" className="btn btn-outline-secondary rounded-0 w-100">Inquire about price</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <img 
                                src={blackMarbleImages}
                                className="card-img-top" 
                                alt="Rainbow Sandstone" 
                                style={{ height: "240px", objectFit: "cover" }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-normal">Rainbow Sandstone</h5>
                                <p className="card-text text-secondary">Multi‑layered sandstone with natural bands of rust, cream, and ochre. Highly sought for landscaping and decorative walls.</p>
                                <ul className="list-unstyled small text-secondary">
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Block size: custom cut available</li>
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Water absorption: &lt; 3%</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-transparent border-0 pb-3">
                                <a href="#" className="btn btn-outline-secondary rounded-0 w-100">Inquire about price</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <img 
                                src={blackMarbleImages}
                                className="card-img-top" 
                                alt="Slate blocks" 
                                style={{ height: "240px", objectFit: "cover" }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-normal">Natural Slate Blocks</h5>
                                <p className="card-text text-secondary">Dark grey slate with excellent cleavage. Perfect for traditional roofing, flooring, and sculptural bases.</p>
                                <ul className="list-unstyled small text-secondary">
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Block thickness: 15–30 cm</li>
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Frost resistant</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-transparent border-0 pb-3">
                                <a href="#" className="btn btn-outline-secondary rounded-0 w-100">Inquire about price</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <img 
                                src={blackMarbleImages}
                                className="card-img-top" 
                                alt="Quartzite blocks" 
                                style={{ height: "240px", objectFit: "cover" }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-normal">Quartzite Blocks</h5>
                                <p className="card-text text-secondary">Hard, durable quartzite in shades of white and pink. Resists abrasion, ideal for high‑traffic flooring and industrial uses.</p>
                                <ul className="list-unstyled small text-secondary">
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Hardness: 7 Mohs</li>
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Sizes: 2.0m × 1.2m average</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-transparent border-0 pb-3">
                                <a href="#" className="btn btn-outline-secondary rounded-0 w-100">Inquire about price</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm">
                            <img 
                                src={blackMarbleImages}
                                className="card-img-top" 
                                alt="Limestone blocks" 
                                style={{ height: "240px", objectFit: "cover" }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-normal">Limestone Blocks</h5>
                                <p className="card-text text-secondary">Creamy beige limestone with a fine texture. Often used in cladding, paving, and traditional Rajasthani architecture.</p>
                                <ul className="list-unstyled small text-secondary">
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Block weight: 4‑6 tonnes</li>
                                    <li><i className="bi bi-check-circle-fill text-success me-2"></i> Custom cutting available</li>
                                </ul>
                            </div>
                            <div className="card-footer bg-transparent border-0 pb-3">
                                <a href="#" className="btn btn-outline-secondary rounded-0 w-100">Inquire about price</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== BEAUTIFUL VIDEO SECTION ===== */}
                <div className="row my-5 py-4">
                    <div className="col-12">
                        <div 
                            className="position-relative overflow-hidden bg-dark" 
                            style={{ height: "500px", cursor: "pointer" }}
                            onClick={() => handleVideoClick({ src: blackMarble, title: "Black Marquina Marble" })}
                        >
                            {/* Background Video */}
                            <video 
                                width="100%" 
                                height="100%" 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                style={{ 
                                    objectFit: "cover",
                                    opacity: "0.8",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%"
                                }}
                            >
                                <source src={blackMarble} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            
                            {/* Overlay Content */}
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
                                 style={{ 
                                     background: "linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)"
                                 }}>
                                <div className="text-center text-white p-5" style={{ maxWidth: "800px" }}>
                                    <span className="badge bg-secondary text-white mb-4 px-3 py-2">Featured Stone</span>
                                    <h2 className="display-4 fw-light mb-3">Black Marquina Marble</h2>
                                    <p className="lead mb-4 fs-5">Exclusive premium black marble with dramatic white veining. Quarried from our deepest seams, perfect for luxury interiors and statement pieces.</p>
                                    <div className="d-flex justify-content-center gap-3">
                                        <div className="text-center px-4">
                                            <h4 className="fw-light mb-1">2.5m</h4>
                                            <small>Max Length</small>
                                        </div>
                                        <div className="text-center px-4 border-start border-white">
                                            <h4 className="fw-light mb-1">1.8m</h4>
                                            <small>Max Width</small>
                                        </div>
                                        <div className="text-center px-4 border-start border-white">
                                            <h4 className="fw-light mb-1">7 Mohs</h4>
                                            <small>Hardness</small>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <a href="#" className="btn btn-outline-light rounded-0 px-5 py-3 me-3" onClick={(e) => e.stopPropagation()}>View Details</a>
                                        <a href="#" className="btn btn-light rounded-0 px-5 py-3" onClick={(e) => e.stopPropagation()}>Inquire Now</a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Play/Pause Indicator */}
                            <div className="position-absolute bottom-0 end-0 m-4 text-white-50 small">
                                <i className="bi bi-play-circle"></i> Click to watch full video
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Gallery - 6 Videos Row */}
                <div className="row g-3 mb-5">
                    <div className="col-12">
                        <h3 className="fw-light text-center mb-4">Our Stone in Motion</h3>
                    </div>
                    {videoGallery.map((video) => (
                        <div key={video.id} className="col-md-2 col-6">
                            <div 
                                className="position-relative" 
                                style={{ height: "120px", cursor: "pointer" }}
                                onClick={() => handleVideoClick(video)}
                            >
                                <video 
                                    width="100%" 
                                    height="100%" 
                                    muted
                                    loop
                                    style={{ objectFit: "cover" }}
                                    onMouseEnter={e => e.target.play()}
                                    onMouseLeave={e => e.target.pause()}
                                >
                                    <source src={video.src} type="video/mp4" />
                                </video>
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25">
                                    <i className="bi bi-play-circle-fill text-white fs-3"></i>
                                </div>
                                <div className="position-absolute bottom-0 start-0 w-100 p-1 bg-dark bg-opacity-75">
                                    <small className="text-white d-block text-truncate px-1">{video.title}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-5 pt-4">
                    <div className="col-12">
                        <div className="p-5 bg-white border text-center">
                            <h3 className="fw-light">Need a specific size or volume?</h3>
                            <p className="text-secondary col-lg-6 mx-auto">We cater to bulk orders and can cut blocks according to your project specifications. Contact our quarry team for a quote.</p>
                            <a href="#contact" className="btn btn-dark rounded-0 px-5 py-3 mt-2">Request custom order</a>
                        </div>
                    </div>
                </div>

                <div id="contact" style={{ scrollMarginTop: "2rem" }}></div>
            </main>

            {/* Video Modal Popup */}
            {showVideoModal && selectedVideo && (
                <div 
                    className="modal show d-block" 
                    style={{ 
                        backgroundColor: "rgba(0,0,0,0.9)", 
                        position: "fixed", 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        bottom: 0,
                        zIndex: 1050,
                        overflowY: "auto"
                    }}
                    onClick={closeModal}
                >
                    <div 
                        className="modal-dialog modal-dialog-centered modal-xl" 
                        style={{ maxWidth: "800px" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content bg-transparent border-0">
                            <div className="modal-header border-0">
                                <h5 className="modal-title text-white">{selectedVideo.title}</h5>
                                <button 
                                    type="button" 
                                    className="btn-close btn-close-white" 
                                    onClick={closeModal}
                                ></button>
                            </div>
                            <div className="modal-body p-0">
                                <div className="ratio ratio-16x9">
                                    <video 
                                        width="100%" 
                                        height="100%" 
                                        controls
                                        autoPlay
                                        playsInline
                                        style={{ objectFit: "contain", backgroundColor: "#000" }}
                                    >
                                        <source src={selectedVideo.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div className="modal-footer border-0 justify-content-center">
                                <button 
                                    className="btn btn-outline-light rounded-0 px-5"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Products;