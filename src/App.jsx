import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './index.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [darkTheme]);

  return (
    <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
      <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <ProductList addToCart={addToCart} />
      </main>
      <Footer />
      <Cart count={cartCount} />
    </div>
  );
}

export default App;
