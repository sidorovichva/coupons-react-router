import React, {useEffect, useState} from 'react';
import './PasswordInput.css';
import {useDispatch} from "react-redux";
import {setTextValue} from "../../../../redux/InputSlice";
import {RegexPattern} from "../../../../enums/RegexPattern";

interface Props {
    className: string
    isCorrect?: boolean,
    placeholder?: string
    required?: boolean
    regex?: RegExp
}

const PasswordInput: React.FC<Props> = ({
    className,
    isCorrect,
    placeholder,
    required,
    regex
}): JSX.Element => {

    const dispatch = useDispatch();

    const [returnValue, setReturnValue] = useState('');
    const [matches, setMatches] = useState(false);
    const [isExposed, setIsExposed] = useState(false);

    useEffect(() => {
        const innerBoolean = regex === undefined ? true : !!returnValue.toLowerCase().match(regex)
        setMatches(innerBoolean)
        dispatch(setTextValue({
            textInputValue: returnValue,
            fieldValue: className,
            matchesValue: innerBoolean
        }));
    }, [returnValue])

    const handleExpose = () => {
        setIsExposed(!isExposed)
    }

    return(
        <div className="PasswordInput">
            {required === true ? <input
                className={ className }
                type={isExposed ? "text" : "password"}
                placeholder={ placeholder === undefined ? '' : placeholder }
                value={ returnValue }
                onChange={(e) => setReturnValue(e.target.value)}
                required
            /> : <input
                className={ className }
                type={isExposed ? "text" : "password"}
                placeholder={ placeholder === undefined ? '' : placeholder }
                value={ returnValue }
                onChange={(e) => setReturnValue(e.target.value)}
            />}
            {matches && (isCorrect || isCorrect === undefined) && <svg className="check" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
            </svg>}
            {isExposed ? <svg viewBox="0 0 24 24" className="eye" onClick={handleExpose}>
                    <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                </svg> :
                <svg viewBox="0 0 24 24" className="eye" onClick={handleExpose}>
                    <path fill="currentColor" d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" />
                </svg>}
            {/*<div className="hints">*/}
            {/*    <div>*/}
            {/*        1 lowercase character (a-z)*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        1 uppercase character (A-Z)*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        1 digit (0-9)*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        1 symbol: (! @ # $ % ^ & *)*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        At least 8 characters*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
};

export default PasswordInput;

// import React, {useEffect, useState} from 'react';
// import './PasswordInput.css';
// import {useDispatch} from "react-redux";
// import {setTextValue} from "../../../../redux/InputSlice";
//
// interface Props {
//     className: string
//     placeholder?: string
//     regex?: RegExp
// }
//
// const PasswordInput: React.FC<Props> = ({
//                                             className,
//                                             placeholder,
//                                             regex
//                                         }): JSX.Element => {
//
//     const dispatch = useDispatch();
//
//     const [returnValue, setReturnValue] = useState('');
//     const [matches, setMatches] = useState(false);
//     const [isExposed, setIsExposed] = useState(false);
//
//     useEffect(() => {
//
//         if (regex !== undefined && returnValue.toLowerCase().match(regex)) setMatches(true)
//         else setMatches(false)
//
//         dispatch(setTextValue({
//             textInputValue: returnValue,
//             fieldValue: className
//         }));
//     }, [returnValue])
//
//     const handleExpose = () => {
//         setIsExposed(!isExposed)
//     }
//
//     return(
//         <div className="PasswordInput">
//             <input
//                 className={ className }
//                 type={isExposed ? "text" : "password"}
//                 placeholder={ placeholder === undefined ? '' : placeholder }
//                 value={ returnValue }
//                 onChange={(e) => setReturnValue(e.target.value)}
//                 required
//             />
//             {matches && <svg className="check" viewBox="0 0 24 24">
//                 <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
//             </svg>}
//             {isExposed ? <svg viewBox="0 0 24 24" className="eye" onClick={handleExpose}>
//                     <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
//                 </svg> :
//                 <svg viewBox="0 0 24 24" className="eye" onClick={handleExpose}>
//                     <path fill="currentColor" d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" />
//                 </svg>}
//             {/*<div className="hints">*/}
//             {/*    <div>*/}
//             {/*        1 lowercase character (a-z)*/}
//             {/*    </div>*/}
//             {/*    <div>*/}
//             {/*        1 uppercase character (A-Z)*/}
//             {/*    </div>*/}
//             {/*    <div>*/}
//             {/*        1 digit (0-9)*/}
//             {/*    </div>*/}
//             {/*    <div>*/}
//             {/*        1 symbol: (! @ # $ % ^ & *)*/}
//             {/*    </div>*/}
//             {/*    <div>*/}
//             {/*        At least 8 characters*/}
//             {/*    </div>*/}
//             {/*</div>*/}
//         </div>
//     )
// };
//
// export default PasswordInput;