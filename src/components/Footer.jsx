import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer glass" id="contact">
            <div className="container footer-grid">
                <div className="footer-info">
                    <div className="logo" style={{ marginBottom: '1.5rem' }}>
                        AURUM<span>JEWELS</span>
                    </div>
                    <p>
                        Redefining luxury through timeless designs and ethical craftsmanship.
                        Join us in our journey of elegance.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Collections</a></li>
                        <li><a href="#about">Our Story</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#shipping">Shipping & Returns</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: archana24557@gmail.com</p>
                    <p>Phone: +91 99118296</p>
                    <p>Location: 5th Avenue, New York</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Aurum Jewels. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
