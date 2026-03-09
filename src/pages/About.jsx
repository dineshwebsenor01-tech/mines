import React from "react";
import Enquiry from "../components/enquiry";

function About() {
    return (
        <>
            <main>
                <div className="container my-5">
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h1 className="display-5 fw-light border-bottom pb-3 d-inline-block">About Shubh Enterprises</h1>
                            <p className="mt-3 col-lg-7 mx-auto">Three decades of responsible quarrying, deep roots in Mathata, and a commitment to quality stone blocks.</p>
                        </div>
                    </div>

                    <div className="row g-0 bg-white shadow-sm overflow-hidden mb-5">
                        <div className="col-lg-6 p-4 p-lg-5 d-flex flex-column justify-content-center">
                            <span className="badge bg-secondary text-white mb-3 w-auto align-self-start">since 1995</span>
                            <h2 className="fw-light">From a family quarry to a trusted name</h2>
                            <p className="small">Shubh Enterprises began as a small partnership in the village of Mathata, extracting sandstone for local construction. Over the years we expanded to granite, marble, and specialized blocks, while staying true to our ethos: <strong>safety, quality, and respect for the land</strong>. Today we operate five mines and supply some of India's most demanding infrastructure and architectural projects.</p>
                            <p className="small">Our team includes geologists, mining engineers, and skilled artisans who understand stone from the inside out. We blend traditional knowledge with modern wire‑saw technology to minimize waste and deliver consistent blocks.</p>
                        </div>
                        <div className="col-lg-6">
                            <img 
                                src="https://images.unsplash.com/photo-1581094794327-6c3e9f22d6e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                className="img-fluid h-100 w-100" 
                                style={{ objectFit: "cover", minHeight: "350px" }} 
                                alt="Founder at quarry" 
                            />
                        </div>
                    </div>

                    <div className="row g-4 py-4">
                        <div className="col-md-4">
                            <div className="bg-white p-4 shadow-sm h-100 text-center">
                                <i className="bi bi-gem fs-1 text-secondary"></i>
                                <h5 className="fw-normal mt-3">Uncompromised quality</h5>
                                <p className="small">Every block is inspected for grain consistency, color, and structural integrity before dispatch.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white p-4 shadow-sm h-100 text-center">
                                <i className="bi bi-people fs-1 text-secondary"></i>
                                <h5 className="fw-normal mt-3">Skilled workforce</h5>
                                <p className="small">Our miners and dressers have passed down expertise through generations – many have been with us for over 20 years.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white p-4 shadow-sm h-100 text-center">
                                <i className="bi bi-recycle fs-1 text-secondary"></i>
                                <h5 className="fw-normal mt-3">Eco‑conscious mining</h5>
                                <p className="small">We use dust suppression, water recycling, and rehabilitate mined areas into pastures and ponds.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 shadow-sm my-5">
                        <h3 className="fw-light border-bottom pb-3 mb-4">Our journey</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-unstyled">
                                    <li className="mb-4 d-flex">
                                        <span className="badge bg-secondary text-white me-3 align-self-start">1995</span>
                                        <span className="small">Started with a single sandstone quarry in Mathata; supplied local builders.</span>
                                    </li>
                                    <li className="mb-4 d-flex">
                                        <span className="badge bg-secondary text-white me-3 align-self-start">2004</span>
                                        <span className="small">Added granite extraction; first export order to Dubai.</span>
                                    </li>
                                    <li className="mb-4 d-flex">
                                        <span className="badge bg-secondary text-white me-3 align-self-start">2012</span>
                                        <span className="small">Acquired two more quarry leases, introduced wire‑saw cutting for precision blocks.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-unstyled">
                                    <li className="mb-4 d-flex">
                                        <span className="badge bg-secondary text-white me-3 align-self-start">2018</span>
                                        <span className="small">Installed solar power at our main site and rainwater harvesting structures.</span>
                                    </li>
                                    <li className="mb-4 d-flex">
                                        <span className="badge bg-secondary text-white me-3 align-self-start">2023</span>
                                        <span className="small">Recognized as a leading stone block supplier for infrastructure in Rajasthan.</span>
                                    </li>
                                    <li className="mb-4 d-flex">
                                        <span className="badge bg-secondary text-white me-3 align-self-start">Today</span>
                                        <span className="small">Five operational mines, 70+ employees, and a reputation for reliability.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="py-4">
                        <h3 className="fw-light text-center border-bottom pb-2 d-inline-block w-100 mb-5">Key people</h3>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card h-100 bg-white border-0 shadow-sm text-center">
                                    <img 
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                                        className="card-img-top rounded-circle mx-auto mt-4" 
                                        style={{ width: "140px", height: "140px", objectFit: "cover" }} 
                                        alt="Founder" 
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-normal">Ramesh Singh Rathore</h5>
                                        <span className="badge bg-secondary text-white mb-2">Founder & Managing Director</span>
                                        <p className="card-text small">36 years in the mining industry. Ramesh oversees operations and continues to walk the quarries every week.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 bg-white border-0 shadow-sm text-center">
                                    <img 
                                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                                        className="card-img-top rounded-circle mx-auto mt-4" 
                                        style={{ width: "140px", height: "140px", objectFit: "cover" }} 
                                        alt="Geologist" 
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-normal">Dr. Kavita Mehta</h5>
                                        <span className="badge bg-secondary text-white mb-2">Head Geologist</span>
                                        <p className="card-text small">PhD in sedimentary geology. Kavita leads exploration and quality assessment of new quarry faces.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 bg-white border-0 shadow-sm text-center">
                                    <img 
                                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                                        className="card-img-top rounded-circle mx-auto mt-4" 
                                        style={{ width: "140px", height: "140px", objectFit: "cover" }} 
                                        alt="Operations" 
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-normal">Vikram Singh</h5>
                                        <span className="badge bg-secondary text-white mb-2">Mine Operations Manager</span>
                                        <p className="card-text small">Ensures safety protocols, blasting schedules, and block handling. With Shubh Enterprises since 2001.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Enquiry/>
                </div>
            </main>
        </>
    );
}

export default About;