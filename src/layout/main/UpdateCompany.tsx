import React, {SyntheticEvent, useEffect, useState} from 'react';
import './UpdateCompany.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import FormSubmit from "../../components/form/FormSubmit";
import Update from "../../components/main/actions/Update";
import FormInputOptional from "../../components/form/FormInputOptional";
import {setHistoryPushLink} from "../../redux/HistoryPushSlice";

const UpdateCompany = (): JSX.Element => {

    const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);
    const { companyBean } = useSelector((state) => ConfigureStore.getState().UpdateBeanSlice);
    const dispatch = useDispatch();

    const [companyName, setCompanyName] = useState(companyBean.name);
    const [companyEmail, setCompanyEmail] = useState(companyBean.email);
    const [companyPassword, setCompanyPassword] = useState(companyBean.password);

    useEffect(() => {
        if (field === 'companyName') setCompanyName(value);
        else if (field === 'companyEmail') setCompanyEmail(value);
        else if (field === 'companyPassword') setCompanyPassword(value);
    }, [value, field])

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [link] = useState('/companies');
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setBody(JSON.stringify({
            "id": companyBean.id,
            "name": companyName,
            "email": companyEmail,
            "password": companyPassword
        }));
        dispatch(setHistoryPushLink({
            historyPushSuccessValue: '/companies',
            historyPushFailValue: '/companies'
        }))
        setIsSubmitted(true);
    }

    return (
        <form className="UpdateCompany" onSubmit={ handleSubmit }>
            <div>
                <FormInputOptional className="companyName" type="text" placeholder="company title"/>
            </div>
            <div>
                <FormInputOptional className="companyEmail" type="text" placeholder="email"/>
            </div>
            <div>
                <FormInputOptional className="companyPassword" type="password" placeholder="password"/>
            </div>
            <div>
                <FormSubmit />
            </div>
            {isSubmitted && <Update link={link} body={body} />}
        </form>
    );
}

export default UpdateCompany;