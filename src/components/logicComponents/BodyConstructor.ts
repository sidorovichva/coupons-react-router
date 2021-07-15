import {SyntheticEvent, useState} from "react";
import {ClientURL} from "../../enums/ClientURL";
import useHistoryPush from "../../hooks/useHistoryPush";

const BodyConstructor = (
    fields: string[],
    values: any[] ,
    pushSuccess: ClientURL,
    pushFail: ClientURL
) => {

    useHistoryPush(pushSuccess, pushFail);

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
// import {setHistoryPushLink} from "../../redux/HistoryPushSlice";
// import {ClientURL} from "../../enums/ClientURL";
// import {useDispatch} from "react-redux";
// import useHistoryPush from "../../hooks/useHistoryPush";
//
// const BodyConstructor = (
//     fields: string[],
//     values: any[] ,
//     pushSuccess: ClientURL,
//     pushFail: ClientURL
// ) => {
//
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
//                 //if (typeof values[i] === "number") temp += (`"${fields[i]}":${values[i]}`)
//                 //else if (typeof values[i] === "object") temp += (`"${fields[i]}":${JSON.stringify(values[i])}`)
//             //if (values[i].startsWith('{')) temp += (`"${fields[i]}":${values[i]}`)
//             else temp += (`"${fields[i]}":"${values[i]}"`)
//             //temp += (`"${fields[i]}":"${values[i]}"`)
//             if (i < fields.length - 1) temp += ','
//         }
//         setBody('{' + temp + '}')
//         //setBody(`{"${fields[0]}":"${values[0]}","${fields[1]}":"${values[1]}","${fields[2]}":"${values[2]}"}`);
//         setIsSubmitted(true);
//     }
//
//     return { handleSubmit, body, isSubmitted };
// }
//
// export default BodyConstructor;