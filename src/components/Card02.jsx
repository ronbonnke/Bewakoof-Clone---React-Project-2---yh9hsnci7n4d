import React from "react";
// import { useDispatch } from "react-redux";
// import { changeCart, deleteCartApi,getCartApi } from "../../Store/Card/Card.action";
import "../styles/cart/Card02.css";

const Card02 = ({ item }) => {
//   const dispatch = useDispatch();
  const handleDelete = () => {
    // dispatch(deleteCartApi(Item.product._id));
    // dispatch(getCartApi());
    // dispatch()
    // const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    // console.log("existingCart", existingCart);

    // const updatedCart = existingCart.filter(
    //   (cartItem) => cartItem.product._id !== Item.product._id
    // );
    // localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // const handleChange = (e) => {
  //   dispatch(changeCart(Item._id, Number(e.target.value)));
  // };
  console.log(item.product._id);
  return (
    <div className="Cont">
      <div className="contain">
        <div className='One'>
          <p className="title">{item.product.name}</p>

          <div className="Price">
            <p>₹{item.product.price}</p>
            <p>Size : {item.size}</p>
            {/* <p>₹{Item.actualPrice.toString()}</p> */}
          </div>

          {/* <p className=green}>
            You Saved ₹ {Number(Item.actualPrice) - Number(Item.price)}
          </p> */}

          <div className="Select">
            <select name="Sizes" id="">
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">2XL</option>
              <option value="">3XL</option>
            </select>
            <select
              // value={Item.qty.toString()}
              name=""
              id=""
              // onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="Two">
          <img src={item.product.displayImage} alt="product image" />
        </div>
      </div>
      <div className="Options">
        <button onClick={handleDelete}>REMOVE</button>
        
      </div>
    </div>
  );
};

export default Card02;