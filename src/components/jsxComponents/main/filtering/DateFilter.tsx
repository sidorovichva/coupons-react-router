import React, {useEffect, useState} from 'react';
import './DateFilter.css';
import {useDispatch} from "react-redux";
import {setTextValue} from "../../../../redux/InputSlice";
import {endDateEntered} from "../../../../redux/PressEnterSlice";

interface Props {
    className: string
}

const DateFilter: React.FC<Props> = ({
    className
}): JSX.Element => {

    const dispatch = useDispatch();

    const [returnValue, setReturnValue] = useState('');

    useEffect(() => {
        dispatch(setTextValue({
            textInputValue: returnValue,
            fieldValue: className,
        }));
        //dispatch(endDateEntered())
    }, [returnValue])

    const handleMouseOut = () => {
        dispatch(endDateEntered())
    }

    return(
        <div className="DateFilter">
            <input
                onMouseOut={ handleMouseOut }
                className={ className }
                type="date"
                // placeholder={}
                value={ returnValue }
                onChange={(e) => setReturnValue(e.target.value)}
            />
        </div>
    )
};

export default DateFilter;