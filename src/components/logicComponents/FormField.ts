import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {useEffect, useState} from "react";

const FormField = (fieldName: string) => {

    const { numericInput, value, field } = useSelector((state) => ConfigureStore.getState().InputSlice);

    const [textValue, setFieldValue] = useState<string>('');
    const [numValue, setNumValue] = useState<number>(0);

    useEffect(() => {

        if (field === fieldName) setFieldValue(value);
    }, [value])

    useEffect(() => {
        console.log(field + " - " + numericInput)
        if (field === fieldName) setNumValue(numericInput);
    }, [numericInput])

    return { textValue, numValue };
}

export default FormField;

// import {useSelector} from "react-redux";
// import ConfigureStore from "../redux/StoreConfig";
// import {useEffect, useState} from "react";
//
// const FormField = (fieldName: string) => {
//
//     const { numericInput, value, field } = useSelector((state) => ConfigureStore.getState().InputSlice);
//
//     const [fieldValue, setFieldValue] = useState<string | number>('');
//
//     useEffect(() => {
//         if (field === fieldName) setFieldValue(value);
//     }, [value])
//
//     useEffect(() => {
//         if (field === fieldName) setFieldValue(numericInput);
//     }, [numericInput])
//
//     return { fieldValue };
// }
//
// export default FormField;