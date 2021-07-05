import React, {useEffect, useState} from 'react';
import './FormInput.css';
import {useDispatch} from "react-redux";
import {use} from "../../redux/formComponents/InputAsStringSlicer";
import {CategoryInt} from "../../interfaces/CategoryInt";
import useFetch from "../../hooks/useFetch";

interface Props {
    className: string
}

const FormSelect: React.FC<Props> = ({
                                         className,
                                     }): JSX.Element => {

    const dispatch = useDispatch();

    const { data: array } = useFetch('/categories');

    const [returnValue, setReturnValue] = useState('');

    useEffect(() => {
        dispatch(use({
            valueValue: returnValue,
            fieldValue: className
        }));
    }, [returnValue])

    return (
        <div className="FormSelect">
            <select
                className={ className }
                onChange={(e) => (setReturnValue(JSON.parse(e.target.value)))}
            >
                {array.map((category: CategoryInt) => (
                    <option key={category.id} value={JSON.stringify(category)}>{category.name}</option>
                ))};
            </select>
        </div>
    );
};

export default FormSelect;
