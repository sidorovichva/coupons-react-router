import React, {SyntheticEvent, useEffect, useState} from 'react';
import './AddCompany.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import FormInput from "../../components/form/FormInput";
import FormSubmit from "../../components/form/FormSubmit";
import Add from "../../components/main/actions/Add";
import {resetRequestMessage} from "../../redux/RequestMessageSlice";

const AddCompany = (): JSX.Element => {

    const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);
    const { requestMessage } = useSelector((state) => ConfigureStore.getState().RequestMessageSlice);
    const dispatch = useDispatch();

    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyPassword, setCompanyPassword] = useState('');

    useEffect(() => {
        if (field === 'companyName') setCompanyName(value);
        else if (field === 'companyEmail') setCompanyEmail(value);
        else if (field === 'companyPassword') setCompanyPassword(value);
        if (requestMessage !== '') dispatch(resetRequestMessage());
    }, [value, field])

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [link] = useState('/companies');
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setBody(JSON.stringify({
                "name": companyName,
                "email": companyEmail,
                "password": companyPassword
        }));
        setIsSubmitted(true);
    }

    return (
        <form className="AddCompany" onSubmit={ handleSubmit }>
            <div>
                <FormInput className="companyName" type="text" placeholder="company title"/>
            </div>
            <div>
                <FormInput className="companyEmail" type="text" placeholder="email"/>
            </div>
            <div>
                <FormInput className="companyPassword" type="password" placeholder="password"/>
            </div>
            <div>
                <FormSubmit />
            </div>
            <div className="message">{ requestMessage }</div>
            {isSubmitted && <Add link={link} body={body} />}
        </form>
    );
}

export default AddCompany;