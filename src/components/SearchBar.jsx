import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"field":"name","value":"${searchTerm}"}`,
        {
          headers: {
            projectID: 'ntymfpzixzjc',
          },
        }
      );

      if (response.status === 200) {
        // Assuming the search results are available in response.data.data
        const searchResults = response.data.data;

        // You can handle the search results, for example, navigate to a search results page
        // and pass the results as a query parameter
        history.push('/search-results', { searchResults });
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
    </div>
  );
};

export default SearchBar;
  