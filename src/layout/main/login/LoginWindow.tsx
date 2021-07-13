import React, {SyntheticEvent, useEffect} from 'react';
import { useState } from 'react';
import './LoginWindow.css';
import {useDispatch, useSelector} from "react-redux";
import FormSubmit from "../../../components/jsxComponents/main/form/FormSubmit";
import ConfigureStore from "../../../redux/StoreConfig";
import LoginPost from "../../../components/logicComponents/LoginPost";
import {setHistoryPushLink} from "../../../redux/HistoryPushSlice";
import {ClientURL} from "../../../enums/ClientURL";
import TextInput from "../../../components/jsxComponents/main/form/TextInput";
import {RegexPattern} from "../../../enums/RegexPattern";
import PasswordInput from "../../../components/jsxComponents/main/form/PasswordInput";

const LoginWindow = (): JSX.Element => {

    const { value, field } = useSelector((state) => ConfigureStore.getState().InputSlice);
    const dispatch = useDispatch();

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    useEffect(() => {
        if (field === 'loginUsername') setLoginUsername(value);
        else if (field === 'loginPassword') setLoginPassword(value);
    }, [value, field])

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setBody(JSON.stringify({
            "username": loginUsername,
            "password": loginPassword,
        }));
        dispatch(setHistoryPushLink({
            historyPushSuccessValue: ClientURL.allCoupons,
            historyPushFailValue: ClientURL.login
        }))
        setIsSubmitted(true);
    }

    return (
        <form className="LoginWindow" onSubmit={ handleSubmit }>
            <div>
                <TextInput
                    className="loginUsername"
                    placeholder="e-mail"
                    required={true}
                    regex={RegExp(RegexPattern.email)}
                />
            </div>
            <div>
                <PasswordInput
                    className="loginPassword"
                    placeholder="password"
                    regex={RegExp(RegexPattern.password)}
                />
            </div>
            <div>
                <FormSubmit />
            </div>
            {/*<div>*/}
            {/*    <FormRegister />*/}
            {/*</div>*/}
            {isSubmitted && <LoginPost body={body} />}
        </form>
    )
}

export default LoginWindow;