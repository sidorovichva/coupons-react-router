import {SyntheticEvent, useState} from "react";

const BodyConstructor = (
    fields: string[],
    values: any[] ,
) => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        let temp = '';
        for (let i = 0; i < fields.length; i++) {
            if (typeof values[i] === "number" || values[i].startsWith('{"id":')) temp += (`"${fields[i]}":${values[i]}`)
            else temp += (`"${fields[i]}":"${values[i]}"`);
            if (i < fields.length - 1) temp += ',';
        }
        setBody('{' + temp + '}');
        setIsSubmitted(true);
    }
    
    return { handleSubmit, body, isSubmitted };
}

export default BodyConstructor;