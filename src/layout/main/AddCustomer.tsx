import React, {SyntheticEvent, useEffect, useState} from 'react';
import './AddCustomer.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import FormInput from "../../components/form/FormInput";
import FormSubmit from "../../components/form/FormSubmit";
import Add from "../../components/main/actions/Add";
import {resetRequestMessage} from "../../redux/RequestMessageSlice";

const AddCustomer = (): JSX.Element => {

    const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);
    const { requestMessage } = useSelector((state) => ConfigureStore.getState().RequestMessageSlice);
    const dispatch = useDispatch();

    const [customerFirstName, setCustomerFirstName] = useState('');
    const [customerLastName, setCustomerLastName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPassword, setCustomerPassword] = useState('');

    useEffect(() => {
        if (field === 'customerFirstName') setCustomerFirstName(value);
        else if (field === 'customerLastName') setCustomerLastName(value);
        else if (field === 'customerEmail') setCustomerEmail(value);
        else if (field === 'customerPassword') setCustomerPassword(value);
        if (requestMessage !== '') dispatch(resetRequestMessage());
    }, [value, field])

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [link] = useState('/customers');
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setBody(JSON.stringify({
                "firstName": customerFirstName,
                "lastName": customerLastName,
                "email": customerEmail,
                "password": customerPassword
        }));
        setIsSubmitted(true);
    }

    // const [isSuccess, setIsSuccess] = useState(false);
    // const [loginBody, setLoginBody] = useState('');
    //
    // useEffect(() => {
    //     if (requestMessage === 'NOTIFICATION: the customer was added successfully') handleSuccess();
    // }, [requestMessage]);
    //
    // const handleSuccess = () => {
    //     console.log("SUCCESS")
    //     setBody(JSON.stringify({
    //         "username": customerEmail,
    //         "password": customerPassword,
    //     }));
    //     console.log(body)
    //     setIsSuccess(true);
    // }

    return (
        <form className="AddCustomer" onSubmit={ handleSubmit }>
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
            {/*{isSuccess && <LoginPost body={loginBody} />}*/}
        </form>
    );
}

export default AddCustomer;