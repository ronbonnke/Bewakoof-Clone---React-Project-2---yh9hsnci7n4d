import React from "react";
import "../styles/modal/Order.css";

const Orders = ({ handleClose, total }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Your Order Has Been Placed!</h2>
          <button onClick={handleClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p>Total Amount: Rs. {total}</p>
          {/* You can add more details or customize this as needed */}
        </div>
      </div>
    </div>
  );
};

export default Orders;
