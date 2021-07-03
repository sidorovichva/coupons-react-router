import React, {SyntheticEvent, useEffect, useState} from 'react';
import './AddCompany.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../redux/StoreConfig";
import FormInput from "./form/FormInput";
import FormHeader from "./form/FormHeader";
import FormSubmit from "./form/FormSubmit";
import Add from "./main/actions/Add";

const AddCompany = (): JSX.Element => {

    console.log("add company")

    const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);

    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyPassword, setCompanyPassword] = useState('');

    useEffect(() => {
        if (field === 'companyName') setCompanyName(value);
        if (field === 'companyEmail') setCompanyEmail(value);
        if (field === 'companyPassword') setCompanyPassword(value);
    }, [value, field])

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [link] = useState('/companies');
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setIsSubmitted(true);
        setBody(JSON.stringify({
                "name": companyName,
                "email": companyEmail,
                "password": companyPassword
        }));
    }

    return (
        <form className="AddCompany" onSubmit={ handleSubmit }>
            <FormHeader title="Add Company"/>
            <FormInput className="companyName" type="text" placeholder="company title"/>
            <FormInput className="companyEmail" type="text" placeholder="email"/>
            <FormInput className="companyPassword" type="password" placeholder="password"/>
            <FormSubmit />
            {isSubmitted && <Add link={link} body={body} />}
        </form>
    );
}

export default AddCompany;