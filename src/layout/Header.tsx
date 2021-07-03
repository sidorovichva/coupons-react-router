import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import './Header.css'
import {useSelector} from "react-redux";
import ConfigureStore from "../redux/StoreConfig";
import Logo from "./header/Logo";
import ThemeSwitch from "./header/ThemeSwitch";
import User from "./header/User";
import Companies from "./header/Companies";
import Customers from "./header/Customers";
import Coupons from "./header/Coupons";
import DropDownMenu from "./header/DropDownMenu";
import Login from "./header/Login";

const Header = (): JSX.Element => {

    const { email, role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Header" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            {/*<div className="left">*/}
                <Logo />
            {/*</div>*/}
            {/*<div className="right">*/}
                <Companies />
                {role === 'ADMINISTRATOR' && <Customers />}
                <Coupons />
                <DropDownMenu />
                {/*<Language />*/}
                <ThemeSwitch />
                {email !== '' && <User />}
                {email === '' && <Login />}
            {/*</div>*/}
        </div>
    );
}

export default Header;