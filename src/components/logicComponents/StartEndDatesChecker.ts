import {useEffect, useState} from "react";

const StartEndDatesChecker = (date1: string, date2: string) => {

    const [isStartBeforeEnd, setIsStartBeforeEnd] = useState(false);

    useEffect(() => {
        if (Date.parse(date2) > Date.parse(date1)) setIsStartBeforeEnd(true);
        else setIsStartBeforeEnd(false);
    }, [date1, date2]);

    return { isStartBeforeEnd };
}

export default StartEndDatesChecker;