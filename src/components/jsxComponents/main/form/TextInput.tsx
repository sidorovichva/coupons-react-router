import React, {useEffect, useState} from 'react';
import './TextInput.css';
import {useDispatch} from "react-redux";
import {setTextValue} from "../../../../redux/InputSlice";
import {RegexPattern} from "../../../../enums/RegexPattern";
import Check from "../../icons/Check";

interface Props {
    className: string
    type?: string,
    isCorrect?: boolean,
    placeholder?: string
    required?: boolean
    regex?: RegExp
}

const TextInput: React.FC<Props> = ({
    className,
    type,
    isCorrect,
    placeholder,
    required,
    regex
}): JSX.Element => {

    const dispatch = useDispatch();

    const [returnValue, setReturnValue] = useState('');
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const innerBoolean = regex === undefined ? true : !!returnValue.toLowerCase().match(regex)
        setMatches(innerBoolean)
        dispatch(setTextValue({
            textInputValue: type === 'email' ? returnValue.toLowerCase() : returnValue,
            fieldValue: className,
            matchesValue: innerBoolean
        }));
    }, [returnValue] )

    if (required !== true) {
        return(
            <div className="TextInput">
                <input
                    className={ className }
                    type={type === 'email' ? "email" : "text"}
                    placeholder={ placeholder === undefined ? '' : placeholder }
                    value={ returnValue }
                    onChange={(e) => setReturnValue(e.target.value)}
                />
                {matches && (isCorrect || isCorrect === undefined) && <Check />}
                {/*<svg className="check" viewBox="0 0 24 24">*/}
                {/*    <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />*/}
                {/*</svg>}*/}
            </div>
        )
    } else {
        return(
            <div className="TextInput">
                <input
                    className={ className }
                    type={type === 'email' ? "email" : "text"}
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

export default TextInput;