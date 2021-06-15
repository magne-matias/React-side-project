import React,{useState, useEffect, createContext} from 'react'
import Data from '../Data'
export const DataContext =createContext();

export const DataProvider=(props)=>{
    const [productos, setProdcutos] = useState([])

    useEffect(() =>{
        const producto = Data
        setProdcutos(producto)
    },[])

    const value ={
        productos:[productos]
    }

    return(
        <DataContext.Provider value ={value}>
            {props.children}
        </DataContext.Provider>
    )
}

