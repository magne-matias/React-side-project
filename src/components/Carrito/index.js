import React from 'react'
import Card from '../../images/g3.jpg'


export const Carrito =()=>{
    return(
        <div className="carritos">
            <div className="carrito">
                <div className="carrito_close">
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito mi pana</h2>
                <div className="carrito_center">
                    <div className="carrito_item">
                        <img src={Card} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}