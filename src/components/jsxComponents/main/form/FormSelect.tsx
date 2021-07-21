import React, {useEffect, useState} from 'react';
import './FormSelect.css';
import {useDispatch} from "react-redux";
import {setTextValue} from "../../../../redux/InputSlice";
import {CategoryInt} from "../../../../interfaces/CategoryInt";
import {ServerURL} from "../../../../enums/ServerURL";
import Check from "../../icons/Check";
import {useQuery} from "react-query";
import FetchData from "../../../logicComponents/FetchData";
import {ReactQuery} from "../../../../enums/ReactQuery";

interface Props {
    className: string,
    label: string,
    isCorrect?: boolean,
}

const FormSelect: React.FC<Props> = ({
     className,
     label,
     isCorrect
 }): JSX.Element => {

    const dispatch = useDispatch();

    const {data: array, status} = useQuery(
        ['getAllCategories', ServerURL.allCategories],
        () => FetchData(ServerURL.allCategories),
        {retryDelay: ReactQuery.RETRY_DELAY}
    );

    const [returnValue, setReturnValue] = useState('');
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const innerBoolean = returnValue !== '';
        setMatches(innerBoolean);
        dispatch(setTextValue({
            textInputValue: JSON.stringify(returnValue),
            fieldValue: className,
            matchesValue: innerBoolean
        }));
    }, [returnValue]);

    return (
        <div className="FormSelect">
            <select
                autoFocus={true}
                size={1}
                className={ className }
                onChange={(e) => (setReturnValue(JSON.parse(e.target.value)))}
            >
                <option defaultValue="Categories" hidden>{ label }</option>
                {status === 'success' && array.map((category: CategoryInt) => (
                    <option key={category.id} value={JSON.stringify(category)}>{category.name}</option>
                ))};
            </select>
            {matches && (isCorrect || isCorrect === undefined) && <Check />}
        </div>
    );
}

export default FormSelect;
