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

const AddCoupon = (): JSX.Element => {

    const [link] = useState(ServerURL.addCoupon);
    const [historyPushIfSuccess] = useState(ClientURL.companyCoupons);
    const [historyPushIfFail] = useState(ClientURL.companyCoupons);
    const axiosMethod = 'POST'
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
        [field1, field2, field3, field4, field5, field6, field7, field8],
        [value1, value2, value3, value4, value5, value6, value7, value8],
        historyPushIfSuccess,
        historyPushIfFail
    )

    const props = {
        required: true
    }

    return (
        <form className="AddCoupon" onSubmit={ handleSubmit }>
            <div>
                <FormSelect className={field1} />
            </div>
            <div>
                <TextInput {...props} className={field2} placeholder="title"/>
            </div>
            <div>
                <TextInput {...props} className={field3} placeholder="description"/>
            </div>
            <div>
                <DateInput {...props} className={field4}/>
            </div>
            <div>
                <DateInput {...props} className={field5}/>
            </div>
            <div>
                <NumberInput {...props} className={field6} placeholder="amount" min={1} />
            </div>
            <div>
                <NumberInput {...props} className={field7} placeholder="price" min={0.01} decimal={true} />
            </div>
            <div>
                <FormSubmit />
            </div>
            {isSubmitted && <ServerRequest link={link} method={axiosMethod} body={body} />}
        </form>
    );
}

export default AddCoupon;

// import './AddCoupon.css';
// import FormSubmit from "../../../components/form/FormSubmit";
// import FormSelect from "../../../components/form/FormSelect";
// import ServerRequest from "../../../components/main/actions/ServerRequest";
// import TextInput from "../../../components/form/TextInput";
// import DateInput from "../../../components/form/DateInput";
// import NumberInput from "../../../components/form/NumberInput";
// import AddCouponLogic from "../../../components/main/AddCouponLogic";
//
// const AddCoupon = (): JSX.Element => {
//
//     const { handleSubmit, isSubmitted, link, body } = AddCouponLogic();
//
//     return (
//         <form className="AddCoupon" onSubmit={ handleSubmit }>
//             <div>
//                 <FormSelect className={ 'couponCategory' } />
//             </div>
//             <div>
//                 <TextInput className="couponTitle" placeholder="title" required={true}/>
//             </div>
//             <div>
//                 <TextInput className="couponDescription" placeholder="description" required={true}/>
//             </div>
//             <div>
//                 <DateInput className="couponStartDate" required={true}/>
//             </div>
//             <div>
//                 <DateInput className="couponEndDate" required={true}/>
//             </div>
//             <div>
//                 <NumberInput className="couponAmount" placeholder="amount" min={1} required={true} />
//             </div>
//             <div>
//                 <NumberInput className="couponPrice" placeholder="price" min={0.01} decimal={true} required={true} />
//             </div>
//             <div>
//                 <FormSubmit />
//             </div>
//             {isSubmitted && <ServerRequest link={link} method={"POST"} body={body} />}
//         </form>
//     );
// }
//
// export default AddCoupon;
