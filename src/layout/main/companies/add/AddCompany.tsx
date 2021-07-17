import './AddCompany.css';
import FormSubmit from "../../../../components/jsxComponents/main/form/FormSubmit";
import ServerRequest from "../../../../components/logicComponents/ServerRequest";
import TextInput from "../../../../components/jsxComponents/main/form/TextInput";
import FormField from "../../../../components/logicComponents/FormField";
import {useState} from "react";
import {ClientURL} from "../../../../enums/ClientURL";
import {ServerURL} from "../../../../enums/ServerURL";
import BodyConstructor from "../../../../components/logicComponents/BodyConstructor";
import {RegexPattern} from "../../../../enums/RegexPattern";
import PasswordInput from "../../../../components/jsxComponents/main/form/PasswordInput";

const AddCompany = (): JSX.Element => {

    const [link] = useState(ServerURL.addCompany);
    const [historyPushIfSuccess] = useState(ClientURL.allCompanies);
    const [historyPushIfFail] = useState(ClientURL.allCompanies);
    const axiosMethod = 'POST'
    const field1 = 'name';
    const field2 = 'email';
    const field3 = 'password';

    const { textValue: value1, isMatches: matches1 } = FormField(field1);
    const { textValue: value2, isMatches: matches2 } = FormField(field2);
    const { textValue: value3, isMatches: matches3 } = FormField(field3);

    const { handleSubmit, body, isSubmitted } = BodyConstructor(
        [field1, field2, field3],
        [value1, value2, value3],
        // historyPushIfSuccess,
        // historyPushIfFail
    )

    const props = {
        required: true
    }

    return (
        <form className="AddCompany" onSubmit={ handleSubmit }>
            <div>
                <TextInput
                    {...props}
                    className={field1}
                    placeholder="company title"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <TextInput
                    {...props}
                    className={field2}
                    placeholder="email"
                    regex={RegExp(RegexPattern.email)}
                />
            </div>
            <div>
                <PasswordInput
                    {...props}
                    className={field3}
                    placeholder="password"
                    required={true}
                    regex={RegExp(RegexPattern.password)}
                />
            </div>
            <div>
                <FormSubmit
                    checksArray={[
                        matches1,
                        matches2,
                        matches3
                    ]}
                />
            </div>
            {isSubmitted &&
                <ServerRequest
                    link={link}
                    method={axiosMethod}
                    body={body}
                    pushSuccess={historyPushIfSuccess}
                    pushFail={historyPushIfFail}
                />}
        </form>
    );
}

export default AddCompany;

// import {useDispatch, useSelector} from "react-redux";
// import ConfigureStore from "../../redux/StoreConfig";
// import {SyntheticEvent, useEffect, useState} from "react";
// import {ServerURL} from "../../enums/ServerURL";
// import {setHistoryPushLink} from "../../redux/HistoryPushSlice";
// import {ClientURL} from "../../enums/ClientURL";
//
// const AddCouponLogic = () => {
//
//     const { numericInput, value, field } = useSelector((state) => ConfigureStore.getState().InputSlice);
//     const dispatch = useDispatch();
//
//     const [category, setCategory] = useState(JSON.parse('{"id": 1, "name": "EDUCATION"}'));
//     const [couponTitle, setCouponTitle] = useState('');
//     const [couponDescription, setCouponDescription] = useState('');
//     const [couponStartDate, setCouponStartDate] = useState('');
//     const [couponEndDate, setCouponEndDate] = useState('');
//     const [couponAmount, setCouponAmount] = useState<number>();
//     const [couponPrice, setCouponPrice] = useState<number>();
//
//     useEffect(() => {
//         if (field === 'couponCategory') setCategory(value);
//         else if (field === 'couponTitle') setCouponTitle(value);
//         else if (field === 'couponDescription') setCouponDescription(value);
//         else if (field === 'couponStartDate') setCouponStartDate(value);
//         else if (field === 'couponEndDate') setCouponEndDate(value);
//         else if (field === 'couponAmount') setCouponAmount(numericInput);
//         else if (field === 'couponPrice') setCouponPrice(numericInput);
//     }, [numericInput, value, field]);
//
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [link] = useState(ServerURL.addCoupon);
//     const [body, setBody] = useState('');
//
//     const handleSubmit = (args: SyntheticEvent) => {
//         args.preventDefault();
//         setBody(JSON.stringify({
//             "category": category,
//             "title": couponTitle,
//             "description": couponDescription,
//             "startDate": couponStartDate,
//             "endDate": couponEndDate,
//             "amount": couponAmount,
//             "price": couponPrice,
//             "image": "imageToReplace"
//         }));
//         dispatch(setHistoryPushLink({
//             historyPushSuccessValue: ClientURL.companyCoupons,
//             historyPushFailValue: ClientURL.companyCoupons
//         }))
//         setIsSubmitted(true);
//     }
//
//     return { handleSubmit, isSubmitted, link, body };
// }
//
// export default AddCouponLogic;