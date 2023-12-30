import React, { useEffect, useState } from "react";
import '../styles/cardtable/CardTable.css'
 
const CardTable = () => {
      const [total, setTotal] = useState(0);
      const [show, setShow] = useState(false);
    //   const { cart } = useSelector((state) => state.Cart);

    const [cart, setCart] = useState([]);
    const [cart1, setCart1] = useState([]);
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
      setCart1(data.data) // Set the state to the items array
      console.log('cart', cart);
      console.log('response', data.data);
    } catch (error) {
      console.error('Error fetching cart:', error.message);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);
  console.log('card',cart)
    
      const handleTotal = () => {
        setTotal(
          cart.reduce(
            (acc, curr) => acc + Math.round(Number(curr.price)) * curr.qty,
            0
          )
        );
      };
    //   const handleClose = () => {
    //     setShow(false);
    //   };
    
    //   const handleClick = () => {
    //     setShow(true);
    //   };
      useEffect(() => {
        handleTotal();
      }, [cart]);
    
      if (cart.some((item) => item.length === 0)) {
        return (
          <div className="Empty">
            <h3 style={{ textAlign: "center", marginTop: "30px" }}>
              No Items to show
            </h3>
          </div>
        );
      }
    
      return (
        <div>
          {/* <Modals show={show} handleClose={handleClose} /> */}
          <table className="Table">
            <thead>
              <tr>
                <td>PRICE SUMMARY</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) =>
                // item.items.map((productItem) => (
                  <tr key={item._id}>
                    <td>{item.product.name}</td>
                    <td>{item.product.price}</td>
                  </tr>
                // ))
              )}
              <tr>
                <td>Total MRP (Incl. of taxes) </td>
                {/* {cart1.map((item) => ( */}
                  <td>{cart1.totalPrice}</td>
                {/* // ))} */}
              </tr>
              <tr>
                <td>Shipping Charges </td>
                <td>FREE</td>
              </tr>
              <tr>
                <td> Discount For More Than 10000 </td>
                <td>- ₹2999</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                {/* {cart1.map((item) => ( */}
                  <td>
                    {" "}
                    {cart1.totalPrice > 10000
                      ? cart1.totalPrice - 2999
                      : cart1.totalPrice}
                  </td>
                {/* // ))} */}
              </tr>
            </tbody>
          </table>
    
          <div className="Move">
            <div>
              TOTAL Rs.
              {/* {cart1.map((item) => ( */}
                <td>
                  {" "}
                  {cart1.totalPrice > 10000
                    ? cart1.totalPrice - 2999
                    : cart1.totalPrice}
                </td>
            {/* //   ))} */}
            </div>
            <div>
              <button
                disabled={cart.length === 0 ? true : false}
                // onClick={handleClick}
                style={{ backgroundColor: cart.length === 0 ? "grey" : "" }}
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      );
    };


export default CardTable
