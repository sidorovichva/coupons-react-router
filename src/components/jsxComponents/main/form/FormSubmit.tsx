import React, {useEffect, useState} from 'react';
import './FormSubmit.css';
import { useHistory } from "react-router-dom";

interface Props {
    checksArray?: boolean[]
}

const FormSubmit: React.FC<Props> = ({
     checksArray
}): JSX.Element => {

    const history = useHistory();

    const [isPassed, setIsPassed] = useState(checksArray === undefined);

    const cancel = () => {
        history.goBack();
    }

    useEffect(() => {
        if (checksArray !== undefined) {
            for (let i = 0; i < checksArray.length; i++) {
                console.log(i + ": " + checksArray[i])
                if (checksArray[i] === false) {
                    setIsPassed(false);
                    break;
                }
                if (i === checksArray.length - 1) setIsPassed(true);
            }
        }
    }, [checksArray])

    return (
        <div className="FormSubmit">
            {isPassed ? <input
                className="submitButton"
                type="submit"
            /> :
            <div className="submitButton">
                submit
            </div>}
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