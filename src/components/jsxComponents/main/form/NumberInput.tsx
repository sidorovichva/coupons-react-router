import React, {useEffect, useState} from 'react';
import './NumberInput.css';
import {useDispatch} from "react-redux";
import {setNumericValue} from "../../../../redux/InputSlice";
import Check from "../../icons/Check";

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
                {matches && (isCorrect || isCorrect === undefined) && <Check />}
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
                {matches && (isCorrect || isCorrect === undefined) && <Check />}
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