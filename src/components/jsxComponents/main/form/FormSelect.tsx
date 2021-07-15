import React, {useEffect, useState} from 'react';
import './FormSelect.css';
import {useDispatch} from "react-redux";
import {setTextValue} from "../../../../redux/InputSlice";
import {CategoryInt} from "../../../../interfaces/CategoryInt";
import {ServerURL} from "../../../../enums/ServerURL";
import useGet from "../../../../hooks/axiosHooks/useGet";

interface Props {
    className: string,
    label: string,
    isCorrect?: boolean,
}

const FormSelect: React.FC<Props> = ({
     className,
     label,
     isCorrect
 }): JSX.Element => {

    const dispatch = useDispatch();

    const { data: array } = useGet(ServerURL.allCategories)

    const [returnValue, setReturnValue] = useState('');
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const innerBoolean = returnValue !== '';
        setMatches(innerBoolean)
        dispatch(setTextValue({
            textInputValue: JSON.stringify(returnValue),
            //valueValue: returnValue,
            fieldValue: className,
            matchesValue: innerBoolean
        }));
    }, [returnValue])

    return (
        <div className="FormSelect">
            <select
                autoFocus={true}
                size={1}
                className={ className }
                onChange={(e) => (setReturnValue(JSON.parse(e.target.value)))}
            >
                <option selected hidden>{ label }</option>
                {array.map((category: CategoryInt) => (
                    <option key={category.id} value={JSON.stringify(category)}>{category.name}</option>
                ))};
            </select>
            {matches && (isCorrect || isCorrect === undefined) && <svg className="check" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
            </svg>}
        </div>
    );
};

export default FormSelect;

// import React, {useEffect, useState} from 'react';
// import './FormSelect.css';
// import {useDispatch} from "react-redux";
// import {setTextValue} from "../../../../redux/InputSlice";
// import {CategoryInt} from "../../../../interfaces/CategoryInt";
// import {ServerURL} from "../../../../enums/ServerURL";
// import useGet from "../../../../hooks/axiosHooks/useGet";
//
// interface Props {
//     className: string,
//     isCorrect?: boolean,
// }
//
// const FormSelect: React.FC<Props> = ({
//                                          className,
//                                          isCorrect
//                                      }): JSX.Element => {
//
//     const dispatch = useDispatch();
//
//     const { data: array } = useGet(ServerURL.allCategories)
//
//     const [returnValue, setReturnValue] = useState('');
//     const [matches, setMatches] = useState(false);
//
//     useEffect(() => {
//         const innerBoolean = returnValue !== '';
//         setMatches(innerBoolean)
//         dispatch(setTextValue({
//             textInputValue: JSON.stringify(returnValue),
//             //valueValue: returnValue,
//             fieldValue: className,
//             matchesValue: innerBoolean
//         }));
//     }, [returnValue])
//
//     return (
//         <div className="FormSelect">
//             <select
//                 className={ className }
//                 onChange={(e) => (setReturnValue(JSON.parse(e.target.value)))}
//             >
//                 {array.map((category: CategoryInt) => (
//                     <option key={category.id} value={JSON.stringify(category)}>{category.name}</option>
//                 ))};
//             </select>
//             {matches && (isCorrect || isCorrect === undefined) && <svg className="check" viewBox="0 0 24 24">
//                 <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
//             </svg>}
//         </div>
//     );
// };
//
// export default FormSelect;
