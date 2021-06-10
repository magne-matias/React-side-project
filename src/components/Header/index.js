import React from 'react'
import logo from "../../images/logo1.png"


export const Header = () => {
    return (
        <header>
        <div className="menu">
          <box-icon name="menu"></box-icon>
        </div>
        <a href="#">
            <div className="logo">
                <img src={logo} alt="logo" width="100px"/>
            </div>
        </a>
        <ul>
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <a href="#">Productos</a>
            </li>
        </ul>
        <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item_total">0</span>
        </div>
      </header>
    )
}
