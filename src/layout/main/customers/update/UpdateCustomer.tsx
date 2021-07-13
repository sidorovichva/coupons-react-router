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

const UpdateCustomer = (): JSX.Element => {

    const { customerBean } = useSelector((state) => ConfigureStore.getState().UpdateBeanSlice);

    const [link] = useState(ServerURL.updateCustomer);
    const [historyPushIfSuccess] = useState(ClientURL.allCustomers);
    const [historyPushIfFail] = useState(ClientURL.allCustomers);
    const axiosMethod = 'PUT'
    const field1 = 'firstName';
    const field2 = 'lastName';
    const field3 = 'email';
    const field4 = 'password';

    const { textValue: value1 } = FormField(field1);
    const { textValue: value2 } = FormField(field2);
    const { textValue: value3 } = FormField(field3);
    const { textValue: value4 } = FormField(field4);

    const { handleSubmit, body, isSubmitted } = BodyConstructor(
        ["id", field1, field2, field3, field4],
        [
            customerBean.id,
            value1 === '' ? customerBean.firstName : value1,
            value2 === '' ? customerBean.lastName : value2,
            value3 === '' ? customerBean.email : value3,
            value4 === '' ? customerBean.password : value4
        ],
        historyPushIfSuccess,
        historyPushIfFail
    )

    return (
        <form className="UpdateCustomer" onSubmit={ handleSubmit }>
            <div>
                <TextInput className={field1} placeholder="first name"/>
            </div>
            <div>
                <TextInput className={field2} placeholder="last name"/>
            </div>
            <div>
                <TextInput className={field3} placeholder="email"/>
            </div>
            <div>
                <TextInput className={field4} placeholder="password"/>
            </div>
            <div>
                <FormSubmit />
            </div>
            {isSubmitted && <ServerRequest method={axiosMethod} link={link} body={body} />}
        </form>
    );
}

export default UpdateCustomer;

// import React, {SyntheticEvent, useEffect, useState} from 'react';
// import './UpdateCustomer.css';
// import {useDispatch, useSelector} from "react-redux";
// import ConfigureStore from "../../../redux/StoreConfig";
// import FormSubmit from "../../../components/form/FormSubmit";
// import {setHistoryPushLink} from "../../../redux/HistoryPushSlice";
// import ServerRequest from "../../../components/main/actions/ServerRequest";
// import {ServerURL} from "../../../enums/ServerURL";
// import {ClientURL} from "../../../enums/ClientURL";
// import TextInput from "../../../components/form/TextInput";
//
// const UpdateCustomer = (): JSX.Element => {
//
//     const { value, field } = useSelector((state) => ConfigureStore.getState().InputSlice);
//     const { customerBean } = useSelector((state) => ConfigureStore.getState().UpdateBeanSlice);
//     const dispatch = useDispatch();
//
//     const [customerFirstName, setCustomerFirstName] = useState(customerBean.firstName);
//     const [customerLastName, setCustomerLastName] = useState(customerBean.lastName);
//     const [customerEmail, setCustomerEmail] = useState(customerBean.email);
//     const [customerPassword, setCustomerPassword] = useState(customerBean.password);
//
//     useEffect(() => {
//         if (field === 'customerFirstName') setCustomerFirstName(value);
//         else if (field === 'customerLastName') setCustomerLastName(value);
//         else if (field === 'customerEmail') setCustomerEmail(value);
//         else if (field === 'customerPassword') setCustomerPassword(value);
//     }, [value, field])
//
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [link] = useState(ServerURL.updateCustomer);
//     const [body, setBody] = useState('');
//
//     const handleSubmit = (args: SyntheticEvent) => {
//         args.preventDefault();
//         setBody(JSON.stringify({
//             "id": customerBean.id,
//             "firstName": customerFirstName,
//             "lastName": customerLastName,
//             "email": customerEmail,
//             "password": customerPassword
//         }));
//         dispatch(setHistoryPushLink({
//             historyPushSuccessValue: ClientURL.allCustomers,
//             historyPushFailValue: ClientURL.allCustomers
//         }))
//         setIsSubmitted(true);
//     }
//
//     return (
//         <form className="UpdateCustomer" onSubmit={ handleSubmit }>
//             <div>
//                 <TextInput className="customerFirstName" placeholder="first name"/>
//             </div>
//             <div>
//                 <TextInput className="customerLastName" placeholder="last name"/>
//             </div>
//             <div>
//                 <TextInput className="customerEmail" placeholder="email"/>
//             </div>
//             <div>
//                 <TextInput className="customerPassword" placeholder="password"/>
//             </div>
//             <div>
//                 <FormSubmit />
//             </div>
//             {isSubmitted && <ServerRequest method={"PUT"} link={link} body={body} />}
//         </form>
//     );
// }
//
// export default UpdateCustomer;