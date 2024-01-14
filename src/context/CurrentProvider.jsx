import React,{useState, useEffect, createContext} from 'react'
import {useContext} from "react"



const CurrentContext = createContext();

function CurrentProvider({children}) {

    const [loginStatus, setLoginStatus] = useState(false);
    const [Number, setNum] = useState(true);
    const [forInput, setForInput] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [dummyreviews, setdummyReviews] = useState([]);
    const [mensClothes, setMensClothes] = useState([]);
    const [womensCloths, setWomensCloths] = useState([]);
    const [clothes, setClothes] = useState([]);
    const [cartNum, setCartnum] = useState([]);
    const [cart, setCart] = useState([]);

    const [address, setAddress] = useState({
      street: "", 
      city: "",
      state: "", 
      country: "",
      zipCode: "",
    });
    const [id,setId] = useState([]);
    
   

  return (
      <CurrentContext.Provider
    value={{
        cart,
        setCart,
        loginStatus,
        setLoginStatus,
        Number,
        setNum,
        forInput,
        setForInput,
        reviews,
        setReviews,
        dummyreviews,
        setdummyReviews,
        mensClothes,
        setMensClothes,
        womensCloths,
        setWomensCloths,
        clothes,
        setClothes,
        cartNum,
        setCartnum,
        address,
        setAddress,
        id,
        setId,
      }}>
        {children}
    </CurrentContext.Provider>
  )
}

export default CurrentProvider

export const useCurrentContext =() =>{
    return useContext(CurrentContext);
}
