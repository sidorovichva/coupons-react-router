import React, {useEffect, useState} from 'react';
import './TextFilter.css';
import {useDispatch} from "react-redux";
import {setTextValue} from "../../../../redux/InputSlice";
import {descriptionEntered, titleEntered} from "../../../../redux/PressEnterSlice";

interface Props {
    className: string
}

const TextFilter: React.FC<Props> = ({
    className,
}): JSX.Element => {

    const dispatch = useDispatch();

    const [returnValue, setReturnValue] = useState('');

    useEffect(() => {
        dispatch(setTextValue({
            textInputValue: returnValue.toLowerCase(),
            fieldValue: className,
        }));
    }, [returnValue] )

    const handleEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            dispatch(titleEntered())
            dispatch(descriptionEntered())
        }
    }

    const handleMouseOut = () => {
        dispatch(titleEntered())
        dispatch(descriptionEntered())
    }

    return(
        <div className="TextFilter">
            <input
                onKeyDown={ handleEnter }
                onMouseOut={ handleMouseOut }
                autoFocus={true}
                className={ className }
                placeholder="title"
                value={ returnValue }
                onChange={(e) => setReturnValue(e.target.value)}
            />
        </div>
    )
};

export default TextFilter;