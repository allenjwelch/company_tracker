import React from 'react';
import { Link } from "react-router-dom";

import './style.scss';


const Header = (props) => {
    
    
    function toggleMobileMenu() {
        console.log('click')
        document.querySelector('header').classList.toggle('is-open');
    }

    console.log(props)
    return (
        
        <header>
            {
                props.user.length > 0 ? 
                <h2>Hello {props.user}!</h2> : 
                <h2>Welcome</h2>
            }

            <div className="mobile-menu" onClick={toggleMobileMenu}>
                <div className="bar"></div>
            </div>
            
            <div className="links">
                {
                    props.user.length > 0 ?
                    <>
                    <span onClick={props.signOut} className="header-links">Sign Out</span>
                    <Link to="/catalog" className="header-links">Catalog</Link>
                    <Link to="/compare" className="header-links">Compare</Link>
                    <Link to="/add" className="header-links">Add</Link>
                    </> :
                    <span onClick={props.signInModal} className="header-links">Sign In</span>
                }

            </div>

        </header>
    )

}

export default Header;
