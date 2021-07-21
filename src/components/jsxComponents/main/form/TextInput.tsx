import React, {useEffect, useState} from 'react';
import './TextInput.css';
import {useDispatch} from "react-redux";
import {setTextValue} from "../../../../redux/InputSlice";
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
        const innerBoolean = regex === undefined ? true : !!returnValue.toLowerCase().match(regex);
        setMatches(innerBoolean);
        dispatch(setTextValue({
            textInputValue: type === 'email' ? returnValue.toLowerCase() : returnValue,
            fieldValue: className,
            matchesValue: innerBoolean
        }));
    }, [returnValue] );

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
            </div>
        );
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
            </div>
        );
    }
}

export default TextInput;