// TrendingCategories.jsx

import React from 'react';
import '../styles/trendingcategory/TrendingCategories.css';

const categoryImages = [
  "https://shop.bewakoof.com/cdn/shop/files/unnamed_8.jpg?v=1699601717",
  "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-sweaters-1699603687.webp?v=1700036096",
  "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Jackets-men--4--1699603823.webp?v=1700036097",
  "https://shop.bewakoof.com/cdn/shop/files/Trenndy-category-icon-Joggers-1697609179_2.webp?v=1700036237",
  "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Full-Sleeve-Tshirts-1699603684.webp?v=1700036237",
  "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Jeans-1700128058.webp?v=1701346972",
  "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Carrgos--1--1701242108.webp?v=1701346972",
  "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories_Tile_cargos.jpg?v=1701847465",
  "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Pyjamas-women--1--1701345872.webp?v=1701346487",
  "https://shop.bewakoof.com/cdn/shop/files/TrendingCategories-157x118-joggers-women-1690540355_1_9592cb15-5ba8-44b5-aa7c-32bde019f6b7.webp?v=1699522207",
  "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Oversized-Tshirts-men-1701241800.webp?v=1701347586",
  "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Co-Ords-Sets-Pyjamas-women-1701345874.webp?v=1701346487",
  // Add or modify more image URLs for each category
];

function TrendingCategories() {
  return (
    <div>
      <h2 className="trending-categories-heading">TRENDING CATEGORIES</h2>
      <div className="trending-categories-container">
        {categoryImages.map((image, index) => (
          <div className="trending-categories-item" key={index}>
            <div className="trending-categories-image-container">
              <img src={image} alt={`Category ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default TrendingCategories;
