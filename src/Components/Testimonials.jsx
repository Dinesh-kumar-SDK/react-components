import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Margaret E.',
            text: 'This is fantastic! Thanks so much guys!',
            image: `https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg`,
        },
        {
            name: 'Fred S.',
            text: 'Bootstrap is amazing. I’ve been using it to create lots of super nice landing pages.',
            image: 'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg',
        },
        {
            name: 'Sarah W.',
            text: 'Thanks so much for making these free resources available to us!',
            image: 'https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg',
        },
    ];

    return (
        <div className="testimonials-container">
            <h2>What people are saying...</h2>
            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <img src={testimonial.image} alt={testimonial.name} />
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.text}</p>
                    </div>
                ))}
            </div>
            <div className="signup-section" style={{
                backgroundImage: "url('https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg')",
                backgroundSize: "cover",
                position: "relative",
                justifyContent: "center"
            }}>
                <h3 style={{ color: "white" }}>Ready to get started? Sign up now!</h3>
                <form className="signup-form" >
                    <input type="email" placeholder="Email Address" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Testimonials;