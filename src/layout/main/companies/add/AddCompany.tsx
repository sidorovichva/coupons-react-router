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
import {Axios} from "../../../../enums/Axios";

const AddCompany = (): JSX.Element => {

    const [link] = useState(ServerURL.addCompany);
    const [historyPushIfSuccess] = useState(ClientURL.allCompanies);
    const [historyPushIfFail] = useState(ClientURL.allCompanies);
    const axiosMethod = Axios.POST;
    const field1 = 'name';
    const field2 = 'email';
    const field3 = 'password';

    const { textValue: value1, isMatches: matches1 } = FormField(field1);
    const { textValue: value2, isMatches: matches2 } = FormField(field2);
    const { textValue: value3, isMatches: matches3 } = FormField(field3);

    const { handleSubmit, body, isSubmitted } = BodyConstructor(
        [field1, field2, field3],
        [value1, value2, value3]
    );

    const props = {
        required: true
    };

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
                    type="email"
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