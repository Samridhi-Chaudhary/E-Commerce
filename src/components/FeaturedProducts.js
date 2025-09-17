import React, { useEffect, useState } from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const featured = data; // Take only 4 products for "featured"
        setProducts(featured);
      });
  }, []);

  return (
    <section className="featured-products" id="featured">
      <h2>Featured Products</h2>
      <p>Discover our handpicked selection of premium products, carefully curated just for you</p>
      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <span className="tag">men's clothing</span>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <div className="rating">
              ⭐ {product.rating.rate} ({product.rating.count})
            </div>
            <p className="description">{product.description.substring(0, 100)}...</p>
            <div className="price">${product.price.toFixed(2)}</div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
