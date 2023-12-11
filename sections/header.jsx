import React from 'react';
import { useState } from 'react';
import logo from '../assets/Dhaba.png';

import './header.css';



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='header'>
            <div className='header-img'>          
                <img className = 'header-img_img' alt='logoimage' src= {logo} />
                
            </div>



            <div class="nav-items">
                <a href="#" class="nav-item">Home</a>
                <a href="#" class="nav-item">About</a>
                <a href="#" class="nav-item">Contact</a>
                <a href="#" class="nav-item">Cart</a>
            </div>

            

            {(isLoggedIn) ? <button onClick = {() => setIsLoggedIn(false)} class="login-button">Log Out</button> : <button onClick = {() => setIsLoggedIn(true)} class="login-button">Log In</button>}

            

        </div>
    )
}


export default Header;