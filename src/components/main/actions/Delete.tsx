import React from 'react';
import useDelete from "../../../hooks/useDelete";

interface Props {
    link: string
}

const Delete: React.FC<Props> = ({link}) => {

    console.log("delete")
    useDelete(link)

    return (
        <div className="Delete">

        </div>
    );
};

export default Delete;