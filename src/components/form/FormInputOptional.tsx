import React, {useEffect, useState} from 'react';
import './FormInputOptional.css';
import {useDispatch} from "react-redux";
import {setNumericValue, use} from "../../redux/formComponents/InputAsStringSlicer";

interface Props {
    className: string
    type: string
    placeholder?: string
    min?: number
}

const FormInputOptional: React.FC<Props> = ({
    className,
    type,
    placeholder,
    min,
}): JSX.Element => {

    const dispatch = useDispatch();

    const [returnValue, setReturnValue] = useState('');
    const [returnNumValue, setReturnNumValue] = useState<number>();

    useEffect(() => {
        dispatch(use({
            valueValue: returnValue,
            fieldValue: className
        }));
    }, [returnValue])

    useEffect(() => {

        dispatch(setNumericValue({
            numericInputValue: returnNumValue,
            fieldValue: className
        }));
    }, [returnNumValue])

    if (className !== 'couponPrice' && className !== 'couponAmount') { return(
        <div className="FormInput">
            <input
                className={ className }
                type={ type }
                placeholder={ placeholder }
                value={ returnValue }
                onChange={(e) => setReturnValue(e.target.value)}
            />
        </div>
    )} else if (className === 'couponAmount') {return(
        <div className="FormInput">
            <input
                className={ className }
                type={ type }
                placeholder={ placeholder }
                min={ min }
                value={ returnNumValue }
                onChange={(e) => setReturnNumValue(parseInt(e.target.value))}
            />
        </div>
    )} else {return(
        <div className="FormInput">
            <input
                className={ className }
                type={ type }
                placeholder={ placeholder }
                min={ min }
                step=".01"
                value={ returnNumValue }
                onChange={(e) => setReturnNumValue(parseFloat(e.target.value))}
            />
        </div>
    )};
};

export default FormInputOptional;