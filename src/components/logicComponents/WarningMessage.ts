import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";

const WarningMessage = () => {

    const { isChanged, responseMessage } = useSelector((state) =>
        ConfigureStore.getState().ResponseStatusSlice);

    const [isWarningActive, setIsWarningActive] = useState(false);
    const flashTime = 300;
    const warningTime = 6000;

    const deactivateWarning = () => {
        setIsWarningActive(false);
    }

    const activateWarning = () => {
        setIsWarningActive(true);
    }

    useEffect(() => {
        if (responseMessage !== '') {
            deactivateWarning();
            setTimeout(activateWarning, flashTime);
            setTimeout(deactivateWarning, warningTime);
        }
    }, [isChanged]);

    return { isWarningActive };
}

export default WarningMessage;