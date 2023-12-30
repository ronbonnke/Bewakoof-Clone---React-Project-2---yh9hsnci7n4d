import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"field":"name","value":"${searchTerm}"}`,
        {
          headers: {
            projectId: 'ntymfpzixzjc',
          },
        }
      );

      if (response.status === 200) {
        const searchData = response.data.data;
        const searchResults = searchData.items || [];

        setSearchResults(searchResults);
        navigate('/search-results', { state: { searchResults } });
      }
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Render the suggestion list */}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result._id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
