import React, {SyntheticEvent, useEffect, useState} from 'react';
import './AddCoupon.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import FormInput from "../../components/form/FormInput";
import FormSubmit from "../../components/form/FormSubmit";
import Add from "../../components/main/actions/Add";
import FormSelect from "../../components/form/FormSelect";
import {setHistoryPushLink} from "../../redux/HistoryPushSlice";

const AddCoupon = (): JSX.Element => {

    const { numericInput, value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);
    const dispatch = useDispatch();

    const [category, setCategory] = useState(JSON.parse('{"id": 1, "name": "EDUCATION"}'));
    const [couponTitle, setCouponTitle] = useState('');
    const [couponDescription, setCouponDescription] = useState('');
    const [couponStartDate, setCouponStartDate] = useState('');
    const [couponEndDate, setCouponEndDate] = useState('');
    const [couponAmount, setCouponAmount] = useState<number>();
    const [couponPrice, setCouponPrice] = useState<number>();

    useEffect(() => {
        if (field === 'couponCategory') setCategory(value);
        else if (field === 'couponTitle') setCouponTitle(value);
        else if (field === 'couponDescription') setCouponDescription(value);
        else if (field === 'couponStartDate') setCouponStartDate(value);
        else if (field === 'couponEndDate') setCouponEndDate(value);
        else if (field === 'couponAmount') setCouponAmount(numericInput);
        else if (field === 'couponPrice') {
            //console.log(                    "add1" + numericInput)
            setCouponPrice(numericInput)
        };
    }, [value, field]);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [link] = useState('/coupons');
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        //console.log(                    "add2" + numericInput)
        setBody(JSON.stringify({
            "category": category,
            "title": couponTitle,
            "description": couponDescription,
            "startDate": couponStartDate,
            "endDate": couponEndDate,
            "amount": couponAmount,
            "price": couponPrice,
            "image": "imageToReplace"
        }));
        dispatch(setHistoryPushLink({
            historyPushSuccessValue: '/company_coupons',
            historyPushFailValue: '/company_coupons'
        }))
        setIsSubmitted(true);
    }

    return (
        <form className="AddCoupon" onSubmit={ handleSubmit }>
            <div>
                <FormSelect className={ 'couponCategory' } />
            </div>
            <div>
                <FormInput className="couponTitle" type="text" placeholder="title" />
            </div>
            <div>
                <FormInput className="couponDescription" type="text" placeholder="description" />
            </div>
            <div>
                <FormInput className="couponStartDate" type="date" />
            </div>
            <div>
                <FormInput className="couponEndDate" type="date" />
            </div>
            <div>
                <FormInput className="couponAmount" type="number" placeholder="amount" min={1}/>
            </div>
            <div>
                <FormInput className="couponPrice" type="number" placeholder="price" min={1}/>
            </div>
            <div>
                <FormSubmit />
            </div>
            {isSubmitted && <Add link={link} body={body} />}
        </form>
    );
}

export default AddCoupon;

// import React, {SyntheticEvent, useEffect, useState} from 'react';
// import './AddCoupon.css';
// import {useDispatch, useSelector} from "react-redux";
// import ConfigureStore from "../../redux/StoreConfig";
// import FormInput from "../../components/form/FormInput";
// import FormSubmit from "../../components/form/FormSubmit";
// import Add from "../../components/main/actions/Add";
// import {resetRequestMessage} from "../../redux/RequestMessageSlice";
// import FormSelect from "../../components/form/FormSelect";
// import {useHistory} from "react-router-dom";
// import {setHistoryPushLink} from "../../redux/HistoryPushSlice";
//
// const AddCoupon = (): JSX.Element => {
//
//     const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);
//     //const { requestMessage } = useSelector((state) => ConfigureStore.getState().RequestMessageSlice);
//     const dispatch = useDispatch();
//
//     const [category, setCategory] = useState(JSON.parse('{"id": 1, "name": "EDUCATION"}'));
//     const [couponTitle, setCouponTitle] = useState('');
//     const [couponDescription, setCouponDescription] = useState('');
//     const [couponStartDate, setCouponStartDate] = useState('');
//     const [couponEndDate, setCouponEndDate] = useState('');
//     const [couponAmount, setCouponAmount] = useState('');
//     const [couponPrice, setCouponPrice] = useState('');
//
//     useEffect(() => {
//         if (field === 'couponCategory') setCategory(value);
//         else if (field === 'couponTitle') setCouponTitle(value);
//         else if (field === 'couponDescription') setCouponDescription(value);
//         else if (field === 'couponStartDate') setCouponStartDate(value);
//         else if (field === 'couponEndDate') setCouponEndDate(value);
//         else if (field === 'couponAmount') setCouponAmount(value);
//         else if (field === 'couponPrice') setCouponPrice(value);
//         //if (requestMessage !== '') dispatch(resetRequestMessage());
//     }, [value, field]);
//
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [link] = useState('/coupons');
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
//             historyPushSuccessValue: '/company_coupons'
//         }))
//         setIsSubmitted(true);
//     }
//
//     return (
//         <form className="AddCoupon" onSubmit={ handleSubmit }>
//             <div>
//                 <FormSelect className={ 'couponCategory' } />
//             </div>
//             <div>
//                 <FormInput className="couponTitle" type="text" placeholder="title" />
//             </div>
//             <div>
//                 <FormInput className="couponDescription" type="text" placeholder="description" />
//             </div>
//             <div>
//                 <FormInput className="couponStartDate" type="date" />
//             </div>
//             <div>
//                 <FormInput className="couponEndDate" type="date" />
//             </div>
//             <div>
//                 <FormInput className="couponAmount" type="number" placeholder="amount" min={1}/>
//             </div>
//             <div>
//                 <FormInput className="couponPrice" type="number" placeholder="price" min={1}/>
//             </div>
//             <div>
//                 <FormSubmit />
//             </div>
//             {/*<div className="message">{ requestMessage }</div>*/}
//             {isSubmitted && <Add link={link} body={body} />}
//         </form>
//     );
// }
//
// export default AddCoupon;
