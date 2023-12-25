import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../components/Card';

function WishList() {

        const [wishlistItems, setWishlistItems] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          const fetchWishlist = async () => {
            try {
              const response = await fetch('https://academics.newtonschool.co/api/v1/ecommerce/wishlist', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    projectID: 'ntymfpzixzjc',
                  },
              });
      
              if (!response.ok) {
                throw new Error('Failed to fetch wishlist items');
              }
      
              const data = await response.json();
              setWishlistItems(data.data);
              setLoading(false);
            } catch (error) {
              console.error('Error fetching wishlist:', error.message);
              setError('Failed to fetch wishlist items');
              setLoading(false);
            }
          };
      
          fetchWishlist();
        }, []);
      
        if (loading) {
          return <p>Loading wishlist items...</p>;
        }
      
        if (error) {
          return <p>Error: {error}</p>;
        }
        console.log('wishlist', wishlistItems)
  return (
    <div className="containers">
    {wishlistItems.items.map((wishlistItem)=>{
        console.log("wishlistItem",wishlistItem.products)
        return(
            <div>
                <Card item={wishlistItem.products} key={wishlistItem.products._id} />
            </div>
        )
    })}
    
  </div>
  )
}

export default WishList
