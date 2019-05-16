import React from 'react'; 

import './style.css'; 

const SignIn = (props) => {

    return (
        <div className="sign-in-container">
            <article className="sign-in">
                <input id="userName" type="text"/>
                <input type="submit" onClick={props.signIn}/>
            </article>

            <div className="overlay"></div>
        </div>
    )

}

export default SignIn; 