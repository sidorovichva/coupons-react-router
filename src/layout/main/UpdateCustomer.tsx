import React, {SyntheticEvent, useEffect, useState} from 'react';
import './UpdateCustomer.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import FormSubmit from "../../components/form/FormSubmit";
import Update from "../../components/main/actions/Update";
import FormInputOptional from "../../components/form/FormInputOptional";
import {setHistoryPushLink} from "../../redux/HistoryPushSlice";

const UpdateCustomer = (): JSX.Element => {

    const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);
    const { customerBean } = useSelector((state) => ConfigureStore.getState().UpdateBeanSlice);
    const dispatch = useDispatch();

    const [customerFirstName, setCustomerFirstName] = useState(customerBean.firstName);
    const [customerLastName, setCustomerLastName] = useState(customerBean.lastName);
    const [customerEmail, setCustomerEmail] = useState(customerBean.email);
    const [customerPassword, setCustomerPassword] = useState(customerBean.password);

    useEffect(() => {
        if (field === 'customerFirstName') setCustomerFirstName(value);
        else if (field === 'customerLastName') setCustomerLastName(value);
        else if (field === 'customerEmail') setCustomerEmail(value);
        else if (field === 'customerPassword') setCustomerPassword(value);
    }, [value, field])

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [link] = useState('/customers');
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setBody(JSON.stringify({
            "id": customerBean.id,
            "firstName": customerFirstName,
            "lastName": customerLastName,
            "email": customerEmail,
            "password": customerPassword
        }));
        dispatch(setHistoryPushLink({
            historyPushSuccessValue: '/customers',
            historyPushFailValue: '/customers'
        }))
        setIsSubmitted(true);
    }

    return (
        <form className="UpdateCustomer" onSubmit={ handleSubmit }>
            <div>
                <FormInputOptional className="customerFirstName" type="text" placeholder="first name" />
            </div>
            <div>
                <FormInputOptional className="customerLastName" type="text" placeholder="last name" />
            </div>
            <div>
                <FormInputOptional className="customerEmail" type="text" placeholder="email" />
            </div>
            <div>
                <FormInputOptional className="customerPassword" type="password" placeholder="password" />
            </div>
            <div>
                <FormSubmit />
            </div>
            {isSubmitted && <Update link={link} body={body} />}
        </form>
    );
}

export default UpdateCustomer;