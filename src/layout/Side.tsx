import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

interface Props {

}

const Side: React.FC<Props> = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Side" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>

        </div>
    );
}

export default Side;