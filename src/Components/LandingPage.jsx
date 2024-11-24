const LandingPage = () => {
    return (
        <div
            style={{
                backgroundImage: "url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg')",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >

            <div className="text-center text-white mt-5">
                <h1>Generate more leads with a professional landing page!</h1>
                <div className="input-group mt-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                    />
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;