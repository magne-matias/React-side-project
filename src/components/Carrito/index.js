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
                        <img src={Card} alt="" width="100px"/>
                        <div>
                            <h3>title</h3>
                            <p className="price">$350</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid" ></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid" ></box-icon>
                        </div>
                        <div className="remove_item">
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}