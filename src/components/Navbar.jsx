import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ darkTheme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          AURUM<span>JEWELS</span>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home">Collections</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkTheme ? '☀️' : '🌙'}
          </button>
          <button className="btn-primary" onClick={() => document.getElementById('collections').scrollIntoView({ behavior: 'smooth' })}>
            Shop Now
          </button>
        </div>

        <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? 'active' : ''}></span>
          <span className={isMenuOpen ? 'active' : ''}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
