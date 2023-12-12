
import React, { useState, useEffect } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [clothes, setClothes] = useState([]);

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

  return (
    <div className="homepage">
      <h2>Best Sellers</h2>
      <div className="slider">
        {clothes.data && clothes.data.map((item) => (
          <div key={item._id} className="slider-item">
            <img src={item.displayImage} alt="abcd" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
