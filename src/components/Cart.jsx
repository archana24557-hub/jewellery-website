import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ count }) => {
    return (
        <div className={`cart-container ${count > 0 ? 'visible' : ''}`}>
            <div className="cart-icon glass">
                <span className="icon">🛍️</span>
                {count > 0 && <span className="badge">{count}</span>}
            </div>
        </div>
    );
};

export default Cart;
