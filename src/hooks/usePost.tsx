import { useEffect, useState } from 'react';
import {useDispatch} from "react-redux";
import {closeWindow} from "../redux/PopUpWindowsSlicer";
import {reset} from "../redux/AxiosSlicer";
import AxiosConfig from "../axios/AxiosConfig";
import {setRequestError} from "../redux/RequestErrorSlice";

const usePost = (link: string, body: string) => {

    const [data, setData] = useState<[]>([]);
    const [isPending, setIsPending] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {

        AxiosConfig.post(
            link,
            body
        )
            .then(response => {
                dispatch(reset())
                dispatch(closeWindow());
                return response;
            })
            .then((response) => {
                setData(response.data);
                setIsPending(false);
            })
            .catch((err) => {
                dispatch(setRequestError({
                    errorValue: err.response.data,
                }))
                setIsPending(false);
            })

    }, [link, body]);

    return { data, isPending }
}

export default usePost;