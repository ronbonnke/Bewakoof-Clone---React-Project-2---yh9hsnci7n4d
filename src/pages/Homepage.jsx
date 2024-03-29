import React, { useState, useEffect } from 'react';
import "../styles/homepage/Homepage.css"
import CategoryProduct from '../components/CategoryProduct';
import ProductType from '../components/ProductType';
import Banner from '../components/Banner';
import TrendingCategories from '../components/TrendingCategories';
import BewakoofOriginals from '../components/BewakoofOriginals';
import { useCurrentContext } from '../context/CurrentProvider';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
  const [clothes, setClothes] = useState([]);
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const {setForInput} = useCurrentContext();

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products', {
          method: 'GET',
          headers: {
            'projectId': 'ntymfpzixzjc',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch best sellers');
        }

        const data = await response.json();
        setClothes(data);
        setForInput(data.data);
      } catch (error) {
        console.error('Error fetching best sellers:', error.message);
      }
    };

    fetchBestSellers();

    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [startIndex]); 
  const handleNext = () => {
    const nextIndex = startIndex + 3;
    if (clothes.data && clothes.data.length > 0) {
      setStartIndex(nextIndex >= clothes.data.length ? 0 : nextIndex);
    }
  };
  
  const handlePrev = () => {
    const prevIndex = startIndex - 3;
    if (clothes.data && clothes.data.length > 0) {
      setStartIndex(prevIndex < 0 ? clothes.data.length - 3 : prevIndex);
    }
  };

  return (
  
    <div className="homepage">
      <div>
        <ProductType />
      </div>
      <h2>BEST SELLERS</h2>
      <div className="slider">
        <div className="slider-item" style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}>
          {clothes.data && clothes.data.map((item) => (
            <div key={item._id} className="slider-img">
              <img src={item.displayImage} alt={item.name} onClick={() =>{
                 navigate("/Product" + "/" + item._id)
              }}/>
            </div>
          ))}
          
        </div>
        <button className="slider-arrow slider-arrow-left" onClick={handlePrev}>&lt;</button>
        <button className="slider-arrow slider-arrow-right" onClick={handleNext}>&gt;</button>
      </div>
      <div> <CategoryProduct /> </div>
      <div> <Banner /> </div>
      <div> <TrendingCategories /> </div>
      <div> <BewakoofOriginals /> </div>

      <div>
        <Link to={"/orderdetailpage"}>Order Deatil</Link></div>
    </div>
  );
};

export default Homepage;