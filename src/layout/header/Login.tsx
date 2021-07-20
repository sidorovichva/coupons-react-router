import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import useFoldMenu from "../../hooks/useFoldMenu";

const Login = (): JSX.Element => {

    const { foldMenu, isFolded } = useFoldMenu();

    return (
        <div className="Login">
            <Link className="loginButton" to={ ClientURL.login }>Login</Link>
            {isFolded && <ul className="dropdown">
                <Link className="Link" to={ ClientURL.addCustomer } onClick={ foldMenu }>Register</Link>
            </ul>}
        </div>
    );
}

export default Login;