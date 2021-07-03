import React, {SyntheticEvent, useEffect, useState} from 'react';
import './AddCustomer.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../redux/StoreConfig";
import FormHeader from "./form/FormHeader";
import FormInput from "./form/FormInput";
import FormSubmit from "./form/FormSubmit";
import Add from "./main/actions/Add";

const AddCustomer = (): JSX.Element => {

    const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);

    const [customerFirstName, setCustomerFirstName] = useState('');
    const [customerLastName, setCustomerLastName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPassword, setCustomerPassword] = useState('');

    useEffect(() => {
        if (field === 'customerFirstName') setCustomerFirstName(value);
        if (field === 'customerLastName') setCustomerLastName(value);
        if (field === 'customerEmail') setCustomerEmail(value);
        if (field === 'customerPassword') setCustomerPassword(value);
    }, [value, field])

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [link] = useState('/customers');
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setIsSubmitted(true);
        setBody(JSON.stringify({
                "firstName": customerFirstName,
                "lastName": customerLastName,
                "email": customerEmail,
                "password": customerPassword
        }));
    }

    return (
        <form className="AddCustomer" onSubmit={ handleSubmit }>
            {/*<FormHeader title="Registration form" />*/}
            <div>
                <FormInput className="customerFirstName" type="text" placeholder="first name" />
            </div>
            <div>
                <FormInput className="customerLastName" type="text" placeholder="last name" />
            </div>
            <div>
                <FormInput className="customerEmail" type="text" placeholder="email" />
            </div>
            <div>
                <FormInput className="customerPassword" type="password" placeholder="password" />
            </div>
            <div>
                <FormSubmit />
            </div>
            {isSubmitted && <Add link={link} body={body} />}
        </form>
    );
}

export default AddCustomer;

// import React, {SyntheticEvent, useEffect, useState} from 'react';
// import './AddCustomer.css';
// import {useSelector} from "react-redux";
// import ConfigureStore from "../redux/StoreConfig";
// import FormHeader from "./form/FormHeader";
// import FormInput from "./form/FormInput";
// import FormSubmit from "./form/FormSubmit";
// import Add from "./main/actions/Add";
//
// const AddCustomer = (): JSX.Element => {
//
//     const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);
//
//     const [customerFirstName, setCustomerFirstName] = useState('');
//     const [customerLastName, setCustomerLastName] = useState('');
//     const [customerEmail, setCustomerEmail] = useState('');
//     const [customerPassword, setCustomerPassword] = useState('');
//
//     useEffect(() => {
//         if (field === 'customerFirstName') setCustomerFirstName(value);
//         if (field === 'customerLastName') setCustomerLastName(value);
//         if (field === 'customerEmail') setCustomerEmail(value);
//         if (field === 'customerPassword') setCustomerPassword(value);
//     }, [value, field])
//
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [link] = useState('/customers');
//     const [body, setBody] = useState('');
//
//     const handleSubmit = (args: SyntheticEvent) => {
//         args.preventDefault();
//         setIsSubmitted(true);
//         setBody(JSON.stringify({
//             "firstName": customerFirstName,
//             "lastName": customerLastName,
//             "email": customerEmail,
//             "password": customerPassword
//         }));
//     }
//
//     return (
//         <form className="AddCustomer" onSubmit={ handleSubmit }>
//             <FormHeader title="Registration form" />
//             <FormInput className="customerFirstName" type="text" placeholder="first name" />
//             <FormInput className="customerLastName" type="text" placeholder="last name" />
//             <FormInput className="customerEmail" type="text" placeholder="email" />
//             <FormInput className="customerPassword" type="password" placeholder="password" />
//             <FormSubmit />
//             {isSubmitted && <Add link={link} body={body} />}
//         </form>
//     );
// }
//
// export default AddCustomer;