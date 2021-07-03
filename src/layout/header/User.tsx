import React from 'react';
import './User.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {unAuthorize} from "../../redux/LoginSlice";
import {coupons} from "../../redux/MainScreenSlicer";

const User = (): JSX.Element => {

    const { email } = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const dispatch = useDispatch();

    const handleProfile = () => {

    }

    const handleLogout = () => {
        dispatch(unAuthorize());
        localStorage.setItem("Username", '');
        localStorage.setItem("Role", '');
        localStorage.setItem("Authorization", '');
        dispatch(coupons());
    }

    return (
        <div className="User">
            { email }
            <ul className="dropdown">
                <li onClick={ handleProfile }>My profile</li>
                <li onClick={ handleLogout }>Logout</li>
            </ul>
        </div>
    );
}

export default User;