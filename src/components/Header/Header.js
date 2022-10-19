import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    let backGround = "red";

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                    isActive ? 'active' : undefined
                    }
                >
                    Home
                </NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                {
                    user?.uid
                        ?
                            <button onClick={logOut}>Log Out</button>    
                        :
                            <>
                                <NavLink to="/login">Log In</NavLink>
                                <NavLink to="/register">Register</NavLink>
                            </>
                }
            </div>
        </nav>
    );
};

export default Header;