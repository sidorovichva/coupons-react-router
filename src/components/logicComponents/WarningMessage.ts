import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";

const WarningMessage = () => {

    const { responseStatus, responseMessage } = useSelector((state) =>
        ConfigureStore.getState().ResponseStatusSlice);

    const [isWarningActive, setIsWarningActive] = useState(false);
    const time = 5000;

    const deactivateWarning = () => {
        setIsWarningActive(false);
    }

    useEffect(() => {
        if (responseStatus !== null || responseMessage !== '') setIsWarningActive(true)
        setTimeout(deactivateWarning, time);
    }, [responseStatus, responseMessage]);

    return { isWarningActive };
}

export default WarningMessage;