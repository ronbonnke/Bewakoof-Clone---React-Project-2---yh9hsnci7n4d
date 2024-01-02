import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/category/CategoryProduct.css';

const categoryImages = [
  "https://shop.bewakoof.com/cdn/shop/files/category-icon-for-Msite-2--1--1697613233.jpg?v=1699430246&width=360",
  "https://shop.bewakoof.com/cdn/shop/files/category-icon-for-Msite-3--1--1697613233.jpg?v=1699430163&width=360",
  "https://shop.bewakoof.com/cdn/shop/files/category-icon-for-Msite-Winterwear-1698217139_4e736935-62bf-4900-933b-2141668d757d.webp?v=1699430162&width=360",
  "https://shop.bewakoof.com/cdn/shop/files/category-icon-for-Msite--1--1697613231_1a55fade-6483-4a57-9397-e92758e2db72.jpg?v=1699430162&width=360",
  "https://shop.bewakoof.com/cdn/shop/files/thumbnails-Revamp-Customization--1--1693212866.webp?v=1695260332",
  "https://shop.bewakoof.com/cdn/shop/files/thumbnails-Revamp-Combos-1693212865.gif?v=1695260332",
  "https://shop.bewakoof.com/cdn/shop/files/thumbnails-Revamp-Vote-1693212866.webp?v=1695260331",
];

const categoryTitles = [
  "New Arrivals",
  "Trending",
  "Best Sellers",
  "Top Rated",
  "Combos",
  "Vote for Design",
  "Shirts",
];

const categoryRoutes = [
  "/search/new arrival",
  "/search/trending",
  "/search/best seller",
  "/search/Top rated",
  "/search/combo",
  "/search/design",
  "/search/shirt",
];

function CategoryProduct() {
  return (
    <div className="category-container">
      {categoryImages.map((image, index) => (
        <div className="category-item" key={index}>
          <div className="category-title">{categoryTitles[index]}</div>
          <div className="category-container-image">
            <Link to={categoryRoutes[index]}>
              <img src={image} alt={categoryTitles[index]} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryProduct;
