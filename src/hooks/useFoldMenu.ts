import {useState} from "react";

const useFoldMenu = () => {

    const[isFolded, setIsFolded] = useState(true);

    const resetFolding = () => {
        setIsFolded(true);
    }

    const foldMenu = () => {
        setIsFolded(false);
        setTimeout(resetFolding, 500);
    }


    return { foldMenu, isFolded };
}

export default useFoldMenu;