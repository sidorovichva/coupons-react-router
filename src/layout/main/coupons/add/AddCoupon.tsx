import './AddCoupon.css';
import FormSubmit from "../../../../components/jsxComponents/main/form/FormSubmit";
import FormSelect from "../../../../components/jsxComponents/main/form/FormSelect";
import ServerRequest from "../../../../components/logicComponents/ServerRequest";
import TextInput from "../../../../components/jsxComponents/main/form/TextInput";
import DateInput from "../../../../components/jsxComponents/main/form/DateInput";
import NumberInput from "../../../../components/jsxComponents/main/form/NumberInput";
import {useState} from "react";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";
import FormField from "../../../../components/logicComponents/FormField";
import BodyConstructor from "../../../../components/logicComponents/BodyConstructor";
import {Method} from "axios";
import {RegexPattern} from "../../../../enums/RegexPattern";
import StartEndDatesChecker from "../../../../components/logicComponents/StartEndDatesChecker";

const AddCoupon = (): JSX.Element => {

    const [link] = useState(ServerURL.addCoupon);
    const [historyPushIfSuccess] = useState(ClientURL.companyCoupons);
    const [historyPushIfFail] = useState(ClientURL.companyCoupons);
    const axiosMethod: Method = 'POST'

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
        [field1, field2, field3, field4, field5, field6, field7, field8],
        [value1, value2, value3, value4, value5, value6, value7, value8]
    );

    const { isStartBeforeEnd } = StartEndDatesChecker(value4, value5);

    const props = {
        required: true
    }

    return (
        <form className="AddCoupon" onSubmit={ handleSubmit }>
            <div>
                <FormSelect
                    className={field1}
                    label="categories"
                />
            </div>
            <div>
                <TextInput
                    {...props}
                    className={field2}
                    placeholder="title"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <TextInput
                    {...props}
                    className={field3}
                    placeholder="description"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <DateInput
                    {...props}
                    className={field4}
                    placeholder="Sales start date"
                />
            </div>
            <div>
                <DateInput
                    {...props}
                    className={field5}
                    placeholder="Sales end date"
                    isCorrect={isStartBeforeEnd}
                />
            </div>
            <div>
                <NumberInput
                    {...props}
                    className={field6}
                    placeholder="amount"
                    min={1}
                />
            </div>
            <div>
                <NumberInput
                    {...props}
                    className={field7}
                    placeholder="price"
                    min={0.01}
                    decimal={true}
                />
            </div>
            <div>
                <FormSubmit
                    checksArray={[
                        matches1,
                        matches2,
                        matches3,
                        matches4,
                        matches5,
                        matches6,
                        matches7,
                        isStartBeforeEnd
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

export default AddCoupon;

// import './AddCoupon.css';
// import FormSubmit from "../../../../components/jsxComponents/main/form/FormSubmit";
// import FormSelect from "../../../../components/jsxComponents/main/form/FormSelect";
// import ServerRequest from "../../../../components/logicComponents/ServerRequest";
// import TextInput from "../../../../components/jsxComponents/main/form/TextInput";
// import DateInput from "../../../../components/jsxComponents/main/form/DateInput";
// import NumberInput from "../../../../components/jsxComponents/main/form/NumberInput";
// import {useState} from "react";
// import {ServerURL} from "../../../../enums/ServerURL";
// import {ClientURL} from "../../../../enums/ClientURL";
// import FormField from "../../../../components/logicComponents/FormField";
// import BodyConstructor from "../../../../components/logicComponents/BodyConstructor";
// import {Method} from "axios";
// import {RegexPattern} from "../../../../enums/RegexPattern";
// import StartEndDatesChecker from "../../../../components/logicComponents/StartEndDatesChecker";
//
// const AddCoupon = (): JSX.Element => {
//
//     const [link] = useState(ServerURL.addCoupon);
//     const [historyPushIfSuccess] = useState(ClientURL.companyCoupons);
//     const [historyPushIfFail] = useState(ClientURL.companyCoupons);
//     const axiosMethod: Method = 'POST'
//
//     const field1 = 'category';
//     const field2 = 'title';
//     const field3 = 'description';
//     const field4 = 'startDate';
//     const field5 = 'endDate';
//     const field6 = 'amount';
//     const field7 = 'price';
//     const field8 = 'image';
//
//     const { textValue: value1, isMatches: matches1 } = FormField(field1);
//     const { textValue: value2, isMatches: matches2 } = FormField(field2);
//     const { textValue: value3, isMatches: matches3 } = FormField(field3);
//     const { textValue: value4, isMatches: matches4 } = FormField(field4);
//     const { textValue: value5, isMatches: matches5 } = FormField(field5);
//     const { numValue: value6, isMatches: matches6 } = FormField(field6);
//     const { numValue: value7, isMatches: matches7 } = FormField(field7);
//     const value8 = "imageToReplace";
//
//     const { handleSubmit, body, isSubmitted } = BodyConstructor(
//         [field1, field2, field3, field4, field5, field6, field7, field8],
//         [value1, value2, value3, value4, value5, value6, value7, value8],
//         historyPushIfSuccess,
//         historyPushIfFail
//     );
//
//     const { isStartBeforeEnd } = StartEndDatesChecker(value4, value5);
//
//     const props = {
//         required: true
//     }
//
//     return (
//         <form className="AddCoupon" onSubmit={ handleSubmit }>
//             <div>
//                 <FormSelect
//                     className={field1}
//                     label="categories"
//                 />
//             </div>
//             <div>
//                 <TextInput
//                     {...props}
//                     className={field2}
//                     placeholder="title"
//                     regex={RegExp(RegexPattern.title)}
//                 />
//             </div>
//             <div>
//                 <TextInput
//                     {...props}
//                     className={field3}
//                     placeholder="description"
//                     regex={RegExp(RegexPattern.title)}
//                 />
//             </div>
//             <div>
//                 <DateInput
//                     {...props}
//                     className={field4}
//                 />
//             </div>
//             <div>
//                 <DateInput
//                     {...props}
//                     className={field5}
//                     isCorrect={isStartBeforeEnd}
//                 />
//             </div>
//             <div>
//                 <NumberInput
//                     {...props}
//                     className={field6}
//                     placeholder="amount"
//                     min={1}
//                 />
//             </div>
//             <div>
//                 <NumberInput
//                     {...props}
//                     className={field7}
//                     placeholder="price"
//                     min={0.01}
//                     decimal={true}
//                 />
//             </div>
//             <div>
//                 <FormSubmit
//                     checksArray={[
//                         matches1,
//                         matches2,
//                         matches3,
//                         matches4,
//                         matches5,
//                         matches6,
//                         matches7,
//                         isStartBeforeEnd
//                     ]}
//                 />
//             </div>
//             {isSubmitted && <ServerRequest link={link} method={axiosMethod} body={body} />}
//         </form>
//     );
// }
//
// export default AddCoupon;
