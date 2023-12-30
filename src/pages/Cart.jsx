import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import Allcards from "../components/AllCards";
import "../styles/cart/Cart.css";

// import Other2 from "../components/Cart/Other2";
// import Others from "../components/Cart/Others";
// import Table from "../components/Cart/Table";
// import Tribe from "../components/Cart/Tribe";
// import { Circles } from "react-loader-spinner";
// import { getCartApi } from "../Store/Card/Card.action";
// import styles from "./styles/Cart.module.css";

const Cart = () => {
//   const dispatch = useDispatch();
//   const { loading, error, cart } = useSelector((state) => state.Cart);

  useEffect(() => {
    // dispatch(getCartApi());
  }, []);
//   console.log(cart);
//   if (loading) {
//     return (
//       <div className="Loader">
//         <Circles
//           height="650"
//           width="150"
//           color="#f6d951"
//           ariaLabel="circles-loading"
//           wrapperStyle={{}}
//           wrapperClass=""
//           visible={true}
//         />
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div className="Loader">
//         <h2>Error...</h2>
//       </div>
//     );
//   }
//   if (
//     !cart ||
//     cart.length === 0 ||
//     cart.some((item) => !item || !item.items || item.items.length === 0)
//   ) {
//     return (
//       <div className="Container1">
//         <div className="single">
//           <Others />
//           <Other2 />
//           <div className="Empty">
//             <h3 style={{ textAlign: "center", marginTop: "30px" }}>
//               Your Cart is Empty !
//             </h3>
//             <button onClick={() => navigate("/categories")}>Add Items</button>
//           </div>
//         </div>
//       </div>
//     );
//   }

  return (
    <div>
      <div className="Container2">
        <div className="single2">
          {/* <Others />

          < />
          < />

          <Other2 /> */}
          <Allcards />
        </div>
        <div className="double3">
          {/* <Tribe />
          <Content />
          
          <Table /> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;