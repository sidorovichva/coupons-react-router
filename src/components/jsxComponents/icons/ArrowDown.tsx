import React, {useState} from 'react';
import './arrowDown.css';

const ArrowDown = (): JSX.Element => {

    const [theme, setTheme] = useState(false);

    const change = () => {
        setTheme(!theme);
    }

    return (
        <svg viewBox="0 0 24 24" onClick={change}>
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
        </svg>
    );
}

export default ArrowDown;