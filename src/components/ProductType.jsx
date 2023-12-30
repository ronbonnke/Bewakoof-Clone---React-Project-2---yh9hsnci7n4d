import React from 'react'
import '../styles/producttype/ProductType.css'
import { Link, useNavigate } from 'react-router-dom';

  
const categoryImages = [
    "https://shop.bewakoof.com/cdn/shop/files/Navigation_210x210_OOF-Sale.jpg?v=1701966304",
    "https://shop.bewakoof.com/cdn/shop/files/category-icon-for-Msite-3--1--1697613233.jpg?v=1699430163&width=360",
    "https://shop.bewakoof.com/cdn/shop/files/category-icon-for-Msite-Winterwear-1698217139_4e736935-62bf-4900-933b-2141668d757d.webp?v=1699430162&width=360",
    "https://shop.bewakoof.com/cdn/shop/collections/pride-banner-final-common-1686209578_8765f95a-bfb2-43eb-a925-f26cd6c92f45.jpg?v=1695211538",
    "https://shop.bewakoof.com/cdn/shop/files/288x288-MEN-TOP.jpg?v=1700037875",
    "https://shop.bewakoof.com/cdn/shop/files/revamp-top-nav-samples-Women-1692788716.webp?v=1695207728",
    "https://shop.bewakoof.com/cdn/shop/files/revamp-top-nav-samples-Accessories-1692791911.webp?v=1695207813",
    "https://shop.bewakoof.com/cdn/shop/files/revamp_top-nav-samples_AIR.jpg?v=1695715672",
    "https://shop.bewakoof.com/cdn/shop/files/search-nav-icon-official-merch--2--1692250613.jpg?v=1695990686",
  ];
  
  const categoryTitles = [
    "Sale",
    "Winterwear",
    "Official Merch",
    "Custom",
    "Men",
    "Women",
    "Accessories",
    "Air",
    "Merch store",
  ];
  
  function ProductType() {
    const navigate = useNavigate();
    const handleCategoryClick = (categoryTitle) => {
      navigate(`/${categoryTitle.toLowerCase()}`);
    };

    return (
       <div className="product-container">
      {categoryImages.map((image, index) => (
        <div className="product-item" key={index}>
          <div className="product-title" onClick={() => handleCategoryClick(categoryTitles[index])}>
            {categoryTitles[index]}
          </div>
          <div className="product-container-image">
            <img src={image} alt={categoryTitles[index]} />
          </div>
        </div>
      ))}
    </div>
    );
  }

export default ProductType
