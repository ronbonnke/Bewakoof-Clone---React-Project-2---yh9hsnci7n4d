import React,{useState, useEffect, createContext} from 'react'
import {useContext} from "react"



const CurrentContext = createContext({children});

function CurrentProvider() {
  return (
    <CurrentContext.Provider>

    </CurrentContext.Provider>
  )
}

export default CurrentProvider
