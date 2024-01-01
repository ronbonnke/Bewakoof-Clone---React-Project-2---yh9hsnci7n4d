
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/trendingcategory/TrendingCategories.css';

const categoryImages = [
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/unnamed_8.jpg?v=1699601717",
    route: "/search/new arrival",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-sweaters-1699603687.webp?v=1700036096",
    route: "/search/Top rated",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Jackets-men--4--1699603823.webp?v=1700036097",
    route: "/search/trending",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/Trenndy-category-icon-Joggers-1697609179_2.webp?v=1700036237",
    route: "/search/jogger",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Jeans-1700128058.webp?v=1701346972",
    route: "/search/jogger",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Carrgos--1--1701242108.webp?v=1701346972",
    route: "/search/cargo",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories_Tile_cargos.jpg?v=1701847465",
    route: "/search/trending",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Pyjamas-women--1--1701345872.webp?v=1701346487",
    route: "/search/new arrival",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/TrendingCategories-157x118-joggers-women-1690540355_1_9592cb15-5ba8-44b5-aa7c-32bde019f6b7.webp?v=1699522207",
    route: "/search/jogger",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-sweaters-1699603687.webp?v=1700036096",
    route: "/search/best sellers",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Tile-Oversized-Tshirts-men-1701241800.webp?v=1701347586",
    route: "/search/jogger",
  },
  {
    image: "https://shop.bewakoof.com/cdn/shop/files/Trending-Categories-Co-Ords-Sets-Pyjamas-women-1701345874.webp?v=1701346487",
    route: "/search/jogger",
  },
  // Add more images and routes as needed
];

function TrendingCategories() {
  const navigate = useNavigate();

  const handleImageClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <h2 className="trending-categories-heading">TRENDING CATEGORIES</h2>
      <div className="trending-categories-container">
        {categoryImages.map((item, index) => (
          <div className="trending-categories-item" key={index}>
            <div className="trending-categories-image-container">
              <Link to={item.route}>
                <img
                  src={item.image}
                  alt={`Category ${index + 1}`}
                  onClick={() => handleImageClick(item.route)}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCategories;
