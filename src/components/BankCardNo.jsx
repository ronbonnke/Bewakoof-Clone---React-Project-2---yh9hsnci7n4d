import React, { useState } from "react";
import '../styles/payments/BankCardNo.css'
import { useNavigate } from "react-router-dom";
import { useCurrentContext } from '../context/CurrentProvider';

const BankCardNo = () => {
  const navigate = useNavigate();
  const { cart, address } = useCurrentContext();
  console.log("cart", cart);

  const [formValues, setFormValues] = useState({
    name: "",
    card: "",
    cvv: "",
    date: "",
  });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    

    try {
      // Use Promise.all to wait for all API calls to complete
      await Promise.all(cart.map(async (item) => {
        console.log("id", item.product._id);
        const orderData = {
          productId: item.product._id,
          quantity: 1,
          addressType: "HOME",
          address,
        };
        console.log("orderData", orderData);

        setShow(true);
        console.log(formValues);

        const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "projectId": "ntymfpzixzjc", // Make sure this is the correct projectId and it's a string
          },
          body: JSON.stringify(orderData),
        });
        
        

        const data = await response.json();

        if (data.success) {
          console.log("Order submitted successfully");
          navigate("/success");
        } else {
          const error = data.error || "Unknown error";
          console.error("Order submission failed:", error);
        }
      }));
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <div>
      {/* <SuccessModal */}
      {/* show={show} */}
      {/* handleClose={handleClose} */}
      {/* message={"Your Payment Was Successfully completed "} */}
      {/* /> */}
      <form onSubmit={handleSubmit} className="modelpayment">
        <div className="mb">
          <label htmlFor="formBasicEmail" className="form-label">
            Card Number
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Card Number"
            name="card"
            required
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <div className="mb">
            <label htmlFor="formBasicEmail" className="form-label">
              Expiry Date
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Expiry Date"
              name="date"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb">
            <label htmlFor="formBasicEmail" className="form-label">
              Cvv
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Cvv"
              name="cvv"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb">
          <label htmlFor="formBasicEmail" className="form-label">
            Name On Card
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name On Card"
            name="name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="formBasicCheckbox"
            checked={true}
            readOnly
          />
          <label className="form-check-label" htmlFor="formBasicCheckbox">
            Save card details for later
          </label>
        </div>
        <p>
          This transaction you make is totally secure. We don't save your CVV
          number.
        </p>
        <button type="submit" className="bon">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BankCardNo;
