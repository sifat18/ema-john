import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='head'>
            <div className='gg'>
                <img src={logo} alt="" />
            </div>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/orders'>OrderReview</NavLink>
                <NavLink to='/inventory'>Inventory</NavLink>

            </nav>
        </div>
    );
};

export default Header;