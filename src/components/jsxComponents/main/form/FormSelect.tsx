import React, {useEffect, useState} from 'react';
import './FormSelect.css';
import {useDispatch} from "react-redux";
import {use} from "../../../../redux/InputSlice";
import {CategoryInt} from "../../../../interfaces/CategoryInt";
import {ServerURL} from "../../../../enums/ServerURL";
import useGet from "../../../../hooks/axiosHooks/useGet";

interface Props {
    className: string
}

const FormSelect: React.FC<Props> = ({
     className,
 }): JSX.Element => {

    const dispatch = useDispatch();

    const { data: array } = useGet(ServerURL.allCategories)

    const [returnValue, setReturnValue] = useState('');

    useEffect(() => {
        dispatch(use({
            valueValue: JSON.stringify(returnValue),
            //valueValue: returnValue,
            fieldValue: className
        }));
        console.log(returnValue)
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

// import React, {useEffect, useState} from 'react';
// import './FormSelect.css';
// import {useDispatch} from "react-redux";
// import {use} from "../../redux/InputSlice";
// import {CategoryInt} from "../../interfaces/CategoryInt";
// import {ServerURL} from "../../enums/ServerURL";
// import useGet from "../../hooks/axiosHooks/useGet";
//
// interface Props {
//     className: string
// }
//
// const FormSelect: React.FC<Props> = ({
//                                          className,
//                                      }): JSX.Element => {
//
//     const dispatch = useDispatch();
//
//     const { data: array } = useGet(ServerURL.allCategories)
//
//     const [returnValue, setReturnValue] = useState('');
//
//     useEffect(() => {
//         dispatch(use({
//             valueValue: returnValue,
//             fieldValue: className
//         }));
//         console.log(returnValue)
//     }, [returnValue])
//
//     return (
//         <div className="FormSelect">
//             <select
//                 className={ className }
//                 onChange={(e) => (setReturnValue(JSON.parse(e.target.value)))}
//             >
//                 {array.map((category: CategoryInt) => (
//                     <option key={category.id} value={JSON.stringify(category)}>{category.name}</option>
//                 ))};
//             </select>
//         </div>
//     );
// };
//
// export default FormSelect;
