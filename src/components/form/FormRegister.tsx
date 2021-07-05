import './FormRegister.css';
import {useDispatch} from "react-redux";
import {openWindow} from "../../redux/PopUpWindowsSlicer";

interface Props {
    className?: string
    type?: string
    placeholder?: string
}

const FormRegister: React.FC<Props> = ({
                                        className,
                                        type,
                                        placeholder,
                                    }): JSX.Element => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(openWindow('registerWindow'))
    }

    return (
        <div className="FormRegister">
            <input
                className="register"
                type="button"
                onClick={ handleClick }
            />
        </div>
    );
};

export default FormRegister;

// import './FormRegister.css';
// import {useDispatch} from "react-redux";
// import {openWindow} from "../../redux/PopUpWindowsSlicer";
//
// interface Props {
//     className?: string
//     type?: string
//     placeholder?: string
// }
//
// const FormRegister: React.FC<Props> = ({
//                                            className,
//                                            type,
//                                            placeholder,
//                                        }): JSX.Element => {
//
//     const dispatch = useDispatch();
//
//     const handleClick = () => {
//         dispatch(openWindow('registerWindow'))
//     }
//
//     return (
//         <div className="FormRegister">
//             <input
//                 className="register"
//                 type="button"
//                 onClick={ handleClick }
//             />
//         </div>
//     );
// };
//
// export default FormRegister;