import React,{useContext} from 'react'
import {DataContext} from "../../context/DataProvider"
import {ProductoItem} from './ProductoItem'

export const ProductsList = () => {
    
    const value = useContext(DataContext)
    const [productos]=value.productos
    
    console.log(productos)
    
    return (
    <>{/*remember bro; esto sirve para que no retorne al pader solo a los hijos */}
        <h1 className="title">PRODUCTOS</h1>
        <div className="Productos">
        {
            productos.map((producto =>(
                <ProductoItem key={producto.id} 
                    id={producto.id}
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    category={producto.category}
                    cantidad={producto.cantidad}
                />
            )))
        }
        </div>
    </>
    )
}

