import React from 'react'; 

import './style.scss'; 

const SignIn = (props) => {

    return (
        <div className="sign-in-container">
            <article className="sign-in">
                <h3>Enter your name.</h3>
                <input id="userName" type="text"/>
                <input type="submit" onClick={props.signIn} value="Sign In"/>
            </article>

            <div className="overlay"></div>
        </div>
    )

}

export default SignIn; 