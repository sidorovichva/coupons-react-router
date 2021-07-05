import React, {SyntheticEvent, useEffect} from 'react';
import { useState } from 'react';
import './LoginWindow.css';
import {useDispatch, useSelector} from "react-redux";
import FormInput from "../../components/form/FormInput";
import FormSubmit from "../../components/form/FormSubmit";
import ConfigureStore from "../../redux/StoreConfig";
import {resetRequestMessage} from "../../redux/RequestMessageSlice";
import LoginPost from "../../components/main/actions/LoginPost";

const LoginWindow = (): JSX.Element => {

    const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);
    const { requestMessage } = useSelector((state) => ConfigureStore.getState().RequestMessageSlice);
    const dispatch = useDispatch();

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    useEffect(() => {
        if (field === 'loginUsername') setLoginUsername(value);
        else if (field === 'loginPassword') setLoginPassword(value);
        if (requestMessage !== '') dispatch(resetRequestMessage());
    }, [value, field])

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setBody(JSON.stringify({
            "username": loginUsername,
            "password": loginPassword,
        }));
        setIsSubmitted(true);
    }

    return (
        <form className="LoginWindow" onSubmit={ handleSubmit }>
            <div>
                <FormInput className="loginUsername" type="text" placeholder="e-mail" />
            </div>
            <div>
                <FormInput className="loginPassword" type="password" placeholder="password" />
            </div>
            <div>
                <FormSubmit />
            </div>
            {/*<div>*/}
            {/*    <FormRegister />*/}
            {/*</div>*/}
            <div className="message">{ requestMessage }</div>
            {isSubmitted && <LoginPost body={body} />}
        </form>
    )
}

export default LoginWindow;