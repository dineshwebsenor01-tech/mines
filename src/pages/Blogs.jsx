import React, { useState } from "react";

function Blogs() {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [showViewModal, setShowViewModal] = useState(false);

    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: "The geology of Udaipur's stone belt",
            category: "Featured",
            date: "Apr 2, 2026",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1571223641822-b82408a0e705?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            excerpt: "Discover the ancient sedimentary formations that give our granite and marble their unique colors and durability. A deep dive into the region's mining history.",
            content: "The Udaipur stone belt is one of the most geologically diverse regions in India, with formations dating back over 1.5 billion years. Our Mathata quarries sit on ancient sedimentary beds that were once part of a vast prehistoric sea. Over millennia, heat and pressure transformed these sediments into the granite, marble, and sandstone we extract today. The unique mineral composition gives each stone its characteristic color: iron oxides create warm golden hues in Imperial Gold Granite, while trace minerals produce the subtle veining in Kotda Marble. Geologists from around the world visit our site to study these formations, which offer a rare window into the Earth's geological history.",
            author: "Dr. Kavita Mehta",
            authorRole: "Head Geologist"
        },
        {
            id: 2,
            title: "Wire‑saw vs. traditional blasting",
            category: "Techniques",
            date: "Mar 15, 2026",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1583415855738-5a4b23b4f2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            excerpt: "We compare precision, waste reduction, and safety in modern quarrying methods.",
            content: "Traditional blasting has been the standard in quarrying for centuries, but modern wire-saw technology is revolutionizing the industry. Wire-saws use diamond-impregnated cables to cut through stone with remarkable precision, reducing waste by up to 30% compared to blasting. They also eliminate the safety risks associated with explosives and produce cleaner, more uniform blocks that require less processing. While the initial investment is higher, the long-term benefits include higher yield, better quality, and reduced environmental impact. At Shubh Enterprises, we've adopted wire-saw technology in three of our five quarries and plan to transition fully by 2028.",
            author: "Vikram Singh",
            authorRole: "Mine Operations Manager"
        },
        {
            id: 3,
            title: "Rehabilitating mined land",
            category: "Sustainability",
            date: "Feb 28, 2026",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1599632495916-1c2b71fb5e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            excerpt: "How we transform quarries into green spaces after extraction ends.",
            content: "Mining doesn't have to leave permanent scars on the landscape. At Shubh Enterprises, we've developed a comprehensive rehabilitation program that transforms exhausted quarries into productive green spaces. Our process begins during active mining, with topsoil preservation and careful water management. After extraction, we reshape the terrain, replace stored topsoil, and plant native species that thrive in the local climate. Our first rehabilitated site, a former sandstone quarry that closed in 2020, now supports a thriving ecosystem with over 30 bird species and has been converted into a community pond that provides water for local farmers during dry months.",
            author: "Ramesh Singh Rathore",
            authorRole: "Founder & Managing Director"
        },
        {
            id: 4,
            title: "Rainbow Sandstone: a natural palette",
            category: "Products",
            date: "Feb 10, 2026",
            readTime: "3 min read",
            image: "https://images.unsplash.com/photo-1550686041-366adcb1c63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            excerpt: "Why architects love its layered colors for facades and landscaping.",
            content: "Rainbow Sandstone is one of nature's most beautiful building materials. Each block tells a story through its layered bands of rust, cream, pink, and ochre – a record of changing environmental conditions millions of years ago. Architects prize this stone for its ability to add visual interest to facades without artificial coloring. It's particularly popular for landscaping projects, where its warm tones complement both traditional and contemporary designs. Our Rainbow Sandstone quarry in Mathata produces blocks of exceptional quality, with consistent layering and minimal defects. We supply stone for projects across India and have recently begun exporting to Dubai and Singapore.",
            author: "Priya Jain",
            authorRole: "Sales Director"
        },
        {
            id: 5,
            title: "Transporting 20‑ton blocks safely",
            category: "Logistics",
            date: "Jan 22, 2026",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            excerpt: "Behind the scenes of our dispatch and delivery to sites across India.",
            content: "Moving multi-ton stone blocks requires precision, experience, and specialized equipment. Our logistics team coordinates every step, from loading with overhead cranes to securing blocks on custom trailers designed to distribute weight evenly. We use GPS tracking on all shipments, allowing customers to monitor delivery progress in real-time. Each block is carefully documented with photos and measurements before departure, ensuring that clients receive exactly what they ordered. Despite the challenges of Indian roads, we maintain an on-time delivery rate of over 95% and have never had a major incident in our 30-year history.",
            author: "Vikram Singh",
            authorRole: "Mine Operations Manager"
        },
        {
            id: 6,
            title: "Hand‑dressing stone: a dying art",
            category: "Craftsmanship",
            date: "Jan 5, 2026",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1551801691-9c9c02f67a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            excerpt: "We meet the skilled workers who still finish blocks by hand.",
            content: "In an age of automated cutting and polishing, the art of hand-dressing stone is fading. But at Shubh Enterprises, we're proud to employ master craftsmen who learned their skills from fathers and grandfathers. Using traditional chisels and hammers, these artisans can create surface textures that machines cannot replicate – rustic finishes perfect for heritage restoration projects. We've documented their techniques and are working with local trade schools to ensure this knowledge isn't lost. Last year, we hosted a workshop where younger miners learned basic hand-dressing skills, bridging the gap between tradition and technology.",
            author: "Ramesh Singh Rathore",
            authorRole: "Founder & Managing Director"
        },
        {
            id: 7,
            title: "The temples of Udaipur: built with local stone",
            category: "History",
            date: "Dec 12, 2025",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1583415855738-5a4b23b4f2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            excerpt: "Centuries‑old structures that still stand, carved from our very quarries.",
            content: "The magnificent temples of Udaipur stand as living monuments to the durability of local stone. The famous Jagdish Temple, built in 1651, features intricate carvings in Kotda Marble that remain sharp after nearly 400 years. The City Palace complex incorporates sandstone from what is now our Mathata quarry, its warm hues mellowing beautifully with age. These historic structures inspire our commitment to quality – we're not just selling stone, we're providing material that will shape India's architectural heritage for centuries to come.",
            author: "Dr. Kavita Mehta",
            authorRole: "Head Geologist"
        }
    ];

    // Filter posts based on search
    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get recent posts (last 3)
    const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

    // Get categories with counts
    const categories = blogPosts.reduce((acc, post) => {
        if (post.category !== "Featured") {
            acc[post.category] = (acc[post.category] || 0) + 1;
        }
        return acc;
    }, {});

    const handleViewBlog = (blog) => {
        setSelectedBlog(blog);
        setShowViewModal(true);
    };

    const closeModal = () => {
        setShowViewModal(false);
        setTimeout(() => setSelectedBlog(null), 300);
    };

    return (
        <>
            <main className="container my-5">
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h1 className="display-5 fw-light border-bottom pb-3 d-inline-block">Blog · insights from the quarry</h1>
                        <p className="mt-3 col-lg-6 mx-auto">News, stories, and technical knowledge from the heart of Mathata stone mines.</p>
                    </div>
                </div>

                {/* Featured Post */}
                {blogPosts.filter(post => post.category === "Featured").map(featured => (
                    <div key={featured.id} className="row mb-5">
                        <div className="col-12">
                            <div className="card bg-white border-0 shadow-sm overflow-hidden">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <img
                                            src={featured.image}
                                            className="img-fluid h-100 w-100"
                                            style={{ objectFit: "cover", minHeight: "350px" }}
                                            alt={featured.title}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card-body p-4 p-lg-5">
                                            <span className="badge bg-secondary text-white mb-3">Featured</span>
                                            <h2 className="card-title fw-light">{featured.title}</h2>
                                            <p className="card-text">{featured.excerpt}</p>
                                            <div className="d-flex align-items-center small mb-3">
                                                <i className="bi bi-calendar3 me-2"></i>{featured.date} · <i className="bi bi-clock ms-3 me-2"></i>{featured.readTime}
                                            </div>
                                            <button
                                                onClick={() => handleViewBlog(featured)}
                                                className="btn btn-outline-secondary rounded-0 px-4"
                                            >
                                                Read more
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="row">
                    {/* Main Blog Posts */}
                    <div className="col-lg-8">
                        <div className="row g-4">
                            {filteredPosts.filter(post => post.category !== "Featured").map(post => (
                                <div key={post.id} className="col-md-6">
                                    <div className="card h-100 bg-white border-0 shadow-sm">
                                        <img
                                            src={post.image}
                                            className="card-img-top"
                                            alt={post.title}
                                            style={{ height: "200px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <span className="badge bg-secondary text-white mb-2">{post.category}</span>
                                            <h5 className="card-title fw-normal">{post.title}</h5>
                                            <p className="card-text small">{post.excerpt}</p>
                                            <div className="d-flex justify-content-between align-items-center small">
                                                <span><i className="bi bi-calendar3 me-1"></i>{post.date}</span>
                                                <button
                                                    onClick={() => handleViewBlog(post)}
                                                    className="btn btn-link text-decoration-none fw-medium p-0"
                                                >
                                                    Read →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* No Results Message */}
                        {filteredPosts.filter(post => post.category !== "Featured").length === 0 && (
                            <div className="text-muted p-4 text-center bg-white shadow-sm">
                                <i className="bi bi-search fs-1 text-secondary"></i>
                                <p className="mt-3">No posts match your search.</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        {/* Search */}
                        <div className="bg-white p-4 mb-4 shadow-sm">
                            <h5 className="fw-light border-bottom pb-2 mb-3">Search</h5>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control rounded-0 border-secondary"
                                    placeholder="Search blog..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="btn btn-outline-secondary rounded-0" type="button">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bg-white p-4 mb-4 shadow-sm">
                            <h5 className="fw-light border-bottom pb-2 mb-3">Categories</h5>
                            <ul className="list-unstyled">
                                {Object.entries(categories).map(([category, count]) => (
                                    <li key={category} className="mb-2">
                                        <a
                                            href="#"
                                            className="text-decoration-none d-flex justify-content-between"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSearchTerm(category);
                                            }}
                                        >
                                            <span>{category}</span>
                                            <span className="badge bg-secondary text-white">{count}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts */}
                        <div className="bg-white p-4 mb-4 shadow-sm">
                            <h5 className="fw-light border-bottom pb-2 mb-3">Recent posts</h5>
                            {recentPosts.map(post => (
                                <div key={post.id} className="d-flex mb-3">
                                    <img
                                        src={post.image}
                                        className="rounded me-3"
                                        style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                        alt={post.title}
                                    />
                                    <div>
                                        <h6 className="mb-0">
                                            <button
                                                onClick={() => handleViewBlog(post)}
                                                className="text-decoration-none text-dark fw-normal bg-transparent border-0 p-0 text-start"
                                                style={{ cursor: "pointer" }}
                                            >
                                                {post.title}
                                            </button>
                                        </h6>
                                        <small className="text-secondary">{post.date}</small>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Subscribe */}
                        <div className="bg-white p-4 shadow-sm">
                            <h5 className="fw-light border-bottom pb-2 mb-3">Subscribe</h5>
                            <p className="small">Get the latest articles straight to your inbox.</p>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control rounded-0 border-secondary" placeholder="Your email" />
                                <button className="btn btn-outline-secondary rounded-0" type="button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="contact" style={{ scrollMarginTop: "3rem" }}></div>
            </main>

            {/* Blog View Modal - Beautiful Popup */}
            {showViewModal && selectedBlog && (
                <div
                    className="modal show d-block"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
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
                        className="modal-dialog modal-dialog-centered modal-lg"
                        style={{ maxWidth: "900px" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content border-0 rounded-0">
                            {/* Header Image */}
                            <div className="position-relative" style={{ height: "350px", overflow: "hidden" }}>
                                <img
                                    src={selectedBlog.image}
                                    alt={selectedBlog.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                                <div
                                    className="position-absolute top-0 start-0 w-100 h-100"
                                    style={{
                                        background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)"
                                    }}
                                ></div>
                                <button
                                    onClick={closeModal}
                                    className="position-absolute top-0 end-0 btn btn-light rounded-0 m-3"
                                    style={{ zIndex: 10 }}
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                                <div className="position-absolute bottom-0 start-0 p-4 text-white">
                                    <span className="badge bg-secondary text-white mb-3">{selectedBlog.category}</span>
                                    <h2 className="display-6 fw-light">{selectedBlog.title}</h2>
                                    <div className="d-flex align-items-center small mt-2">
                                        <i className="bi bi-calendar3 me-2"></i>{selectedBlog.date}
                                        <i className="bi bi-clock ms-4 me-2"></i>{selectedBlog.readTime}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="modal-body p-5">
                                {/* Author Info */}
                                <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
                                    <div
                                        className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                        style={{ width: "50px", height: "50px", fontSize: "1.2rem" }}
                                    >
                                        {selectedBlog.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-medium">{selectedBlog.author}</h6>
                                        <small className="text-secondary">{selectedBlog.authorRole}</small>
                                    </div>
                                </div>

                                {/* Blog Content */}
                                <div className="blog-content">
                                    <p className="lead fw-light mb-4">{selectedBlog.excerpt}</p>
                                    <p>{selectedBlog.content}</p>

                                    <div className="bg-light p-4 my-4 border-start border-3">
                                        <p className="mb-0 fst-italic">
                                            "Every block tells a story of the earth's history. We're just the storytellers who bring it to light."
                                        </p>
                                    </div>

                                    <p>
                                        At Shubh Enterprises, we believe in sharing knowledge with our customers and the community.
                                        If you have questions about our mining practices or stone varieties, please don't hesitate to
                                        <a href="#contact" className="text-decoration-none"> contact our team</a>.
                                    </p>
                                </div>

                                {/* Share Buttons */}
                                <div className="d-flex justify-content-between align-items-center mt-5 pt-3 border-top">
                                    <div>
                                        <span className="small text-secondary me-3">Share this article:</span>
                                        <a href="#" className="text-secondary me-3"><i className="bi bi-facebook fs-5"></i></a>
                                        <a href="#" className="text-secondary me-3"><i className="bi bi-twitter fs-5"></i></a>
                                        <a href="#" className="text-secondary me-3"><i className="bi bi-linkedin fs-5"></i></a>
                                        <a href="#" className="text-secondary"><i className="bi bi-whatsapp fs-5"></i></a>
                                    </div>
                                    <button onClick={closeModal} className="btn btn-outline-secondary rounded-0">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Blogs;