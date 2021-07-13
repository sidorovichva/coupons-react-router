import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import './Footer.css'
import FooterCell from "./footer/FooterCell";
import DefineNumber from "../components/logicComponents/DefineNumber";

const Footer = ():JSX.Element => {

    const { userNumber } = DefineNumber();

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Footer" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <FooterCell className="largeScreen" num={0}/>
            <div className="separator"> | </div>
            <FooterCell className="largeScreen" num={1}/>
            <div className="separator"> | </div>
            <FooterCell className="largeScreen" num={2}/>
            <div className="smallScreen">
                <FooterCell className="smallScreen" num={ userNumber }/>
            </div>
        </div>
    );
}

export default Footer;