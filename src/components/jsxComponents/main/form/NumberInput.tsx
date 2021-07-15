import React, {useEffect, useState} from 'react';
import './NumberInput.css';
import {useDispatch} from "react-redux";
import {setNumericValue} from "../../../../redux/InputSlice";

interface Props {
    className: string
    isCorrect?: boolean,
    placeholder?: string
    min?: number
    decimal?: boolean
    required?: boolean
}

const NumberInput: React.FC<Props> = ({
  className,
  isCorrect,
  placeholder,
  min,
  decimal,
  required
}): JSX.Element => {

    const dispatch = useDispatch();

    const [returnValue, setReturnValue] = useState<number | string>('');
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const innerBoolean = min === undefined ? true :
            returnValue >= min ? true : false
        setMatches(innerBoolean)
        dispatch(setNumericValue({
            numericInputValue: returnValue,
            fieldValue: className,
            matchesValue: innerBoolean
        }));
    }, [returnValue])

    if (required !== true) {
        return(
            <div className="NumberInput">
                <input
                    className={ className }
                    type="number"
                    placeholder={ placeholder === undefined ? '' : placeholder }
                    min={ min }
                    step={ decimal !== true ? "1" : ".01" }
                    value={ returnValue }
                    onChange={(e) => setReturnValue(parseFloat((e.target.value) || ''))}
                />
                {matches && (isCorrect || isCorrect === undefined) && <svg className="check" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                </svg>}
            </div>
        )
    } else {
        return(
            <div className="NumberInput">
                <input
                    className={ className }
                    type="number"
                    placeholder={ placeholder === undefined ? '' : placeholder }
                    min={ min }
                    step={ decimal !== true ? "1" : ".01" }
                    value={ returnValue }
                    onChange={(e) => setReturnValue(parseFloat((e.target.value) || ''))}
                    required
                />
                {matches && (isCorrect || isCorrect === undefined) && <svg className="check" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                </svg>}
            </div>
        )
    }
};

export default NumberInput;

// import React, {useEffect, useState} from 'react';
// import './NumberInput.css';
// import {useDispatch} from "react-redux";
// import {setNumericValue} from "../../../../redux/InputSlice";
//
// interface Props {
//     className: string
//     placeholder?: string
//     min?: number
//     decimal?: boolean
//     required?: boolean
// }
//
// const NumberInput: React.FC<Props> = ({
//                                           className,
//                                           placeholder,
//                                           min,
//                                           decimal,
//                                           required
//                                       }): JSX.Element => {
//
//     const dispatch = useDispatch();
//
//     const [returnValue, setReturnValue] = useState<number | string>('');
//
//     useEffect(() => {
//         console.log(returnValue)
//         dispatch(setNumericValue({
//             numericInputValue: returnValue,
//             fieldValue: className
//         }));
//     }, [returnValue])
//
//     if (required !== true) {
//         return(
//             <div className="NumberInput">
//                 <input
//                     className={ className }
//                     type="number"
//                     placeholder={ placeholder === undefined ? '' : placeholder }
//                     min={ min }
//                     step={ decimal !== true ? "1" : ".01" }
//                     value={ returnValue }
//                     onChange={(e) => setReturnValue(parseFloat(e.target.value) || '')}
//                 />
//             </div>
//         )
//     } else {
//         return(
//             <div className="NumberInput">
//                 <input
//                     className={ className }
//                     type="number"
//                     placeholder={ placeholder === undefined ? '' : placeholder }
//                     min={ min }
//                     step={ decimal !== true ? "1" : ".01" }
//                     value={ returnValue }
//                     onChange={(e) => setReturnValue(parseFloat(e.target.value) || '')}
//                     required
//                 />
//             </div>
//         )
//     }
// };
//
// export default NumberInput;