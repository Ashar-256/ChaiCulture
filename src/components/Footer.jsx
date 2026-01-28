import React from 'react';
import './Footer.css';

// Simple SVG Icons
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);



const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <div className="contact-info">
                    <p>jaytrivedi@chaiculture.net | +1 (917) 803-8116</p>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com" aria-label="Instagram" className="social-icon"><InstagramIcon /></a>
                    <a href="https://x.com" aria-label="X" className="social-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                        </svg>
                    </a>
                    <a href="https://facebook.com" aria-label="Facebook" className="social-icon"><FacebookIcon /></a>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Chai Culture. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
