import React, {useState} from 'react';
import './UpdateCompany.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import FormSubmit from "../../../../components/jsxComponents/main/form/FormSubmit";
import ServerRequest from "../../../../components/logicComponents/ServerRequest";
import {ClientURL} from "../../../../enums/ClientURL";
import {ServerURL} from "../../../../enums/ServerURL";
import TextInput from "../../../../components/jsxComponents/main/form/TextInput";
import FormField from "../../../../components/logicComponents/FormField";
import BodyConstructor from "../../../../components/logicComponents/BodyConstructor";
import PasswordInput from "../../../../components/jsxComponents/main/form/PasswordInput";
import {RegexPattern} from "../../../../enums/RegexPattern";

const UpdateCompany = (): JSX.Element => {

    const { companyBean } = useSelector((state) => ConfigureStore.getState().UpdateBeanSlice);

    const [link] = useState(ServerURL.updateCompany);
    const [historyPushIfSuccess] = useState(ClientURL.allCompanies);
    const [historyPushIfFail] = useState(ClientURL.allCompanies);
    const axiosMethod = 'PUT'
    const field1 = 'name';
    const field2 = 'email';
    const field3 = 'password';

    const { textValue: value1, isMatches: matches1 } = FormField(field1);
    const { textValue: value2, isMatches: matches2 } = FormField(field2);
    const { textValue: value3, isMatches: matches3 } = FormField(field3);

    const { handleSubmit, body, isSubmitted } = BodyConstructor(
        ["id", field1, field2, field3],
        [
            companyBean.id,
            value1 === '' ? companyBean.name : value1,
            value2 === '' ? companyBean.email : value2,
            //value3
            value3 === '' ? 'NoNeedToUpdate' : value3
        ]
    )

    return (
        <form className="UpdateCompany" onSubmit={ handleSubmit }>
            <div>
                <TextInput
                    className={field1}
                    placeholder="company title"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <TextInput
                    className={field2}
                    placeholder="email"
                    regex={RegExp(RegexPattern.email)}
                />
            </div>
            <div>
                <PasswordInput
                    className={field3}
                    placeholder="password"
                    regex={RegExp(RegexPattern.password)}
                />
            </div>
            <div>
                <FormSubmit
                    checksArray={[
                        value1 === '' ? true : matches1,
                        value2 === '' ? true : matches2,
                        value3 === '' ? true : matches3
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

export default UpdateCompany;