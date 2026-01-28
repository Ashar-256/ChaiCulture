import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section container">
            <div className="about-content">
                <h2 className="about-heading">About</h2>

                <p className="about-text">
                    At <strong><span className="gold">Chai Culture</span></strong>, we’re not just serving tea — we’re sharing a timeless tradition.
                    Rooted in the royal kitchens and street corners of India, chai is more than a beverage —
                    it’s a ritual, a pause, a connection. From morning greetings to evening reflections,
                    chai brings people together across generations and geographies.
                </p>

                <p className="about-text">
                    We’ve reimagined this centuries-old experience for today’s fast-paced world.
                    Our handcrafted blends capture the bold flavors of cardamom, ginger, masala, lemongrass, and rose —
                    all sealed in ready-to-brew sachets designed for modern workspaces and on-the-go lives.
                </p>

                <p className="about-tagline">
                    <strong>Made in India. Brewed in seconds. <span className="gold">Sipped like royalty.</span></strong>
                    {/* Made in India. Brewed in seconds. <span className="text-gold">Sipped like royalty.</span> */}
                </p>

                <p className="about-text">
                    Because no matter where you are — New York, Mumbai, or anywhere in between —
                    a good cup of chai should always feel like home.
                </p>
            </div>
        </section>
    );
};

export default About;
