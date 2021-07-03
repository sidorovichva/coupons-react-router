import React, {SyntheticEvent, useEffect} from 'react';
import { useState } from 'react';
import './LoginWindow.css';
import {useSelector} from "react-redux";
import FormInput from "./form/FormInput";
import FormHeader from "./form/FormHeader";
import FormSubmit from "./form/FormSubmit";
import ConfigureStore from "../redux/StoreConfig";
import useLogin from "../hooks/useLogin";
import FormRegister from "./form/FormRegister";

const LoginWindow = () => {

    const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [body, setBody] = useState('');

    useLogin(body);

    useEffect(() => {
        if (field === 'loginUsername') setLoginUsername(value);
        if (field === 'loginPassword') setLoginPassword(value);
    }, [value, field])

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setBody(JSON.stringify({
            "username": loginUsername,
            "password": loginPassword,
        }));
    }

    return (
        <form className="LoginWindow" onSubmit={ handleSubmit }>
            <FormHeader title="Login Form" />
            <FormInput className="loginUsername" type="text" placeholder="e-mail" />
            <FormInput className="loginPassword" type="password" placeholder="password" />
            <FormSubmit />
            <FormRegister />
        </form>
    )
}

export default LoginWindow;

// import FormRegister from "./form/FormRegister";
//
// const LoginWindow = () => {
//
//     const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);
//     const dispatch = useDispatch();
//
//     useLogin();
//
//     const [loginUsername, setLoginUsername] = useState('');
//     const [loginPassword, setLoginPassword] = useState('');
//
//     useEffect(() => {
//         if (field === 'loginUsername') setLoginUsername(value);
//         if (field === 'loginPassword') setLoginPassword(value);
//     }, [value])
//
//     const handleSubmit = (args: SyntheticEvent) => {
//         args.preventDefault();
//         dispatch(sendRequest({
//             linkValue: '/login',
//             methodValue: 'POST',
//             bodyValue: JSON.stringify({
//                 "username": loginUsername,
//                 "password": loginPassword,
//             })
//         }));
//     }
//
//     return (
//         <form className="LoginWindow" onSubmit={ handleSubmit }>
//             <FormHeader title="Login Form" />
//             <FormInput className="loginUsername" type="text" placeholder="e-mail" />
//             <FormInput className="loginPassword" type="password" placeholder="password" />
//             <FormSubmit />
//             <FormRegister />
//         </form>
//     )
// }
//
// export default LoginWindow;