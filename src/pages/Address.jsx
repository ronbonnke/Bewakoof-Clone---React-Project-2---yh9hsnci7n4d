import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/address/Address.css";

const Address = ({ handleClose }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    country: "India",
    fullName: "",
    mobile: "",
    zipCode: "",
    city: "",
    state: "",
    street: "",
    areaLocality: "",
    landmark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { street, city, state, country, zipCode } = formValues;
    const addressData = { street, city, state, country, zipCode };
    navigate("/payment");
  };

  return (
    <div className="modal-container">
      <form className="address-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="country">Select Your Country</label>
          <select
            name="country"
            value={formValues.country}
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <hr />

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            placeholder="Your Full Name"
            required
            name="fullName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="number"
            placeholder="Mobile Number"
            required
            name="mobile"
            onChange={handleChange}
          />
        </div>

        <hr />

        <div className="form-group">
          <label htmlFor="zipCode">Pin code</label>
          <input
            type="text"
            placeholder="Pin code"
            required
            name="zipCode"
            onChange={handleChange}
          />
        </div>

        <div className="flex-container">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="City"
              required
              name="city"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              placeholder="State"
              required
              name="state"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="street">Flat no./Building, Street name</label>
          <input
            type="text"
            placeholder="Flat no./Building, Street name"
            required
            name="street"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="areaLocality">Area/Locality</label>
          <input
            type="text"
            placeholder="Area/Locality"
            required
            name="areaLocality"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="landmark">Landmark (Optional)</label>
          <input
            type="text"
            placeholder="Landmark (Optional)"
            name="landmark"
            onChange={handleChange}
          />
        </div>

        <div className="button-container">
          <button onClick={handleClose}>Cancel</button>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default Address;
