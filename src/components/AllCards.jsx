import React, { useEffect, useState } from 'react';
import "../styles/cart/Card02.css";
import Card02 from '../components/Card02';

import { useCurrentContext } from '../context/CurrentProvider';

function AllCards() {
  const {setCartnum,cartNum} = useCurrentContext();
  const {cart,setCart} = useCurrentContext();

  const getCartItems = async () => {
    try {
      const response = await fetch(
        'https://academics.newtonschool.co/api/v1/ecommerce/cart',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            projectId: 'ntymfpzixzjc',
          },
        }
      );
      const data = await response.json();
      setCart(data.data.items); 
      
      console.log('cart', cart);
      console.log('response', data.data);
    } catch (error) {
      console.error('Error fetching cart:', error.message);
    }
  };
  setCartnum(cart.length);
  console.log(cartNum)

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <section className='Cart'>
      <div className='Cart-item'>
        <span>My Cart </span>
        <span>({cart.length} item{cart.length !== 1 ? 's' : ''})</span>
      </div>
      {cart.length === 0 ? (
        <div>No cart items are added</div>
      ) : (
        cart.map((item) => (
          <>
          <div className="cart-products" key={item.product._id}>
          

             <Card02 item={item}/>
          </div>
          <div>
            
          </div>
          </>
        ))
      )}
    </section>
  );
}

export default AllCards;
