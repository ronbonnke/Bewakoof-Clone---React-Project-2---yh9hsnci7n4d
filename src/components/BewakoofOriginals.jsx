// BewakoofOriginals.jsx

import React, { useState, useEffect } from 'react';
import '../styles/bewakooforginals/BewakoofOriginals.css';

const categoryImages = [
  "https://shop.bewakoof.com/cdn/shop/files/Banner-PC-Size-480x457-1699249580.webp?v=1699600581&width=360",
  "https://shop.bewakoof.com/cdn/shop/files/Banner-PC-Size-480x457-Heavy-Duty-1699249579.webp?v=1699600580&width=360",
  "https://shop.bewakoof.com/cdn/shop/files/Banner-PC-Size-480x457-American-PIMA-1699249579.webp?v=1699600580&width=360",
  "https://shop.bewakoof.com/cdn/shop/files/Banner-PC-Size-480x457-1699249580.webp?v=1699600581&width=360",
];

function BewakoofOriginals() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 2) % categoryImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextPage();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentPage]);

  return (
    <div>
      <h2 className="bewakoof-originals-heading">BEWAKOOF ORIGINALS</h2>
      <div className="bewakoof-originals-container">
        <div className="bewakoof-originals-slider">
          {categoryImages.slice(currentPage, currentPage + 2).map((image, index) => (
            <div className="bewakoof-originals-item" key={index}>
              <div className="bewakoof-originals-image-container">
                <img src={image} alt={`Category ${currentPage + index + 1}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="bewakoof-originals-dots">
          {Array.from({ length: Math.ceil(categoryImages.length / 2) }, (_, index) => (
            <div
              key={index}
              className={`bewakoof-originals-dot ${currentPage / 2 === index ? 'active' : ''}`}
              onClick={() => setCurrentPage(index * 2)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BewakoofOriginals;
