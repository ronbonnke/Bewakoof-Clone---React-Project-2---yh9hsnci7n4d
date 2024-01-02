import React, { useState, useEffect } from 'react';
import '../styles/mens/Mens.css'
import Card from '../components/Card';
import Dropdown from '../components/Dropdown';
import { useCurrentContext } from '../context/CurrentProvider';

const Mens = () => {
  const [loading, setLoading] = useState(true);
  const {mensClothes,setMensClothes} = useCurrentContext();

  useEffect(() => {
    const fetchMensClothes = async () => {
      try {
        const response = await fetch(
          'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?gender=Men&limit=51',
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
        setMensClothes(data.data);

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
      <h2>Men's Clothing</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>


      <div className="Box">
        <div className="Drops"><Dropdown /></div>
        
        <div className="containers">
          {mensClothes.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
      )}
    </div>
  );
};

export default Mens;