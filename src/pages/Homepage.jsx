import React, { useState, useEffect } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [clothes, setClothes] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products', {
          method: 'GET',
          headers: {
            'projectId': '{{ntymfpzixzjc}}',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch best sellers');
        }

        const data = await response.json();
        setClothes(data);
      } catch (error) {
        console.error('Error fetching best sellers:', error.message);
      }
    };

    fetchBestSellers();
  }, []);

  const handleNext = () => {
    const nextIndex = startIndex + 3;
    if (nextIndex < clothes.data.length) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - 3;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  return (
    <div className="homepage">
      <h2>Best Sellers</h2>
      <div className="slider">
        <div className="slider-item" style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}>
          {clothes.data && clothes.data.map((item) => (
            <div key={item._id} className="slider-img">
              <img src={item.displayImage} alt={item.name} />
            </div>
          ))}
        </div>
        <button className="slider-arrow slider-arrow-left" onClick={handlePrev}>&lt;</button>
        <button className="slider-arrow slider-arrow-right" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Homepage;
