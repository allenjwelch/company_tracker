import React from 'react'; 
import { Link } from "react-router-dom";

import './style.css'; 

const Header = (props) => {

    return (
        <header>
            {
                props.user.length > 0 ? <h1>Hello {props.user}!</h1> : <h1>Welcome</h1>
            }
            <div className="links">
                {
                    props.user.length > 0 ?
                    <span onClick={props.signOut} className="header-links">Sign Out</span> :
                    <span onClick={props.signInModal} className="header-links">Sign In</span>
                }
                <Link to="/" className="header-links">Home</Link>
                <Link to="/about" className="header-links">About</Link>
            </div>
        </header>
    )

}

export default Header; 