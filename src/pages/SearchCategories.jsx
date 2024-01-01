import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';
import "../styles/searchcategory/Searchcategory.css"
const SearchCategories = () => {
  const [clothes, setClothes] = useState([]);
  const [filteredClothes, setFilteredClothes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const { inputValue } = useParams();

  const fetchSearchCategories = async () => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/products', {
        method: 'GET',
        headers: {
          projectId: 'ntymfpzixzjc',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch search categories');
      }

      const data = await response.json();
      setClothes(data.data);
      setFilteredClothes(data.data);
    } catch (error) {
      console.error('Error fetching search categories:', error.message);
    }
  };

  useEffect(() => {
    fetchSearchCategories();
  }, []);

  const filteredSuggestions = clothes.filter((item) => {
    // console.log("item", item);
    const lowerCasedInput = inputValue.toLowerCase();

    return (
      item.name.toLowerCase().includes(lowerCasedInput) ||
      (item.color && item.color.toLowerCase().includes(lowerCasedInput)) ||
      (item.sellerTag &&
        item.sellerTag.toLowerCase().includes(lowerCasedInput)) ||
      (item.subCategory &&
        item.subCategory.toLowerCase().includes(lowerCasedInput)) ||
      (Array.isArray(item.size) &&
        item.size.some(
          (size) =>
            typeof size === "string" &&
            size.toLowerCase().includes(lowerCasedInput)
        ))
    );
  });



  return (
   
      
     

      <div className="Box1">
          <div className="Drops1">
            <Dropdown />
          </div>
          <div className="container-z">
            {filteredSuggestions.map((item) => (
              <Card item={item} key={item._id} />
            ))}
          </div>
        </div>
  );
};

export default SearchCategories;




