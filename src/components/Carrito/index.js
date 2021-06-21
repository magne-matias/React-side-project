import React,{useContext} from 'react'
import Card from '../../images/g3.jpg'

import {DataContext} from '../../context/DataProvider'

export const Carrito =()=>{

    const value = useContext(DataContext)
    const [menu,setMenu] =value.menu;
    const [carrito, setCarrito]=value.carrito;

    const tooglefalse =()=>{
        setMenu(false);
    }

    const show1=menu ? "carritos show" : "carritos"
    const show2= menu ? "carrito show" : "carrito"

    return(
        <div className={show1}>
            <div className={show2}>
                <div className="carrito_close" onClick={tooglefalse} >
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito mi pana</h2>
                
                <div className="carrito_center">
                    {
                        carrito.map((producto)=>{
                            <div className="carrito_item">
                                <img src={producto.images} alt=""/>
                                <div>
                                    <h3> {producto.title}</h3>
                                    <p className="price">${producto.price} </p>
                                </div>
                                <div>
                                    <box-icon name="up-arrow" type="solid" ></box-icon>
                                    <p className="cantidad"> {producto.cantidad} </p>
                                    <box-icon name="down-arrow" type="solid" ></box-icon>
                                </div>
                                <div className="remove_item">
                                    <box-icon name="trash"></box-icon>
                                </div>
                            </div>
                        })
                    }
                </div>

                <div className="carrito_footer">
                    <h3>total: $2353</h3>
                    <button className="btn" >Payment</button>
                </div>
            </div>
        </div>
    )
}