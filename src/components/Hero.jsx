import logo from '../assets/logo.png';
import heroCup from '../assets/chai-cup.png';
import './HeroStyles.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content container">
                <div className="hero-text-side">
                    <div className="brand-header">
                        <img src={logo} alt="Chai Culture Logo" className="brand-logo" />
                        <div className="brand-info">
                            <h1 className="brand-name">CHAI CULTURE</h1>
                            <p className="brand-tagline">Brew the Royal Tradition</p>
                        </div>
                    </div>
                    <div className="divider"></div>

                    <p className="description">
                        Made in India.<br />
                        Brewed in seconds.<br />
                        <span className="text-gold">Sipped like royalty.</span>
                    </p>

                    <div className="status-indicator">
                        <span className="dot"></span>
                        <span className="status-text uppercase">Launching Soon</span>
                    </div>
                </div>

                <div className="hero-visual">
                    <img src={heroCup} alt="Royal Chai Cup" className="hero-cup-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
