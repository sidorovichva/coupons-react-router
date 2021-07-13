import React, {SyntheticEvent, useEffect, useState} from 'react';
import './UpdateCoupon.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import FormSubmit from "../../../../components/jsxComponents/main/form/FormSubmit";
import FormSelect from "../../../../components/jsxComponents/main/form/FormSelect";
import {setHistoryPushLink} from "../../../../redux/HistoryPushSlice";
import ServerRequest from "../../../../components/logicComponents/ServerRequest";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";
import NumberInput from "../../../../components/jsxComponents/main/form/NumberInput";
import DateInput from "../../../../components/jsxComponents/main/form/DateInput";
import TextInput from "../../../../components/jsxComponents/main/form/TextInput";
import FormField from "../../../../components/logicComponents/FormField";
import BodyConstructor from "../../../../components/logicComponents/BodyConstructor";

const UpdateCoupon = (): JSX.Element => {

    const { couponBean } = useSelector((state) => ConfigureStore.getState().UpdateBeanSlice);

    console.log("bean: " + couponBean.price)

    const [link] = useState(ServerURL.updateCoupon);
    const [historyPushIfSuccess] = useState(ClientURL.companyCoupons);
    const [historyPushIfFail] = useState(ClientURL.companyCoupons);
    const axiosMethod = 'PUT';
    const field1 = 'category';
    const field2 = 'title';
    const field3 = 'description';
    const field4 = 'startDate';
    const field5 = 'endDate';
    const field6 = 'amount';
    const field7 = 'price';
    const field8 = 'image';

    const { textValue: value1 } = FormField(field1);
    const { textValue: value2 } = FormField(field2);
    const { textValue: value3 } = FormField(field3);
    const { textValue: value4 } = FormField(field4);
    const { textValue: value5 } = FormField(field5);
    const { numValue: value6 } = FormField(field6);
    const { numValue: value7 } = FormField(field7);
    const value8 = "imageToReplace";

    const { handleSubmit, body, isSubmitted } = BodyConstructor(
        ["id", field1, field2, field3, field4, field5, field6, field7, field8],
        [
            couponBean.id,
            value1 === '' ? JSON.stringify(couponBean.category) : value1,
            value2 === '' ? couponBean.title : value2,
            value3 === '' ? couponBean.description : value3,
            value4 === '' ? couponBean.startDate : value4,
            value5 === '' ? couponBean.endDate : value5,
            value6 <= 0 ? couponBean.amount : value6,
            value7 <= 0 ? couponBean.price : value7,
            value8
        ],
        historyPushIfSuccess,
        historyPushIfFail
    )

    return (
        <form className="UpdateCoupon" onSubmit={ handleSubmit }>
            <div>
                <FormSelect className={field1} />
            </div>
            <div>
                <TextInput className={field2} placeholder="title" />
            </div>
            <div>
                <TextInput className={field3} placeholder="description" />
            </div>
            <div>
                <DateInput className={field4} />
            </div>
            <div>
                <DateInput className={field5} />
            </div>
            <div>
                <NumberInput className={field6} placeholder="amount" min={1} />
            </div>
            <div>
                <NumberInput className={field7} placeholder="price" min={0.01} decimal={true} />
            </div>
            <div>
                <FormSubmit />
            </div>
            {isSubmitted && <ServerRequest method={axiosMethod} link={link} body={body} />}
        </form>
    );
}

export default UpdateCoupon;

// import React, {SyntheticEvent, useEffect, useState} from 'react';
// import './UpdateCoupon.css';
// import {useDispatch, useSelector} from "react-redux";
// import ConfigureStore from "../../../redux/StoreConfig";
// import FormSubmit from "../../../components/form/FormSubmit";
// import FormSelect from "../../../components/form/FormSelect";
// import {setHistoryPushLink} from "../../../redux/HistoryPushSlice";
// import ServerRequest from "../../../components/main/actions/ServerRequest";
// import {ServerURL} from "../../../enums/ServerURL";
// import {ClientURL} from "../../../enums/ClientURL";
// import NumberInput from "../../../components/form/NumberInput";
// import DateInput from "../../../components/form/DateInput";
// import TextInput from "../../../components/form/TextInput";
//
// const UpdateCoupon = (): JSX.Element => {
//
//     const { numericInput, value, field } = useSelector((state) => ConfigureStore.getState().InputSlice);
//     const { couponBean } = useSelector((state) => ConfigureStore.getState().UpdateBeanSlice);
//     const dispatch = useDispatch();
//
//     const [couponCategory, setCouponCategory] = useState<string>();
//     const [couponTitle, setCouponTitle] = useState(couponBean.title);
//     const [couponDescription, setCouponDescription] = useState(couponBean.description);
//     const [couponStartDate, setCouponStartDate] = useState(couponBean.startDate);
//     const [couponEndDate, setCouponEndDate] = useState(couponBean.endDate);
//     const [couponAmount, setCouponAmount] = useState<number>(couponBean.amount);
//     const [couponPrice, setCouponPrice] = useState<number | string>();
//
//     useEffect(() => {
//         if (field === 'couponCategory') setCouponCategory(value);
//         else if (field === 'couponTitle') setCouponTitle(value);
//         else if (field === 'couponDescription') setCouponDescription(value);
//         else if (field === 'couponStartDate') setCouponStartDate(value);
//         else if (field === 'couponEndDate') setCouponEndDate(value);
//         else if (field === 'couponAmount') setCouponAmount(numericInput);
//         else if (field === 'couponPrice') setCouponPrice(numericInput);
//     }, [value, numericInput, field])
//
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [link] = useState(ServerURL.updateCoupon);
//     const [body, setBody] = useState('');
//
//     const handleSubmit = (args: SyntheticEvent) => {
//         args.preventDefault();
//         setBody(JSON.stringify({
//                 "id": couponBean.id,
//                 "category": couponCategory === undefined ? couponBean.category : couponCategory,
//                 "title": couponTitle,
//                 "description": couponDescription,
//                 "startDate": couponStartDate,
//                 "endDate": couponEndDate,
//                 "amount": couponAmount,
//                 "price": couponPrice === '' ? couponBean.price : couponPrice,
//                 "image": "imageToReplace"
//             })
//         );
//         dispatch(setHistoryPushLink({
//             historyPushSuccessValue: ClientURL.companyCoupons,
//             historyPushFailValue: ClientURL.companyCoupons
//         }))
//         setIsSubmitted(true);
//     }
//
//     return (
//         <form className="UpdateCoupon" onSubmit={ handleSubmit }>
//             <div>
//                 <FormSelect className={ 'couponCategory' } />
//             </div>
//             <div>
//                 <TextInput className="couponTitle" placeholder="title" />
//             </div>
//             <div>
//                 <TextInput className="couponDescription" placeholder="description" />
//             </div>
//             <div>
//                 <DateInput className="couponStartDate" />
//             </div>
//             <div>
//                 <DateInput className="couponEndDate" />
//             </div>
//             <div>
//                 <NumberInput className="couponAmount" placeholder="amount" min={1} />
//             </div>
//             <div>
//                 <NumberInput className="couponPrice" placeholder="price" min={0.01} decimal={true} />
//             </div>
//             <div>
//                 <FormSubmit />
//             </div>
//             {isSubmitted && <ServerRequest method={"PUT"} link={link} body={body} />}
//         </form>
//     );
// }
//
// export default UpdateCoupon;