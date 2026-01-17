import React from 'react';
import './About.css';
import heritageImg from '../assets/hero_jewellery_1768635505424.png'; // Re-using a premium asset due to quota

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container about-grid">
                <div className="about-image animate-fade-in">
                    <img src={heritageImg} alt="Our Heritage" />
                    <div className="img-frame"></div>
                </div>
                <div className="about-text animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <span className="subtitle">Our Heritage</span>
                    <h2>A Legacy of Brilliance</h2>
                    <p>
                        For over three decades, Aurum Jewels has been at the forefront of high-end jewellery design.
                        Rooted in artisanal traditions and fueled by a passion for perfection, every piece in our
                        collection tells a story of elegance and ethical craftsmanship.
                    </p>
                    <p>
                        Our master craftsmen meticulously select each gemstone, ensuring only the finest materials
                        are transformed into timeless treasures. We believe that jewellery is more than an accessory—it's
                        a celebration of life's most precious milestones.
                    </p>
                    <div className="signature">
                        <p>Founded with heart, crafted with precision.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
