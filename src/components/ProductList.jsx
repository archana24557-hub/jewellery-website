import React from 'react';
import ProductCard from './ProductCard';

// Image Imports
import diamondRing from '../assets/diamond_ring_1768635520926.png';
import goldNecklace from '../assets/gold_necklace_1768635535409.png';
import pearlEarrings from '../assets/pearl_earrings_1768635558639.png';
import luxuryWatch from '../assets/luxury_watch_1768636337710.png';
import emeraldNecklace from '../assets/emerald_necklace_1768636354480.png';
import heroJewellery from '../assets/hero_jewellery_1768635505424.png';

const ProductList = ({ addToCart }) => {
    const products = [
        {
            id: 1,
            image: diamondRing,
            title: "Eternal Solitaire Ring",
            price: "$1,200",
            category: "Rings"
        },
        {
            id: 2,
            image: goldNecklace,
            title: "Royal Gold Pendant",
            price: "$2,500",
            category: "Necklaces"
        },
        {
            id: 3,
            image: pearlEarrings,
            title: "Vintage Pearl Drops",
            price: "$850",
            category: "Earrings"
        },
        {
            id: 4,
            image: luxuryWatch,
            title: "Grand Masterpiece Watch",
            price: "$5,400",
            category: "Watches"
        },
        {
            id: 5,
            image: emeraldNecklace,
            title: "Emerald Empress Gala",
            price: "$3,200",
            category: "Necklaces"
        },
        {
            id: 6,
            image: heroJewellery,
            title: "Signature Pear Drop",
            price: "$4,100",
            category: "Exclusive"
        },
        {
            id: 7,
            image: diamondRing,
            title: "Midnight Diamond Band",
            price: "$1,800",
            category: "Rings"
        },
        {
            id: 8,
            image: luxuryWatch,
            title: "Classic Chronograph",
            price: "$2,900",
            category: "Watches"
        },
        {
            id: 9,
            image: goldNecklace,
            title: "Modern Gold Choker",
            price: "$1,500",
            category: "Necklaces"
        },
        {
            id: 10,
            image: pearlEarrings,
            title: "Princess Pearl Studs",
            price: "$600",
            category: "Earrings"
        }
    ];

    return (
        <section className="product-list container" id="collections" style={{ padding: '5rem 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Exquisite Collections</h2>
                <div style={{ width: '60px', height: '2px', background: 'var(--gold-primary)', margin: '1rem auto' }}></div>
                <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto' }}>
                    Explore our signature pieces, designed to celebrate life's most precious moments.
                </p>
            </div>

            <div className="grid grid-3">
                {products.map(product => (
                    <ProductCard key={product.id} {...product} onAdd={addToCart} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
