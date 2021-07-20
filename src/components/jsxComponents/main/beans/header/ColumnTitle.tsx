import React from 'react';
import './ColumnTitle.css';

interface Props {
    func(): void,
    text: string,
    number: number,
    activeParam: number
}

const ColumnTitle: React.FC<Props> = ({ func, text, number, activeParam }): JSX.Element => {

    const doNothing = () => {};

    return (
        <div className="ColumnTitle"
            style={activeParam === number ? {
                backgroundColor: "green",
                color: "white",
                cursor: "pointer"
            } : {
                backgroundColor: "inherit"
            }}
            onClick={ activeParam === number ? func : doNothing }
            >{ text }
        </div>
    );
}

export default ColumnTitle;