import React from 'react';
import { useState } from 'react';
import logo from '../assets/Dhaba.png';

import { Link } from 'react-router-dom';
import './header.css';



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='header'>
            <div className='header-img'>          
                <img className = 'header-img_img' alt='logoimage' src= {logo} />
                
            </div>



            <div class="nav-items">
                <Link to = "/" class="nav-item">Home</Link>
                <Link to = "/aboutus" class="nav-item">About</Link>
                <Link to = "/contact" class="nav-item">Contact</Link>
                <Link to = "/" class="nav-item">Cart</Link>

            </div>

            

            {(isLoggedIn) ? <button onClick = {() => setIsLoggedIn(false)} class="login-button">Log Out</button> : <button onClick = {() => setIsLoggedIn(true)} class="login-button">Log In</button>}

            

        </div>
    )
}


export default Header;