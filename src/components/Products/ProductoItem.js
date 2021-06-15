import React from 'react'
import Img from "../../images/g1.jpg"


export const  ProductoItem=({
    id,
    title,
    price,
    image,
    category
}
    )=> {
    return (
        <div className="producto">
                <a href="#">
                    <div className="producto_img">
                        <img src={image} alt={title} width="200px" />
                    </div>
                </a>
                <div className="producto_footer">
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p className="price">${price}</p>
                </div>
                <div className="buttom">
                    <button className="btn">Añadir al carrito </button>
                    <div>
                        <a href="#" className="btn">Vista</a>
                    </div>
                </div>
        </div>
    )
}
