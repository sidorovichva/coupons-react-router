import {useEffect, useState} from "react";

const DefineNumber = () => {

    const [userNumber, setUserNumber] = useState(0);
    const time = 3000;

    function handleNumber() {
        setUserNumber(userNumber === 2 ? 0 : userNumber + 1);
    };

    useEffect(() => {
        setTimeout(handleNumber, time);
    }, [userNumber]);

    return { userNumber };
}

export default DefineNumber;