import React, {useEffect, useState} from 'react';
import './DateInput.css';
import {useDispatch} from "react-redux";
import {use} from "../../../../redux/InputSlice";

interface Props {
    className: string
    placeholder?: string
    required?: boolean
}

const DateInput: React.FC<Props> = ({
                                        className,
                                        placeholder,
                                        required
                                    }): JSX.Element => {

    const dispatch = useDispatch();

    const [returnValue, setReturnValue] = useState('');

    useEffect(() => {
        dispatch(use({
            valueValue: returnValue,
            fieldValue: className
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
            </div>
        )
    }
};

export default DateInput;