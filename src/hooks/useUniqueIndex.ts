import {useDispatch} from "react-redux";
import {generateNumber} from "../redux/UniqueIndexSlice";

const useUniqueIndex = () => {

    const dispatch = useDispatch();

    const randomGenerator = () => {
        dispatch(generateNumber());
    };

    return { randomGenerator };
}

export default useUniqueIndex;