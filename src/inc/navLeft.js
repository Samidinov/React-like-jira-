import React from 'react';
import {Link} from 'react-router-dom'
import './inc.css'

const Menu = () => {
    
    
    return(
            <ul className="menu__navbar-left">
                <Link to='/aboutUs' className="menu__navbar-item text-dark"><i className="fa fa-building mr-2"></i>Один</Link>
                <Link to='/aboutUs' className="menu__navbar-item text-dark"><i className="fa fa-building mr-2"></i>Два</Link>
                <Link to='/aboutUs' className="menu__navbar-item text-dark"><i className="fa fa-building mr-2"></i>Три</Link>
                <Link to='/aboutUs' className="menu__navbar-item text-dark"><i className="fa fa-building mr-2"></i>Четыре</Link>
                <Link to='/aboutUs' className="menu__navbar-item text-dark"><i className="fa fa-building mr-2"></i>Пять</Link>
            </ul>
    )
}
export default Menu;