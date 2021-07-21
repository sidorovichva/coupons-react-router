import React, {useEffect, useState} from 'react';
import './PriceFilter.css';
import {useDispatch} from "react-redux";
import {setNumericValue} from "../../../../redux/InputSlice";
import {priceEntered} from "../../../../redux/PressEnterSlice";

interface Props {
    className: string
    placeholder?: string
    min?: number
}

const PriceFilter: React.FC<Props> = ({
    className,
    placeholder,
    min,
}): JSX.Element => {

    const dispatch = useDispatch();

    const [returnValue, setReturnValue] = useState<number | string>('');

    useEffect(() => {
        dispatch(setNumericValue({
            numericInputValue: returnValue,
            fieldValue: className,
        }));
    }, [returnValue]);

    const handleEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            dispatch(priceEntered());
        }
    }

    const handleMouseOut = () => {
        dispatch(priceEntered());
    }

    return(
        <div className="PriceFilter">
            <input
                onKeyDown={ handleEnter }
                onMouseOut={ handleMouseOut }
                className={ className }
                autoFocus={true}
                type="number"
                placeholder={ placeholder === undefined ? 'max price' : placeholder }
                min={ min }
                value={ returnValue }
                onChange={(e) => setReturnValue(parseInt((e.target.value) || ''))}
            />
        </div>
    );
}

export default PriceFilter;