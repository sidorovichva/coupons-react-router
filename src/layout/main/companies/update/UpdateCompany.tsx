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
            value3
        ],
        // historyPushIfSuccess,
        // historyPushIfFail
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

// import React, {SyntheticEvent, useEffect, useState} from 'react';
// import './UpdateCompany.css';
// import {useDispatch, useSelector} from "react-redux";
// import ConfigureStore from "../../../redux/StoreConfig";
// import FormSubmit from "../../../components/form/FormSubmit";
// import {setHistoryPushLink} from "../../../redux/HistoryPushSlice";
// import ServerRequest from "../../../components/main/actions/ServerRequest";
// import {ClientURL} from "../../../enums/ClientURL";
// import {ServerURL} from "../../../enums/ServerURL";
// import TextInput from "../../../components/form/TextInput";
//
// const UpdateCompany = (): JSX.Element => {
//
//     const { value, field } = useSelector((state) => ConfigureStore.getState().InputSlice);
//     const { companyBean } = useSelector((state) => ConfigureStore.getState().UpdateBeanSlice);
//     const dispatch = useDispatch();
//
//     const [companyName, setCompanyName] = useState(companyBean.name);
//     const [companyEmail, setCompanyEmail] = useState(companyBean.email);
//     const [companyPassword, setCompanyPassword] = useState(companyBean.password);
//
//     useEffect(() => {
//         if (field === 'companyName') setCompanyName(value);
//         else if (field === 'companyEmail') setCompanyEmail(value);
//         else if (field === 'companyPassword') setCompanyPassword(value);
//     }, [value, field])
//
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [link] = useState(ServerURL.updateCompany);
//     const [body, setBody] = useState('');
//
//     const handleSubmit = (args: SyntheticEvent) => {
//         args.preventDefault();
//         setBody(JSON.stringify({
//             "id": companyBean.id,
//             "name": companyName,
//             "email": companyEmail,
//             "password": companyPassword
//         }));
//         dispatch(setHistoryPushLink({
//             historyPushSuccessValue: ClientURL.allCompanies,
//             historyPushFailValue: ClientURL.allCompanies
//         }))
//         setIsSubmitted(true);
//     }
//
//     return (
//         <form className="UpdateCompany" onSubmit={ handleSubmit }>
//             <div>
//                 <TextInput className="companyName" placeholder="company title"/>
//             </div>
//             <div>
//                 <TextInput className="companyEmail" placeholder="email"/>
//             </div>
//             <div>
//                 <TextInput className="companyPassword" placeholder="password"/>
//             </div>
//             <div>
//                 <FormSubmit />
//             </div>
//             {isSubmitted && <ServerRequest method={"PUT"} link={link} body={body} />}
//         </form>
//     );
// }
//
// export default UpdateCompany;