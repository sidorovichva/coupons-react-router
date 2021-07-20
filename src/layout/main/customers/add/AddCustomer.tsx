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
import {useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import {Role} from "../../../../enums/Role";
import {Axios} from "../../../../enums/Axios";

const AddCustomer = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const [link] = useState(ServerURL.addCustomer);
    const [historyPushIfSuccess] = useState(role === Role.ADMINISTRATOR ? ClientURL.allCustomers : ClientURL.login);
    const [historyPushIfFail] = useState(role === Role.ADMINISTRATOR ? ClientURL.allCustomers : ClientURL.allCoupons);
    const axiosMethod = Axios.POST;

    const field1 = 'firstName';
    const field2 = 'lastName';
    const field3 = 'email';
    const field4 = 'password';

    const { textValue: value1, isMatches: matches1 } = FormField(field1);
    const { textValue: value2, isMatches: matches2 } = FormField(field2);
    const { textValue: value3, isMatches: matches3 } = FormField(field3);
    const { textValue: value4, isMatches: matches4 } = FormField(field4);

    const { handleSubmit, body, isSubmitted } = BodyConstructor(
        [field1, field2, field3, field4],
        [value1, value2, value3, value4]
    )

    const props = {
        required: true
    }

    return (
        <form className="AddCustomer" onSubmit={ handleSubmit }>
            <div>
                <TextInput
                    {...props}
                    className={field1}
                    placeholder="first name"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <TextInput
                    {...props}
                    className={field2}
                    placeholder="last name"
                    regex={RegExp(RegexPattern.title)}
                />
            </div>
            <div>
                <TextInput
                    {...props}
                    className={field3}
                    type="email"
                    placeholder="e-mail"
                    regex={RegExp(RegexPattern.email)}
                />
            </div>
            <div>
                <PasswordInput
                    {...props}
                    className={field4}
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
                        matches3,
                        matches4,
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

export default AddCustomer;