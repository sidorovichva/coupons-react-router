import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {useDispatch} from "react-redux";
import {setHistoryPushLink} from "../../redux/HistoryPushSlice";

const Login = (): JSX.Element => {

    const dispatch = useDispatch();

    const handleRegister = () => {
        console.log("^^^")
        dispatch(setHistoryPushLink({
            historyPushSuccessValue: ClientURL.login,
            historyPushFailValue: ClientURL.addCustomer
        }))
    }

    return (
        <div className="Login">
            <Link className="loginButton" to={ ClientURL.login }>Login</Link>
            <ul className="dropdown">
                <Link className="Link" to={ ClientURL.addCustomer } onClick={handleRegister}>Register</Link>
            </ul>
        </div>
    );
}

export default Login;