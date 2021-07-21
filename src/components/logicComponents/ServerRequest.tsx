import React from 'react';
import useAxios from "../../hooks/axiosHooks/useAxios";
import {Method} from "axios";
import {ClientURL} from "../../enums/ClientURL";
import useHistoryPush from "../../hooks/useHistoryPush";

interface Props {
    method: Method,
    link: string
    pushSuccess: ClientURL,
    pushFail: ClientURL
    body?: string
}

const ServerRequest: React.FC<Props> = ({
    method,
    link,
    pushSuccess,
    pushFail,
    body
}) => {

    useHistoryPush(pushSuccess, pushFail);

    useAxios(link, method, body);

    return (
        <div className="ServerRequest">

        </div>
    );
}

export default ServerRequest;