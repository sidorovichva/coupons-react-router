import {SyntheticEvent, useState} from "react";
import {ClientURL} from "../../enums/ClientURL";
import useHistoryPush from "../../hooks/useHistoryPush";

const BodyConstructor = (
    fields: string[],
    values: any[] ,
    pushSuccess?: ClientURL,
    pushFail?: ClientURL
) => {

    // console.log("beforeNewHistoryPush")
    // useHistoryPush(pushSuccess, pushFail);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        let temp = '';
        for (let i = 0; i < fields.length; i++) {
            console.log(typeof values[i] + " " + values[i])
            if (typeof values[i] === "number" || values[i].startsWith('{')) temp += (`"${fields[i]}":${values[i]}`)
            else temp += (`"${fields[i]}":"${values[i]}"`)
            if (i < fields.length - 1) temp += ','
        }
        setBody('{' + temp + '}')
        setIsSubmitted(true);
    }
    
    return { handleSubmit, body, isSubmitted };
}

export default BodyConstructor;

// import {SyntheticEvent, useState} from "react";
// import {ClientURL} from "../../enums/ClientURL";
// import useHistoryPush from "../../hooks/useHistoryPush";
//
// const BodyConstructor = (
//     fields: string[],
//     values: any[] ,
//     pushSuccess: ClientURL,
//     pushFail: ClientURL
// ) => {
//
//     console.log("beforeNewHistoryPush")
//     useHistoryPush(pushSuccess, pushFail);
//
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [body, setBody] = useState('');
//
//     const handleSubmit = (args: SyntheticEvent) => {
//         args.preventDefault();
//         let temp = '';
//         for (let i = 0; i < fields.length; i++) {
//             console.log(typeof values[i] + " " + values[i])
//             if (typeof values[i] === "number" || values[i].startsWith('{')) temp += (`"${fields[i]}":${values[i]}`)
//             else temp += (`"${fields[i]}":"${values[i]}"`)
//             if (i < fields.length - 1) temp += ','
//         }
//         setBody('{' + temp + '}')
//         setIsSubmitted(true);
//     }
//
//     return { handleSubmit, body, isSubmitted };
// }
//
// export default BodyConstructor;