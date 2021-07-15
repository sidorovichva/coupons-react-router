import { useState } from 'react';
import './LoginWindow.css';
import FormSubmit from "../../../components/jsxComponents/main/form/FormSubmit";
import LoginPost from "../../../components/logicComponents/LoginPost";
import {ClientURL} from "../../../enums/ClientURL";
import TextInput from "../../../components/jsxComponents/main/form/TextInput";
import {RegexPattern} from "../../../enums/RegexPattern";
import PasswordInput from "../../../components/jsxComponents/main/form/PasswordInput";
import BodyConstructor from "../../../components/logicComponents/BodyConstructor";
import FormField from "../../../components/logicComponents/FormField";

const LoginWindow = (): JSX.Element => {

    const [historyPushIfSuccess] = useState(ClientURL.allCoupons);
    const [historyPushIfFail] = useState(ClientURL.login);

    const field1 = 'username';
    const field2 = 'password';

    const { textValue: value1, isMatches: matches1 } = FormField(field1);
    const { textValue: value2, isMatches: matches2 } = FormField(field2);

    const { handleSubmit, body, isSubmitted } = BodyConstructor(
        [field1, field2],
        [value1, value2],
        historyPushIfSuccess,
        historyPushIfFail
    );

    return (
        <form className="LoginWindow" onSubmit={ handleSubmit }>
            <div>
                <TextInput
                    className={field1}
                    placeholder="e-mail"
                    required={true}
                    regex={RegExp(RegexPattern.email)}
                />
            </div>
            <div>
                <PasswordInput
                    className={field2}
                    placeholder="password"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <FormSubmit
                    checksArray={[
                        matches1,
                        matches2
                    ]}
                />
            </div>
            {/*<div>*/}
            {/*    <FormRegister />*/}
            {/*</div>*/}
            {isSubmitted && <LoginPost body={body} />}
        </form>
    )
}

export default LoginWindow;

// import React, {SyntheticEvent, useEffect} from 'react';
// import { useState } from 'react';
// import './LoginWindow.css';
// import {useDispatch, useSelector} from "react-redux";
// import FormSubmit from "../../../components/jsxComponents/main/form/FormSubmit";
// import ConfigureStore from "../../../redux/StoreConfig";
// import LoginPost from "../../../components/logicComponents/LoginPost";
// import {setHistoryPushLink} from "../../../redux/HistoryPushSlice";
// import {ClientURL} from "../../../enums/ClientURL";
// import TextInput from "../../../components/jsxComponents/main/form/TextInput";
// import {RegexPattern} from "../../../enums/RegexPattern";
// import PasswordInput from "../../../components/jsxComponents/main/form/PasswordInput";
//
// const LoginWindow = (): JSX.Element => {
//
//     const { textInput, field } = useSelector((state) => ConfigureStore.getState().InputSlice);
//     const dispatch = useDispatch();
//
//     const [loginUsername, setLoginUsername] = useState('');
//     const [loginPassword, setLoginPassword] = useState('');
//
//     useEffect(() => {
//         if (field === 'loginUsername') setLoginUsername(textInput);
//         else if (field === 'loginPassword') setLoginPassword(textInput);
//     }, [textInput, field])
//
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [body, setBody] = useState('');
//
//     const handleSubmit = (args: SyntheticEvent) => {
//         args.preventDefault();
//         setBody(JSON.stringify({
//             "username": loginUsername,
//             "password": loginPassword,
//         }));
//         dispatch(setHistoryPushLink({
//             historyPushSuccessValue: ClientURL.allCoupons,
//             historyPushFailValue: ClientURL.login
//         }))
//         setIsSubmitted(true);
//     }
//
//     return (
//         <form className="LoginWindow" onSubmit={ handleSubmit }>
//             <div>
//                 <TextInput
//                     className="loginUsername"
//                     placeholder="e-mail"
//                     required={true}
//                     regex={RegExp(RegexPattern.email)}
//                 />
//             </div>
//             <div>
//                 <PasswordInput
//                     className="loginPassword"
//                     placeholder="password"
//                     regex={RegExp(RegexPattern.password)}
//                 />
//             </div>
//             <div>
//                 <FormSubmit />
//             </div>
//             {/*<div>*/}
//             {/*    <FormRegister />*/}
//             {/*</div>*/}
//             {isSubmitted && <LoginPost body={body} />}
//         </form>
//     )
// }
//
// export default LoginWindow;