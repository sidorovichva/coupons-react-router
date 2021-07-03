import React, {useEffect, useState} from 'react';
import './FormInput.css';
import {useDispatch} from "react-redux";
import {use} from "../../redux/formComponents/InputAsStringSlicer";

interface Props {
    className: string
    type: string
    placeholder?: string
    min?: number
}

const FormInput: React.FC<Props> = ({
    className,
    type,
    placeholder,
    min,
}): JSX.Element => {

    const dispatch = useDispatch();

    const [returnValue, setReturnValue] = useState('');

    useEffect(() => {
        dispatch(use({
            valueValue: returnValue,
            fieldValue: className
        }));
    }, [returnValue])

    return (
        <div className="FormInput">
            <input
                className={ className }
                type={ type }
                placeholder={ placeholder }
                min={ min }
                value={ returnValue }
                onChange={(e) => setReturnValue(e.target.value)}
                required
            />
        </div>
    );
};

export default FormInput;

