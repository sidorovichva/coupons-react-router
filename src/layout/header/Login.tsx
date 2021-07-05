import React from 'react';
import './Login.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import AddCustomer from "../main/AddCustomer";
import {Link} from "react-router-dom";

const Login = (): JSX.Element => {

    const { registerWindow } = useSelector((state) => ConfigureStore.getState().PopUpWindowsSlicer);
    const dispatch = useDispatch();

    return (
        <div className="Login">
            <Link className="loginButton" to="/login">Login</Link>
            <ul className="dropdown">
                <Link className="Link" to="/add_customer">Register</Link>
            </ul>
            {registerWindow && <AddCustomer />}
        </div>
    );
}

export default Login;