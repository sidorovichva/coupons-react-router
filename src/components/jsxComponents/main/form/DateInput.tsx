import React, {useEffect, useState} from 'react';
import './DateInput.css';
import {useDispatch} from "react-redux";
import {setTextValue} from "../../../../redux/InputSlice";
import Check from "../../icons/Check";

interface Props {
    className: string,
    isCorrect?: boolean,
    placeholder?: string
    required?: boolean
}

const DateInput: React.FC<Props> = ({
    className,
    isCorrect,
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
                    className={ className }
                    type="date"
                    placeholder={ placeholder === undefined ? '' : placeholder }
                    value={ returnValue }
                    onChange={(e) => setReturnValue(e.target.value)}
                />
                {matches && (isCorrect || isCorrect === undefined) && <Check />}
            </div>
        )
    } else {
        return(
            <div className="DateInput">
                <input
                    className={ className }
                    type="date"
                    placeholder={ placeholder === undefined ? '' : placeholder }
                    value={ returnValue }
                    onChange={(e) => setReturnValue(e.target.value)}
                    required
                />
                {matches && (isCorrect || isCorrect === undefined) && <Check />}
            </div>
        )
    }
};

export default DateInput;