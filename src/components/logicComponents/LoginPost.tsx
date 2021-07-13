import React from 'react';
import useLogin from "../../hooks/axiosHooks/useLogin";

interface Props {
    body: string
}

const LoginPost: React.FC<Props> = ({body}) => {

    useLogin(body);

    return (
        <div className="LoginPost">

        </div>
    );
};

export default LoginPost;