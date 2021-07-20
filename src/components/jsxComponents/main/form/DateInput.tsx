import React, {useEffect, useState} from 'react';
import './DateInput.css';
import {useDispatch} from "react-redux";
import {setTextValue} from "../../../../redux/InputSlice";
import Check from "../../icons/Check";

interface Props {
    className: string,
    isCorrect?: boolean,
    // fieldColor?: string,
    placeholder?: string
    required?: boolean
}

const DateInput: React.FC<Props> = ({
    className,
    isCorrect,
    // fieldColor,
    placeholder,
    required
}): JSX.Element => {

    const dispatch = useDispatch();

    const [returnValue, setReturnValue] = useState('');
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const innerBoolean = Date.parse(returnValue) >= Date.now();
        setMatches(innerBoolean)
        dispatch(setTextValue({
            textInputValue: returnValue,
            fieldValue: className,
            matchesValue: innerBoolean
        }));
    }, [returnValue])

    if (required !== true) {
        return(
            <div className="DateInput">
                <input
                    // style={{backgroundColor: fieldColor}}
                    className={ className }
                    type="date"
                    placeholder={ placeholder === undefined ? '' : placeholder }
                    value={ returnValue }
                    onChange={(e) => setReturnValue(e.target.value)}
                />
                {matches && (isCorrect || isCorrect === undefined) && <Check />}
                {/*// <svg className="check" viewBox="0 0 24 24">*/}
                {/*//     <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />*/}
                {/*// </svg>}*/}
            </div>
        )
    } else {
        return(
            <div className="DateInput">
                <input
                    // style={{backgroundColor: fieldColor}}
                    className={ className }
                    type="date"
                    placeholder={ placeholder === undefined ? '' : placeholder }
                    value={ returnValue }
                    onChange={(e) => setReturnValue(e.target.value)}
                    required
                />
                {matches && (isCorrect || isCorrect === undefined) && <Check />}
                {/*<svg className="check" viewBox="0 0 24 24">*/}
                {/*    <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />*/}
                {/*</svg>}*/}
            </div>
        )
    }
};

export default DateInput;

// import React, {useEffect, useState} from 'react';
// import './DateInput.css';
// import {useDispatch} from "react-redux";
// import {use} from "../../../../redux/InputSlice";
//
// interface Props {
//     className: string
//     placeholder?: string
//     required?: boolean
// }
//
// const DateInput: React.FC<Props> = ({
//                                         className,
//                                         placeholder,
//                                         required
//                                     }): JSX.Element => {
//
//     const dispatch = useDispatch();
//
//     const [returnValue, setReturnValue] = useState('');
//
//     useEffect(() => {
//         dispatch(use({
//             valueValue: returnValue,
//             fieldValue: className
//         }));
//     }, [returnValue])
//
//     if (required !== true) {
//         return(
//             <div className="DateInput">
//                 <input
//                     className={ className }
//                     type="date"
//                     placeholder={ placeholder === undefined ? '' : placeholder }
//                     value={ returnValue }
//                     onChange={(e) => setReturnValue(e.target.value)}
//                 />
//             </div>
//         )
//     } else {
//         return(
//             <div className="DateInput">
//                 <input
//                     className={ className }
//                     type="date"
//                     placeholder={ placeholder === undefined ? '' : placeholder }
//                     value={ returnValue }
//                     onChange={(e) => setReturnValue(e.target.value)}
//                     required
//                 />
//             </div>
//         )
//     }
// };
//
// export default DateInput;