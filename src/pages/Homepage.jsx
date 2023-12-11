import React, { useState, useEffect } from 'react';


const Homepage = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    // Fetch best sellers data
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
  console.log(clothes.data);

  return (
    <div>
      <h2>Best Sellers</h2>
      <div>
      {clothes.data && clothes.data.map((item) => (
          <img key={item._id} src={item.displayImage} alt="abcd" />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
