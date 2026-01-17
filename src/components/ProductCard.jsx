import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price, category, onAdd }) => {
    return (
        <div className="product-card glass animate-fade-in">
            <div className="product-img-container">
                <img src={image} alt={title} className="product-img" />
                <div className="product-badge">{category}</div>
            </div>
            <div className="product-info">
                <h3>{title}</h3>
                <p className="price">{price}</p>
                <button className="btn-outline" onClick={onAdd}>Add to Bag</button>
            </div>
        </div>
    );
};

export default ProductCard;
