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
    const [address, setAddress] = useState([]);
    
   

  return (
      <CurrentContext.Provider
    value={{
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
      }}>
        {children}
    </CurrentContext.Provider>
  )
}

export default CurrentProvider

export const useCurrentContext =() =>{
    return useContext(CurrentContext);
}
