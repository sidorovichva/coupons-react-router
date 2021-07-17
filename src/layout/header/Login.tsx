import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {useDispatch} from "react-redux";
import {setHistoryPushLink} from "../../redux/HistoryPushSlice";
import useFoldMenu from "../../hooks/useFoldMenu";

const Login = (): JSX.Element => {

    // const dispatch = useDispatch();
    //
    // const handleRegister = () => {
    //     dispatch(setHistoryPushLink({
    //         historyPushSuccessValue: ClientURL.login,
    //         historyPushFailValue: ClientURL.addCustomer
    //     }))
    // }

    const { foldMenu, isFolded } = useFoldMenu();

    return (
        <div className="Login">
            <Link className="loginButton" to={ ClientURL.login } onClick={ foldMenu }>Login</Link>
            {isFolded && <ul className="dropdown">
                <Link className="Link" to={ ClientURL.addCustomer } onClick={ foldMenu }>Register</Link>
            </ul>}
        </div>
    );
}

export default Login;