import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/payments/BankCardNo.css'
import { useCurrentContext } from '../context/CurrentProvider';

const BankCardNo = () => {
  const navigate = useNavigate();
//   const { address } = useSelector((state) => state.states);
const {cart,setCart,address} = useCurrentContext();
console.log("cart",cart)


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
    
  const orderDataArray = [];
    e.preventDefault();
    const item = cart.some((item) =>{
        console.log("id", item.product._id);
        const orderData = {
          productId: item.product._id,
          quantity: 1,
          addressType: "HOME",
          address,
        };
        console.log("orderData",orderData)

        setShow(true);
        console.log(formValues); 
        orderDataArray.push(orderData);

    })

    try {
        // Make the API call to submit the order
        const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(orderDataArray),
        });
    
        const data = await response.json();
    
        // Check if the API call is successful
        if (data.success) {
          // Your success logic here
          console.log("Order submitted successfully");
          navigate("/success"); // Redirect to a success page or handle as needed
        } else {
          // Handle API response with errors
          const error = data.error || "Unknown error";
          console.error("Order submission failed:", error);
        }
      } catch (error) {
        // Handle errors during the API call
        console.error("Network error:", error);
      }



    // for (const item of cart) {
    //   for (const productItem of item.product) {
    //     console.log("id", productItem);
    //     const orderData = {
    //       productId: productItem._id,
    //       quantity: 1,
    //       address,
    //     };
    //     console.log("orderData",orderData)

    //     setShow(true);
    //     console.log(formValues);
    //   }
    // }




  };

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };


  console.log("")
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
        <button type="submit" className="bon" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BankCardNo;
