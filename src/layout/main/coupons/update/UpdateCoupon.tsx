import React, {useState} from 'react';
import './UpdateCoupon.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import FormSubmit from "../../../../components/jsxComponents/main/form/FormSubmit";
import FormSelect from "../../../../components/jsxComponents/main/form/FormSelect";
import ServerRequest from "../../../../components/logicComponents/ServerRequest";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";
import NumberInput from "../../../../components/jsxComponents/main/form/NumberInput";
import DateInput from "../../../../components/jsxComponents/main/form/DateInput";
import TextInput from "../../../../components/jsxComponents/main/form/TextInput";
import FormField from "../../../../components/logicComponents/FormField";
import BodyConstructor from "../../../../components/logicComponents/BodyConstructor";
import StartEndDatesChecker from "../../../../components/logicComponents/StartEndDatesChecker";
import {RegexPattern} from "../../../../enums/RegexPattern";

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

    const { textValue: value1, isMatches: matches1 } = FormField(field1);
    const { textValue: value2, isMatches: matches2 } = FormField(field2);
    const { textValue: value3, isMatches: matches3 } = FormField(field3);
    const { textValue: value4, isMatches: matches4 } = FormField(field4);
    const { textValue: value5, isMatches: matches5 } = FormField(field5);
    const { numValue: value6, isMatches: matches6 } = FormField(field6);
    const { numValue: value7, isMatches: matches7 } = FormField(field7);
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
        ]
    )

    const { isStartBeforeEnd } = StartEndDatesChecker(
        value4 === '' ? couponBean.startDate : value4,
        value5 === '' ? couponBean.endDate : value5
    );

    return (
        <form className="UpdateCoupon" onSubmit={ handleSubmit }>
            <div>
                <FormSelect
                    className={field1}
                    label="categories"
                />
            </div>
            <div>
                <TextInput
                    className={field2}
                    placeholder="title"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <TextInput
                    className={field3}
                    placeholder="description"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <DateInput
                    className={field4}
                />
            </div>
            <div>
                <DateInput
                    className={field5}
                />
            </div>
            <div>
                <NumberInput
                    className={field6}
                    placeholder="amount"
                    min={1}
                />
            </div>
            <div>
                <NumberInput
                    className={field7}
                    placeholder="price"
                    min={0.01}
                    decimal={true}
                />
            </div>
            <div>
                <FormSubmit
                    checksArray={[
                        value1 === '' ? true : matches1,
                        value2 === '' ? true : matches2,
                        value3 === '' ? true : matches3,
                        value4 === '' ? true : matches4,
                        value5 === '' ? true : matches5,
                        value6 <= 0 ? true : matches6,
                        value7 <= 0 ? true : matches7,
                        isStartBeforeEnd
                    ]}
                />
            </div>
            {isSubmitted &&
                <ServerRequest
                    method={axiosMethod}
                    link={link}
                    body={body}
                    pushSuccess={historyPushIfSuccess}
                    pushFail={historyPushIfFail}
                />}
        </form>
    );
}

export default UpdateCoupon;

// import React, {useState} from 'react';
// import './UpdateCoupon.css';
// import {useSelector} from "react-redux";
// import ConfigureStore from "../../../../redux/StoreConfig";
// import FormSubmit from "../../../../components/jsxComponents/main/form/FormSubmit";
// import FormSelect from "../../../../components/jsxComponents/main/form/FormSelect";
// import ServerRequest from "../../../../components/logicComponents/ServerRequest";
// import {ServerURL} from "../../../../enums/ServerURL";
// import {ClientURL} from "../../../../enums/ClientURL";
// import NumberInput from "../../../../components/jsxComponents/main/form/NumberInput";
// import DateInput from "../../../../components/jsxComponents/main/form/DateInput";
// import TextInput from "../../../../components/jsxComponents/main/form/TextInput";
// import FormField from "../../../../components/logicComponents/FormField";
// import BodyConstructor from "../../../../components/logicComponents/BodyConstructor";
//
// const UpdateCoupon = (): JSX.Element => {
//
//     const { couponBean } = useSelector((state) => ConfigureStore.getState().UpdateBeanSlice);
//
//     console.log("bean: " + couponBean.price)
//
//     const [link] = useState(ServerURL.updateCoupon);
//     const [historyPushIfSuccess] = useState(ClientURL.companyCoupons);
//     const [historyPushIfFail] = useState(ClientURL.companyCoupons);
//     const axiosMethod = 'PUT';
//     const field1 = 'category';
//     const field2 = 'title';
//     const field3 = 'description';
//     const field4 = 'startDate';
//     const field5 = 'endDate';
//     const field6 = 'amount';
//     const field7 = 'price';
//     const field8 = 'image';
//
//     const { textValue: value1 } = FormField(field1);
//     const { textValue: value2 } = FormField(field2);
//     const { textValue: value3 } = FormField(field3);
//     const { textValue: value4 } = FormField(field4);
//     const { textValue: value5 } = FormField(field5);
//     const { numValue: value6 } = FormField(field6);
//     const { numValue: value7 } = FormField(field7);
//     const value8 = "imageToReplace";
//
//     const { handleSubmit, body, isSubmitted } = BodyConstructor(
//         ["id", field1, field2, field3, field4, field5, field6, field7, field8],
//         [
//             couponBean.id,
//             value1 === '' ? JSON.stringify(couponBean.category) : value1,
//             value2 === '' ? couponBean.title : value2,
//             value3 === '' ? couponBean.description : value3,
//             value4 === '' ? couponBean.startDate : value4,
//             value5 === '' ? couponBean.endDate : value5,
//             value6 <= 0 ? couponBean.amount : value6,
//             value7 <= 0 ? couponBean.price : value7,
//             value8
//         ],
//         historyPushIfSuccess,
//         historyPushIfFail
//     )
//
//     return (
//         <form className="UpdateCoupon" onSubmit={ handleSubmit }>
//             <div>
//                 <FormSelect className={field1} />
//             </div>
//             <div>
//                 <TextInput className={field2} placeholder="title" />
//             </div>
//             <div>
//                 <TextInput className={field3} placeholder="description" />
//             </div>
//             <div>
//                 <DateInput className={field4} />
//             </div>
//             <div>
//                 <DateInput className={field5} />
//             </div>
//             <div>
//                 <NumberInput className={field6} placeholder="amount" min={1} />
//             </div>
//             <div>
//                 <NumberInput className={field7} placeholder="price" min={0.01} decimal={true} />
//             </div>
//             <div>
//                 <FormSubmit />
//             </div>
//             {isSubmitted && <ServerRequest method={axiosMethod} link={link} body={body} />}
//         </form>
//     );
// }
//
// export default UpdateCoupon;
