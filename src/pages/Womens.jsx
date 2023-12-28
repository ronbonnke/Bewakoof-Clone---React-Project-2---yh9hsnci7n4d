import React, { useState, useEffect } from 'react';
import '../styles/mens/Mens.css'
import Card from '../components/Card';
import Dropdown from '../components/Dropdown';

// import { Dropdown } from 'semantic-ui-react';
import { useCurrentContext } from '../context/CurrentProvider';

const Womens = () => {
  const {womensCloths, setWomensCloths} = useCurrentContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWomensClothes = async () => {
      try {
        const response = await fetch(
          'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Women&limit=45',
          {
            method: 'GET',
            headers: {
              'projectId': 'ntymfpzixzjc',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch women\'s clothes');
        }

        const data = await response.json();
        setWomensCloths(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching women\'s clothes:', error.message);
        setLoading(false);
      }
    };

    fetchWomensClothes();
  }, []);

  return (
    <div>
      <h2>Women's Clothing</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
      

      <div className="Box">
      <div className="Drops"><Dropdown /></div>
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
