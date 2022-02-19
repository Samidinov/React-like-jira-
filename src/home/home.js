import React from 'react';
import Menu from '../inc/menu';
import Content from './content';
import LeftNav from '../inc/navLeft'
const Home = () => {


    return(
        <small className="home__main-page">
            <Menu></Menu>
            <Content></Content>
            <LeftNav></LeftNav>
        </small>
    )
}
export default Home;