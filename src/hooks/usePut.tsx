import { useEffect, useState } from 'react';
import {useDispatch} from "react-redux";
import {closeWindow} from "../redux/PopUpWindowsSlicer";
import {reset} from "../redux/AxiosSlicer";
import AxiosConfig from "../axios/AxiosConfig";

const usePut = (link: string, body: string) => {

    const [data, setData] = useState<[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        const abort = new AbortController();

        AxiosConfig.put(
            link,
            body
        )
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

    }, [link, body]);

    return { data, isPending, error }
}

export default usePut;