import React from 'react'
import Portada from '../../images/logo1.png'
import {Link} from 'react-router-dom'



export const Inicio= ()=> {
    return (
        <div className="inicio">
            <Link to="/">
                <h1 >inicio</h1>
            </Link>
            <Link to="/products">
                <h1 >Productos</h1>
            </Link>
            <img src={Portada} alt="inicio" />
        </div>
    )
}
