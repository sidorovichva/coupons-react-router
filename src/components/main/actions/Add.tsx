import React from 'react';
import usePost from "../../../hooks/usePost";

interface Props {
    link: string
    body: string
}

const Add: React.FC<Props> = ({link, body}) => {

    usePost(link, body);

    console.log(body);

    return (
        <div className="Add">

        </div>
    );
};

export default Add;