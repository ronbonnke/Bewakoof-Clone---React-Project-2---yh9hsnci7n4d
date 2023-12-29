import React, { useEffect, useState } from 'react';
import '../styles/cart/Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);

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
      setCart(data.data.items); // Set the state to the items array
      console.log('cart', cart);
      console.log('response', data.data);
    } catch (error) {
      console.error('Error fetching cart:', error.message);
    }
  };

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
        <div>No cart items</div>
      ) : (
        cart.map((item) => (
          <>
          <div className="cart-products" key={item.product._id}>
            {/* Render your card or item details here */}
            <h3>{item.product.name}</h3>
             
            <img src={item.product.displayImage} alt="" />
            {/* Add more details as needed */}
          </div>
          <div>
            
          </div>
          </>
        ))
      )}
    </section>
  );
}

export default Cart;
