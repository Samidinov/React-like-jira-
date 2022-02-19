import React from 'react';
import {Link} from 'react-router-dom'
import './inc.css'

const Menu = () => {
    
    
    return(
            <ul className="menu__navbar">
            <Link to='/boards' className="menu__navbar-item text-dark"><i className="fa fa-columns mr-2"></i>Доски </Link>
            <Link to='/home' className="menu__navbar-item text-dark"><i className="fa fa-home mr-2"></i>Главная страница</Link>
            <Link to='' className="menu__navbar-item text-dark"><i className="fa fa-building mr-2"></i>О нас</Link>
            </ul>
    )
}
export default Menu;