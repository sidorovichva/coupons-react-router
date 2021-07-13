import './AddCustomer.css';
import FormSubmit from "../../../../components/jsxComponents/main/form/FormSubmit";
import ServerRequest from "../../../../components/logicComponents/ServerRequest";
import TextInput from "../../../../components/jsxComponents/main/form/TextInput";
import PasswordInput from "../../../../components/jsxComponents/main/form/PasswordInput";
import {RegexPattern} from "../../../../enums/RegexPattern";
import {useState} from "react";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";
import FormField from "../../../../components/logicComponents/FormField";
import BodyConstructor from "../../../../components/logicComponents/BodyConstructor";

const AddCustomer = (): JSX.Element => {

    const [link] = useState(ServerURL.addCustomer);
    const [historyPushIfSuccess] = useState(ClientURL.allCustomers);
    const [historyPushIfFail] = useState(ClientURL.allCustomers);
    const axiosMethod = 'POST'
    const field1 = 'firstName';
    const field2 = 'lastName';
    const field3 = 'email';
    const field4 = 'password';

    const { textValue: value1 } = FormField(field1);
    const { textValue: value2 } = FormField(field2);
    const { textValue: value3 } = FormField(field3);
    const { textValue: value4 } = FormField(field4);

    const { handleSubmit, body, isSubmitted } = BodyConstructor(
        [field1, field2, field3, field4],
        [value1, value2, value3, value4],
        historyPushIfSuccess,
        historyPushIfFail
    )

    const props = {
        required: true
    }

    return (
        <form className="AddCustomer" onSubmit={ handleSubmit }>
            <div>
                <TextInput {...props} className={field1} placeholder="first name" />
            </div>
            <div>
                <TextInput {...props} className={field2} placeholder="last name" />
            </div>
            <div>
                <TextInput
                    {...props}
                    className={field3}
                    placeholder="e-mail"
                    regex={RegExp(RegexPattern.email)}
                />
            </div>
            <div>
                <PasswordInput
                    {...props}
                    className={field4}
                    placeholder="password"
                    regex={RegExp(RegexPattern.password)}
                />
            </div>
            <div>
                <FormSubmit />
            </div>
            {isSubmitted && <ServerRequest link={link} method={axiosMethod} body={body} />}
        </form>
    );
}

export default AddCustomer;

// import './AddCustomer.css';
// import FormSubmit from "../../components/form/FormSubmit";
// import ServerRequest from "../../components/main/actions/ServerRequest";
// import TextInput from "../../components/form/TextInput";
// import PasswordInput from "../../components/form/PasswordInput";
// import {RegexPattern} from "../../enums/RegexPattern";
// import AddCustomerLogic from "../../components/main/AddCustomerLogic";
//
// const AddCustomer = (): JSX.Element => {
//
//     const { handleSubmit, isSubmitted, link, body } = AddCustomerLogic();
//
//     return (
//         <form className="AddCustomer" onSubmit={ handleSubmit }>
//             <div>
//                 <TextInput className="customerFirstName" placeholder="first name" required={true}/>
//             </div>
//             <div>
//                 <TextInput className="customerLastName" placeholder="last name" required={true}/>
//             </div>
//             <div>
//                 <TextInput
//                     className="customerEmail"
//                     placeholder="e-mail"
//                     required={true}
//                     regex={RegExp(RegexPattern.email)}
//                 />
//             </div>
//             <div>
//                 <PasswordInput
//                     className="customerPassword"
//                     placeholder="password"
//                     regex={RegExp(RegexPattern.password)}
//                 />
//             </div>
//             <div>
//                 <FormSubmit />
//             </div>
//             {isSubmitted && <ServerRequest link={link} method={"POST"} body={body} />}
//         </form>
//     );
// }
//
// export default AddCustomer;