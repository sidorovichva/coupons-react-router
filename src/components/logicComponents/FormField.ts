import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {useEffect, useState} from "react";

const FormField = (fieldName: string) => {

    const { numericInput, textInput, field, matches } = useSelector((state) => ConfigureStore.getState().InputSlice);

    const [textValue, setFieldValue] = useState<string>('');
    const [numValue, setNumValue] = useState<number>(0);
    const [isMatches, setIsMatches] = useState<boolean>(false);

    useEffect(() => {
        if (field === fieldName) {
            setFieldValue(textInput);
            setIsMatches(matches);
        }
    }, [textInput])

    useEffect(() => {
        if (field === fieldName) {
            setNumValue(numericInput);
            setIsMatches(matches);
        }
    }, [numericInput])

    return { textValue, numValue, isMatches };
}

export default FormField;

// import {useSelector} from "react-redux";
// import ConfigureStore from "../../redux/StoreConfig";
// import {useEffect, useState} from "react";
//
// const FormField = (fieldName: string) => {
//
//     const { numericInput, textInput, field } = useSelector((state) => ConfigureStore.getState().InputSlice);
//
//     const [textValue, setFieldValue] = useState<string>('');
//     const [numValue, setNumValue] = useState<number>(0);
//
//     useEffect(() => {
//         if (field === fieldName) setFieldValue(textInput);
//     }, [textInput])
//
//     useEffect(() => {
//         if (field === fieldName) setNumValue(numericInput);
//     }, [numericInput])
//
//     return { textValue, numValue };
// }
//
// export default FormField;