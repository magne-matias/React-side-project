import React from 'react'
import Img from "../../images/g1.jpg"


export const ProductsList = () => {
    return (
    <>{/*remember bro; esto sirve para que no retorne al pader solo a los hijos */}
        <h1 className="title">PRODUCTOS</h1>
        <div className="Productos">
            <div className="producto">
                <a href="">
                    <div className="producto_img">
                        <img src={Img} alt="img" width="200px" />
                    </div>
                </a>
                <div className="producto_footer">
                    <h1>title</h1>
                    <p>categoria</p>
                    <p className="price">$320</p>
                </div>
                <div className="button">
                    <button className="btn">Añadir al carrito </button>
                </div>
                <div>
                    <a href="#" className="btn">Vista</a>
                </div>
            </div>
        </div>
    </>
    )
}

