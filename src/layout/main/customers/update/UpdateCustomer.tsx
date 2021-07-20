import React, {useState} from 'react';
import './UpdateCustomer.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import FormSubmit from "../../../../components/jsxComponents/main/form/FormSubmit";
import ServerRequest from "../../../../components/logicComponents/ServerRequest";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";
import TextInput from "../../../../components/jsxComponents/main/form/TextInput";
import FormField from "../../../../components/logicComponents/FormField";
import BodyConstructor from "../../../../components/logicComponents/BodyConstructor";
import {RegexPattern} from "../../../../enums/RegexPattern";
import PasswordInput from "../../../../components/jsxComponents/main/form/PasswordInput";
import {Axios} from "../../../../enums/Axios";

const UpdateCustomer = (): JSX.Element => {

    const { customerBean } = useSelector((state) => ConfigureStore.getState().UpdateBeanSlice);

    const [link] = useState(ServerURL.updateCustomer);
    const [historyPushIfSuccess] = useState(ClientURL.allCustomers);
    const [historyPushIfFail] = useState(ClientURL.allCustomers);
    const axiosMethod = Axios.PUT;
    const field1 = 'firstName';
    const field2 = 'lastName';
    const field3 = 'email';
    const field4 = 'password';

    const { textValue: value1, isMatches: matches1 } = FormField(field1);
    const { textValue: value2, isMatches: matches2 } = FormField(field2);
    const { textValue: value3, isMatches: matches3 } = FormField(field3);
    const { textValue: value4, isMatches: matches4 } = FormField(field4);

    const { handleSubmit, body, isSubmitted } = BodyConstructor(
        ["id", field1, field2, field3, field4],
        [
            customerBean.id,
            value1 === '' ? customerBean.firstName : value1,
            value2 === '' ? customerBean.lastName : value2,
            value3 === '' ? customerBean.email : value3,
            value4 === '' ? 'NoNeedToUpdate' : value4
        ],
    )

    return (
        <form className="UpdateCustomer" onSubmit={ handleSubmit }>
            <div>
                <TextInput
                    className={field1}
                    placeholder="first name"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <TextInput
                    className={field2}
                    placeholder="last name"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <TextInput
                    className={field3}
                    type="email"
                    placeholder="email"
                    regex={RegExp(RegexPattern.email)}
                />
            </div>
            <div>
                <PasswordInput
                    className={field4}
                    placeholder="password"
                    regex={RegExp(RegexPattern.password)}
                />
            </div>
            <div>
                <FormSubmit
                    checksArray={[
                        value1 === '' ? true : matches1,
                        value2 === '' ? true : matches2,
                        value3 === '' ? true : matches3,
                        value4 === '' ? true : matches4,
                    ]}
                />
            </div>
            {isSubmitted &&
                <ServerRequest
                    method={axiosMethod}
                    link={link}
                    body={body}
                    pushSuccess={historyPushIfSuccess}
                    pushFail={historyPushIfFail}
                />}
        </form>
    );
}

export default UpdateCustomer;