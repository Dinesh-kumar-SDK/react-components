const FeaturesSection = () => {
    return (
        <div className="container py-5">
            <div className="row text-center mb-5">
                <div className="col-md-4">
                    <div className="mb-3">
                        <i className="bi bi-window" style={{ fontSize: "2rem", color: "#007bff" }}></i>
                    </div>
                    <h5>Fully Responsive</h5>
                    <p>This theme will look great on any device, no matter the size!</p>
                </div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <i className="bi bi-layers" style={{ fontSize: "2rem", color: "#007bff" }}></i>
                    </div>
                    <h5>Bootstrap 5 Ready</h5>
                    <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
                </div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <i className="bi bi-terminal" style={{ fontSize: "2rem", color: "#007bff" }}></i>
                    </div>
                    <h5>Easy to Use</h5>
                    <p>Ready to use with your own content, or customize the source files!</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h5>Fully Responsive Design</h5>
                    <p>
                        When you use a theme created by Start Bootstrap, you know that
                        the theme will look great on any device, whether it is a phone,
                        tablet, or desktop the page will behave responsively!
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"
                        alt="Device"
                        className="img-fluid rounded"
                    />   </div>
                <div className="row align-items-center mb-5">
                    {/* First Row */}
                    <div className="col-md-6">
                        <img
                            src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"
                            alt="Code Example"
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-md-6">
                        <h5>Updated For Bootstrap 5</h5>
                        <p>
                            Newly improved, and full of great utility classes, Bootstrap 5
                            is leading the way in mobile responsive web development! All
                            of the themes on Start Bootstrap are now using Bootstrap 5!
                        </p>

                    </div>
                    <div className="row align-items-center">
                        {/* Second Row */}
                        <div className="col-md-6 order-md-2">
                            <img
                                src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"
                                alt="Laptop Example"
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-md-6 order-md-1">
                            <h5>Easy to Use & Customize</h5>
                            <p>
                                Landing Page is just HTML and CSS with a splash of SCSS for
                                users who demand some deeper customization options. Out of the
                                box, just add your content and images, and your new landing
                                page will be ready to go!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;