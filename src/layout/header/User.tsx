import React from 'react';
import './User.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {Link} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {Role} from "../../enums/Role";
import LogOut from "../../components/logicComponents/LogOut";
import UserIcon from "../../components/jsxComponents/icons/UserIcon";

const User = (): JSX.Element => {

    const { email } = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const { handleLogout } = LogOut();

    return (
        <div className="User">
            <UserIcon />
            <div className="userEmail">
                &nbsp; { email !== null ? email.split('@')[0] : email}
            </div>
            <ul className="dropdown">
                {role !== 'ADMINISTRATOR' && <Link className="Link" to={ role === Role.CUSTOMER ? ClientURL.profileCustomer : ClientURL.profileCompany}>My Profile</Link>}
                <li onClick={ handleLogout }>Logout</li>
            </ul>
        </div>
    );
}

export default User;