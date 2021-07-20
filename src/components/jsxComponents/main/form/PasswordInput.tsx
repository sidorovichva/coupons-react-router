import React, {useEffect, useState} from 'react';
import './PasswordInput.css';
import {useDispatch} from "react-redux";
import {setTextValue} from "../../../../redux/InputSlice";
import Check from "../../icons/Check";
import EyeOff from "../../icons/EyeOff";
import EyeOn from "../../icons/EyeOn";

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
            {matches && (isCorrect || isCorrect === undefined) && <Check />}
            {isExposed ? <EyeOff func={ handleExpose } /> : <EyeOn func={ handleExpose } />}
        </div>
    )
};

export default PasswordInput;