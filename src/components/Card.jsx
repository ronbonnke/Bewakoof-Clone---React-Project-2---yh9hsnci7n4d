import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/mens/Mens.css'

import { Image } from "semantic-ui-react";

const Card = ({ item }) => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const handleChange = () => {
    setFlag(!flag);
  };
  const handleNavigate = () => {
    navigate("/Product" + "/" + item._id);
  };
  console.log("detailpage",item._id);
  return (
    <div
      className="Item"
      onMouseEnter={handleChange}
      onMouseLeave={handleChange}
      onClick={handleNavigate}
    >
      <div>
        <Image src={item.displayImage} alt="Not Available" />
      </div>

      <p className="p1">Bewakoof</p>
      <p className="p2">{item.name}</p>
      <div className="price">
        <p>₹{item.price}</p>
        <p>Ratings {item.ratings.toFixed(1)}</p>
      </div>
      <p className="tribe">₹419 off for Tribe Members</p>
    </div>
  );
};

export default Card;