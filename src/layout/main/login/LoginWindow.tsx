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
    );

    return (
        <form className="LoginWindow" onSubmit={ handleSubmit }>
            <div>
                <TextInput
                    className={field1}
                    type="email"
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
            {isSubmitted &&
                <LoginPost
                    body={body}
                    pushSuccess={historyPushIfSuccess}
                    pushFail={historyPushIfFail}
                />}
        </form>
    )
}

export default LoginWindow;