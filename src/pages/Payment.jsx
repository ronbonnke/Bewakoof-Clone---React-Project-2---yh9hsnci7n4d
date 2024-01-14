import React, { useEffect } from "react";
import { useCurrentContext } from "../context/CurrentProvider";
import PaymentMethod from "../components/PaymentMethod";
import "../styles/payments/Payment.css";
// import styles from "./styles/Pay.module.css";
// import Navigator from "../components/Payement/Navigator";
// import Card from "../components/Mens/Card";
import Card from "../components/Card";
// import Table from "../components/Cart/Table";
// import { useDispatch, useSelector } from "react-redux";
// import { getCartApi } from "../Store/Card/Card.action";

const Payment = () => {
  //   const { cart2 } = useSelector((state) => state.Cart);
  //   const dispatch = useDispatch();
  const { cart, setCart } = useCurrentContext();
//   const { id,setId } = useCurrentContext();
//   console.log("id",id)
 
  

  useEffect(() => {
    // dispatch(getCartApi());
  }, []);
  console.log("payment", cart.items);

  return (
    <>
      <div className="containe">
        <div>
          <h5 className="Heading-z">Choose your payment method</h5>
          {/* <Navigator /> */}
          <PaymentMethod />
        </div>
        <div>
          <div className="Header-z">
            <h6 className="Heading-z">Items You are paying for</h6>
          </div>
          <div>
            {cart.map((item) =>
            

             {
                
              return (<Card item={item.product} key={item._id} />);
            })}
          </div>

          {/* //   <Table /> */}
        </div>
      </div>
    </>
  );
};

export default Payment;
