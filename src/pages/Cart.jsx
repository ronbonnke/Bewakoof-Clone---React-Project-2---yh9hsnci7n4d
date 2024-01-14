import { useEffect } from "react";
import Allcards from "../components/AllCards";
import "../styles/cart/Cart.css";
import CardTable from "../components/CardTable";

const Cart = () => {

  return (
    <div>
      <div className="Container2">
        <div className="single2">
          <Allcards />
        </div>
        <div className="double3">
          {/*  <Tribe /> */}
          {/* <Content /> */}
          
          <CardTable />
        </div>
      </div>
    </div>
  );
};

export default Cart;