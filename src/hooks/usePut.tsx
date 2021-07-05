import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import AxiosConfig from "../axios/AxiosConfig";
import ConfigureStore from "../redux/StoreConfig";
import {useHistory} from "react-router-dom";
import {setResponseStatus} from "../redux/ResponseStatusSlice";

const usePut = (link: string, body: string) => {

    const { historyPushSuccess, historyPushFail } = useSelector((state) => ConfigureStore.getState().HistoryPushSlice);

    const [data, setData] = useState<[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        const abort = new AbortController();

        AxiosConfig.put(
            link,
            body
        )
            .then(response => {
                console.log("1")
                console.log("PUT response:" + response)
                console.log("PUT response.status:" + response.status)
                console.log("PUT response.message:" + response.statusText)
                console.log("PUT response.headers.responseMessageValue: " + response.headers.responseMessageValue)
                dispatch(setResponseStatus({
                    responseStatusValue: response.status,
                    responseMessageValue: response.data
                }))
                if (response.status !== 200) {
                    throw Error("the data couldn't be fetched")
                }
                console.log(response)
                return response;
            })
            .then((response) => {
                setData(response.data);
                setIsPending(false);
                setError(null);
                history.push(historyPushSuccess);
            })
            .catch((err) => {
                console.log("3")
                console.log("PUT err.response.status:" + err.response.status)
                console.log("PUT err.response.data: " + err.response.data)
                dispatch(setResponseStatus({
                    responseStatusValue: err.response.status,
                    responseMessageValue: err.response.data
                }))
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
                history.push(historyPushFail);
            })

        return () => abort.abort();

    }, [link, body]);

    return { data, isPending, error }
}

export default usePut;