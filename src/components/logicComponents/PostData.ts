import AxiosConfig from "../../axios/AxiosConfig";
import {setResponseStatus} from "../../redux/ResponseStatusSlice";
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {useHistory} from "react-router-dom";

const PostData = async (link: string, body: string) => {

    const { historyPushSuccess, historyPushFail } = useSelector(
        (state) => ConfigureStore.getState().HistoryPushSlice
    );

    const dispatch = useDispatch();
    const history = useHistory();

    console.log("here!---------------------------------------------")

    const response = await AxiosConfig.post(link, body);

    dispatch(setResponseStatus({
        responseStatusValue: response.status,
        responseMessageValue: response.data
    }));

    history.push(historyPushSuccess);

}

export default PostData;