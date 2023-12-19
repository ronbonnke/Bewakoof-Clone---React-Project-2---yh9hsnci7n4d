import React, { useState, useEffect } from 'react';
import '../styles/mens/Mens.css'
import Card from '../components/Card';

const Womens = () => {
  const [womensCloths, setWomensCloths] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMensClothes = async () => {
      try {
        const response = await fetch(
          'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Women',
          {
            method: 'GET',
            headers: {
              'projectId': 'ntymfpzixzjc',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch men\'s clothes');
        }

        const data = await response.json();
        setWomensCloths(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching men\'s clothes:', error.message);
        setLoading(false);
      }
    };

    fetchMensClothes();
  }, []);

  return (
    <div>
      <h2>Women's Clothing</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
      {/* <Banner
        src={
          "https://images.bewakoof.com/uploads/category/desktop/INSIDE-BANNER_DESKTOP_FREEBIE-1667395627.jpg"
        }
      /> */}

      <div className="Box">
        {/* <div className="Drops"><Dropdown /></div> */}
        <div className="containers">
          {womensCloths.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
      )}
    </div>
  );
};

export default Womens;
