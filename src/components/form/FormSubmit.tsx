import React from 'react';
import './FormSubmit.css';
import { useHistory } from "react-router-dom";

const FormSubmit = () => {

    const history = useHistory();

    const cancel = () => {
        history.go(1)
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