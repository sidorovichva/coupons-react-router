import React from 'react';
import useLogin from "../../hooks/axiosHooks/useLogin";
import useHistoryPush from "../../hooks/useHistoryPush";
import {ClientURL} from "../../enums/ClientURL";

interface Props {
    body: string
    pushSuccess: ClientURL,
    pushFail: ClientURL
}

const LoginPost: React.FC<Props> = ({
    body,
    pushSuccess,
    pushFail
}) => {

    useHistoryPush(pushSuccess, pushFail);

    useLogin(body);

    return (
        <div className="LoginPost">

        </div>
    );
};

export default LoginPost;