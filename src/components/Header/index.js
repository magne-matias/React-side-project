import React,{useContext} from 'react'
import logo from "../../images/logo1.png"
import {Link} from 'react-router-dom'
import {DataContext} from '../../context/DataProvider'


export const Header = () => {

    const value = useContext(DataContext)
    const [menu,setMenu]= value.menu;
    const [carrito]=value.carrito

    const toogleMenu=()=>{
        setMenu(!menu)
    }


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
        <div className="cart" onClick={toogleMenu} >
            <box-icon name="cart"></box-icon>
            <span className="item_total">{carrito.length}</span>
        </div>
      </header>
    )
}
