import React,{useState, useEffect, createContext} from 'react'
import Data from 'Data.js'
export const DataContext =createContext();

export const DataProvider=(props)=>{
    const [productos, setProdcutos] = useState([])

    useEffect(() =>{
        const producto = Data
    },[])
}

