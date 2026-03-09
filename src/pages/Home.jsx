import React from "react";
import Enquiry from "../components/Enquiry";

function Home() {
    return (
        <>
            <main>
                <div className="container my-5">
                    <div className="row g-0 bg-white shadow-sm overflow-hidden">
                        <div className="col-lg-6 p-4 p-lg-5 d-flex flex-column justify-content-center">
                            <span className="badge bg-secondary text-white mb-3 w-auto align-self-start">Mine · Stone blocks</span>
                            <h1 className="display-5 fw-light">Strength & beauty from the earth</h1>
                            <p className="lead fs-6">Family‑owned quarries in Mathata, Udaipur. Supplying premium granite, marble, sandstone and limestone blocks since 1995.</p>
                            <div className="d-flex gap-3 mt-4">
                                
                                <a href="/products" className="btn btn-outline-secondary rounded-0 px-4">Explore products</a>
                                <a href="#contact" className="btn btn-link text-decoration-none ps-0">Contact us →</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img 
                                src="https://images.unsplash.com/photo-1622645636770-11fbf0611463?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWluZXxlbnwwfHwwfHx8MA%3D%3D" 
                                className="img-fluid h-100 w-100" 
                                style={{ objectFit: "cover", minHeight: "350px" }} 
                                alt="Quarry overview" 
                            />
                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="fw-light border-bottom pb-2 d-inline-block">Our prime stone blocks</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 bg-white border-0 shadow-sm">
                                <img 
                                    src="https://plus.unsplash.com/premium_photo-1682146837754-e378f62e686e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                    className="card-img-top" 
                                    style={{ height: "220px", objectFit: "cover" }} 
                                    alt="Imperial Gold Granite" 
                                />
                                <div className="card-body">
                                    <span className="badge bg-secondary text-white mb-2">Granite</span>
                                    <h5 className="card-title fw-normal">Imperial Gold</h5>
                                    <p className="card-text small">Rich golden hues, high durability. Ideal for monumental architecture and heavy‑duty cladding.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 bg-white border-0 shadow-sm">
                                <img 
                                    src="https://media.istockphoto.com/id/1295684969/photo/construction-vehicles-working-in-marble-quarry-with-oversized-marble-blocks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_coEMAYnAlxg9X1kGufZVz2YRwbAekbt4UUEspCFas=" 
                                    className="card-img-top" 
                                    style={{ height: "220px", objectFit: "cover" }} 
                                    alt="Kotda Marble" 
                                />
                                <div className="card-body">
                                    <span className="badge bg-secondary text-white mb-2">Marble</span>
                                    <h5 className="card-title fw-normal">Kotda Marble</h5>
                                    <p className="card-text small">Pure white with subtle veins, prized for sculpting and premium flooring.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 bg-white border-0 shadow-sm">
                                <img 
                                    src="mine3.jpeg" 
                                    className="card-img-top" 
                                    style={{ height: "220px", objectFit: "cover" }} 
                                    alt="Rainbow Sandstone" 
                                />
                                <div className="card-body">
                                    <span className="badge bg-secondary text-white mb-2">Sandstone</span>
                                    <h5 className="card-title fw-normal">Rainbow Sandstone</h5>
                                    <p className="card-text small">Layered colours — pink, buff, brown — perfect for landscaping and facades.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <a href="products.html" className="btn btn-outline-secondary rounded-0 px-5">View all varieties</a>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="bg-white p-4 shadow-sm h-100 text-center">
                                <i className="bi bi-pick fs-1 text-secondary"></i>
                                <h5 className="fw-normal mt-3">Own mines, direct supply</h5>
                                <p className="small">We control extraction from our five operational quarries in Mathata belt – no middlemen, consistent quality.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white p-4 shadow-sm h-100 text-center">
                                <i className="bi bi-truck fs-1 text-secondary"></i>
                                <h5 className="fw-normal mt-3">Heavy‑load logistics</h5>
                                <p className="small">Fleet of trailers and cranes to move 20‑ton blocks safely across India.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white p-4 shadow-sm h-100 text-center">
                                <i className="bi bi-tree fs-1 text-secondary"></i>
                                <h5 className="fw-normal mt-3">Sustainability first</h5>
                                <p className="small">Rehabilitation of mined land, water recycling, and responsible blasting techniques.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="row g-0 bg-white shadow-sm overflow-hidden">
                        <div className="col-lg-6 order-lg-2 p-4 p-lg-5 d-flex flex-column justify-content-center">
                            <span className="badge bg-secondary text-white mb-3 w-auto align-self-start">The source</span>
                            <h3 className="fw-light">Mathata – heart of Udaipur stone belt</h3>
                            <p className="small">Our main quarry cluster is situated in Kherwara tehsil, known for its ancient sedimentary deposits. The region yields some of India's most durable granite and decorative sandstone. We've been operating here for three decades, combining traditional knowledge with modern safety.</p>
                            <a href="about.html" className="btn btn-link text-decoration-none ps-0 mt-2">More about our mines →</a>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <img 
                                src="https://images.unsplash.com/photo-1583415855738-5a4b23b4f2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                className="img-fluid h-100 w-100" 
                                style={{ objectFit: "cover", minHeight: "300px" }} 
                                alt="Mathata quarry landscape" 
                            />
                        </div>
                    </div>
                </div>

                <Enquiry/>
            </main>
        </>
    );
}

export default Home;