import React from 'react';
import useAxios from "../../hooks/axiosHooks/useAxios";
import {Method} from "axios";

interface Props {
    method: Method,
    link: string
    body?: string
}

const ServerRequest: React.FC<Props> = ({method, link, body}) => {

    console.log(body)
    console.log(link)

    useAxios(link, method, body);

    return (
        <div className="ServerRequest">

        </div>
    );
};

export default ServerRequest;