import React from 'react';
import './FormHeader.css';

interface Props {
    title: string
}

const FormHeader: React.FC<Props> = ({ title}) => {

    return (
        <div className="FormHeader">
            <header>{ title }</header>
        </div>
    );
};

export default FormHeader;