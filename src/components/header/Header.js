import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=''/>
            <div>
                <a to="/">Shop</a>
                <a to="/orders">Orders</a>
                <a to="/inventory">Inventory</a>
                <a to="/shipping">Shipping</a>
                <a to="/about">About</a>
                
            </div>
        </nav>
    );
};

export default Header;