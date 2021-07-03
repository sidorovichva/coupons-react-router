import React from 'react';
import {closeWindow} from "../../redux/PopUpWindowsSlicer";
import {useDispatch} from "react-redux";
import './FormSubmit.css';

interface Props {

}

const FormSubmit: React.FC<Props> = () => {

    const dispatch = useDispatch();

    const cancel = () => {
        dispatch(closeWindow())
    }

    return (
        <div className="FormSubmit">
            <input
                className="submitButton"
                type="submit"
            />
            <input
                className="cancelButton"
                type="submit"
                value="Cancel"
                onClick={ cancel }
            />
        </div>
    );
};

export default FormSubmit;