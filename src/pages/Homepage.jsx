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
        // Duplicate the existing data to create more images
        const duplicatedData = [...data.data, ...data.data, ...data.data, ...data.data];
        setClothes({ data: duplicatedData });
      } catch (error) {
        console.error('Error fetching best sellers:', error.message);
      }
    };

    fetchBestSellers();

    // Auto slide every 5 seconds
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [startIndex]); // Add startIndex as a dependency to avoid potential issues

  const handleNext = () => {
    const nextIndex = startIndex + 3;
    if (nextIndex < clothes.data.length) {
      setStartIndex(nextIndex);
    } else {
      // Restart from the beginning when reaching the end
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - 3;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    } else {
      // Go to the last set when reaching the beginning
      setStartIndex(clothes.data.length - 3);
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
