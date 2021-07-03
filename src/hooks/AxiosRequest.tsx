import { useEffect, useState } from 'react';
import axios, {Method} from "axios";
import {useDispatch} from "react-redux";
import {closeWindow} from "../redux/PopUpWindowsSlicer";
import {reset} from "../redux/AxiosSlicer";

const AxiosRequest = (
    method: Method,
    url: string,
    body: string,
    headers: string
) => {

    const [data, setData] = useState<[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("AxiosRequest - useEffect")
        const abort = new AbortController();

        axios({
            method: method,
            url: url,
            data: body,
            headers: headers,
        })
        .then(response => {
            if (response.status !== 200) {
                throw Error("the data couldn't be fetched")
            }
            console.log(response)
            dispatch(reset())
            dispatch(closeWindow());
            return response;
        })
        .then((response) => {
            setData(response.data);
            setIsPending(false);
            setError(null);
        })
        .catch((err) => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setError(err.message);
                setIsPending(false);
            }
        })

        return () => abort.abort();

    }, []);

    return { data, isPending, error }
}

export default AxiosRequest;