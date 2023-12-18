import React,{useState, useEffect, createContext} from 'react'
import {useContext} from "react"



const CurrentContext = createContext();

function CurrentProvider({children}) {

    const [loginStatus, setLoginStatus] = useState(false);
    // const [logout, setLogout] = useState([]);
    const [Number, setNum] = useState(true);
   

  return (
      <CurrentContext.Provider
    value={{
        loginStatus,
        setLoginStatus,
        Number,
        setNum,
      }}>
        {children}
    </CurrentContext.Provider>
  )
}

export default CurrentProvider

export const useCurrentContext =() =>{
    return useContext(CurrentContext);
}
