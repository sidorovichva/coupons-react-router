import React from 'react';
import './Login.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {openWindow} from "../../redux/PopUpWindowsSlicer";
import AddCustomer from "../../components/AddCustomer";
import LoginWindow from "../../components/LoginWindow";

const Login = (): JSX.Element => {

    const { loginWindow, registerWindow } = useSelector((state) => ConfigureStore.getState().PopUpWindowsSlicer);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(openWindow({stateName: 'loginWindow'}))
    }

    const handleRegister = () => {
        dispatch(openWindow({stateName: 'registerWindow'}))
    }

    return (
        <div className="Login">
            <div className="loginButton" onClick={ handleLogin }>Login</div>
            <ul className="dropdown">
                <li onClick={ handleRegister }>Register</li>
            </ul>
            {loginWindow && <LoginWindow />}
            {registerWindow && <AddCustomer />}
        </div>
    );
}

export default Login;