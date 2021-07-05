import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import './Footer.css'
import FooterCell from "./footer/FooterCell";

interface Props {

}

const Footer: React.FC<Props> = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Footer" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <FooterCell className="largeScreen" title="ADMINISTRATOR" email="admin" pass="a"/>
            <div className="separator"> | </div>
            <FooterCell className="largeScreen" title="COMPANY" email="company" pass="com"/>
            <div className="separator"> | </div>
            <FooterCell className="largeScreen" title="CUSTOMER" email="customer" pass="cus"/>
            <FooterCell className="smallScreen" title="CUSTOMER" email="customer" pass="cus"/>
        </div>
    );
}

export default Footer;