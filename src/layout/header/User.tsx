import React from 'react';
import './User.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {Link} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {Role} from "../../enums/Role";
import LogOut from "../../components/logicComponents/LogOut";

const User = (): JSX.Element => {

    const { email } = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const { handleLogout } = LogOut();

    return (
        <div className="User">
            <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M21.1,12.5L22.5,13.91L15.97,20.5L12.5,17L13.9,15.59L15.97,17.67L21.1,12.5M11,
                4A4,4 0 0,1 15,8A4,4 0 0,1 11,12A4,4 0 0,1 7,8A4,4 0 0,1 11,4M11,6A2,2 0 0,0 9,8A2,2 0 0,0 11,10A2,2 0 0,
                0 13,8A2,2 0 0,0 11,6M11,13C11.68,13 12.5,13.09 13.41,13.26L11.74,14.93L11,14.9C8.03,14.9 4.9,16.36 4.9,
                17V18.1H11.1L13,20H3V17C3,14.34 8.33,13 11,13Z" />
            </svg>
            <div className="userEmail">
                &nbsp; { email }
            </div>
            <ul className="dropdown">
                <Link className="Link" to={ role === Role.CUSTOMER ? ClientURL.profileCustomer : ClientURL.profileCompany}>My Profile</Link>
                <li onClick={ handleLogout }>Logout</li>
            </ul>
        </div>
    );
}

export default User;