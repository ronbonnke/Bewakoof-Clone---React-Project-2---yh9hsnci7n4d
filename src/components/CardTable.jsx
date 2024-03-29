import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Orders from "../pages/Orders";
import "../styles/cardtable/CardTable.css";
import Address from "../pages/Address";
import { useCurrentContext } from "../context/CurrentProvider";

const CardTable = () => {
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const {cart, setCart} = useCurrentContext([]);
  const [cart1, setCart1] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const getCartItems = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/cart",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            projectId: "ntymfpzixzjc",
          },
        }
      );
      const data = await response.json();
      setCart(data.data.items);
      setCart1(data.data);
      console.log("cart", cart);
      console.log("response", data.data);
    } catch (error) {
      console.error("Error fetching cart:", error.message);
    }
  };
  console.log("cart1",cart1);

  useEffect(() => {
    getCartItems();
  }, []);
  console.log("card", cart);

  const handleTotal = () => {
    setTotal(
      cart.reduce((acc, item) => acc + item.product.price, 0)
    );
  };

  // const handleClick = () => {
  //   navigate("/order");
  // };

  const handleClick = () => {
    // Place your order-related logic here
    // For now, let's just show the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
          {cart.map(
            (item) => (
              // item.items.map((productItem) => (
              <tr key={item._id}>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
              </tr>
            )
            // ))
          )}
          <tr>
            <td>Total MRP (Incl. of taxes) </td>
            {/* {cart1.map((item) => ( */}
            <td>{total}</td>
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
              {total> 10000
                ? total - 2999
                : total}
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
            {total > 10000
              ? total - 2999
              : total}
          </td>
          {/* //   ))} */}
        </div>
        <div>
          <button
            disabled={cart.length === 0 ? true : false}
            onClick={handleClick}
            style={{ backgroundColor: cart.length === 0 ? "grey" : "" }}
          >
            CONTINUE
          </button>
        </div>
        {showModal && <Address handleClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default CardTable;
