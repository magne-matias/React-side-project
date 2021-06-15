import React from 'react'
import logo from "../../images/logo1.png"
import {Link} from 'react-router-dom'



export const Header = () => {
    return (
        <header>
        <div className="menu">
          <box-icon name="menu"></box-icon>
        </div>
        
        <Link to="/">
            <div className="logo">
                <img src={logo} alt="logo" width="100px"/>
            </div>
        </Link>
        
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/productos">Productos</Link>
            </li>
        </ul>
        <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item_total">0</span>
        </div>
      </header>
    )
}
