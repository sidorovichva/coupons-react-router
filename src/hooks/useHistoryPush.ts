import {useDispatch} from "react-redux";
import {setHistoryPushLink} from "../redux/HistoryPushSlice";
import {ClientURL} from "../enums/ClientURL";

const useHistoryPush = (
    pushSuccess: ClientURL,
    pushFail: ClientURL
) => {

    const dispatch = useDispatch();

    dispatch(setHistoryPushLink({
        historyPushSuccessValue: pushSuccess,
        historyPushFailValue: pushFail
    }))
}

export default useHistoryPush;