import React from 'react';
import usePut from "../../../hooks/usePut";

interface Props {
    link: string
    body: string
}

const Update: React.FC<Props> = ({link, body}) => {

    usePut(link, body)

    return (
        <div className="Update">

        </div>
    );
};

export default Update;