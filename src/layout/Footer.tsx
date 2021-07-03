import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import './Footer.css'

interface Props {

}

const Footer: React.FC<Props> = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Footer" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <div>ADMINISTRATOR e-mail:"admin" password:"a"</div>
            <div> | </div>
            <div>COMPANY: e-mail:"company" password:"com"</div>
            <div> | </div>
            <div>CUSTOMER: e-mail:"customer" password:"cus"</div>
        </div>
    );
}

export default Footer;