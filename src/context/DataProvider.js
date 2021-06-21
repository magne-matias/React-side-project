import React,{useState, useEffect, createContext} from 'react'
import Data from '../Data'


export const DataContext =createContext();

export const DataProvider=(props)=>{
    const [productos, setProductos] = useState([])
    const [menu, setMenu]=useState(false);
    const [carrito, setCarrito]= useState([])

    useEffect(() =>{
        const producto = Data.items
        if(producto){
            setProductos(producto) 
        }else{
            setProductos([])
        }
    },[])

    const value ={
        productos:[productos],
        menu: [menu, setMenu]
    }

    return(
        <DataContext.Provider value ={value}>
            {props.children}
        </DataContext.Provider>
    )
}

