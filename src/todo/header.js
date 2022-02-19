import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <small className="navbar navbar-expand navbar-light bg-secondary p-0" style={{display:'fixed', top:'0'}}>
            <Link to="/"><i className="ml-2 bg-white p-2 rounded fa fa-columns"></i></Link>
            <Link to="/home" className="ml-2 bg-white p-2 rounded fa fa-home text-dark" style={{textDecoration:'none'}}></Link>
            <Link to="/todo" className="ml-2 bg-white p-2 rounded fa fa-th-list text-dark" style={{textDecoration:'none'}}> Таблицы</Link>
        
        </small>
    )
}
export default Header;