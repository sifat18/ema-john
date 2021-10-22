import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Utils/useAuth';
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className='head'>
            <div className='gg'>
                <img src={logo} alt="" />
            </div>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/orders'>OrderReview</NavLink>
                <NavLink to='/inventory'>Inventory</NavLink>
                {!user.email ?
                    <NavLink to='/login'>Login</NavLink> :
                    <button onClick={logOut}>LogOut</button>
                }
            </nav>
        </div>
    );
};

export default Header;