import React from 'react';
import './ProfileElement.css'

interface Props {
    description: string,
    data?: string,
    isChangeable?: boolean
}

const ProfileElement: React.FC<Props> = ({
    description,
    data,
    isChangeable
                                         }): JSX.Element => {


    return (
        <div className="ProfileElement">
            <div>{ description }:</div>
            <div className="dataField">{data}</div>
            {isChangeable && <button>Change</button>}
        </div>
    );
};

export default ProfileElement;