import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero_jewellery_1768635505424.png';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <img src={heroImage} alt="Luxury Jewellery" className="hero-img" />
            <div className="container hero-content">
                <h1 className="animate-fade-in">Timeless Elegance</h1>
                <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Discover our curated collection of fine jewellery, crafted with passion and precision.
                </p>
                <div className="hero-btns animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <button className="btn-primary">Explore Collection</button>
                    <button className="btn-secondary">View Catalog</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
