import { useEffect } from 'react';
import AxiosConfig from "../../axios/AxiosConfig";
import {useDispatch, useSelector} from "react-redux";
import {setResponseStatus} from "../../redux/ResponseStatusSlice";
import ConfigureStore from "../../redux/StoreConfig";
import {useHistory} from "react-router-dom";
import {Method} from "axios";

const useAxios = (link: string, method: Method, body?: string) => {

    const { historyPushSuccess, historyPushFail } = useSelector((state) => ConfigureStore.getState().HistoryPushSlice);

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {

        AxiosConfig({
            method: method,
            url: link,
            data: body === undefined ? '' : body,
        })
            .then(response => {
                dispatch(setResponseStatus({
                    responseStatusValue: response.status,
                    responseMessageValue: response.data
                }));
                history.push(historyPushSuccess);
            })
            .catch((err) => {
                if (err.response.data) {
                    dispatch(setResponseStatus({
                        responseStatusValue: err.response.status,
                        responseMessageValue: JSON.stringify(err.response.data),
                    }));
                }
                history.push(historyPushFail);
            })

    }, [link, method, body]);

}

export default useAxios;