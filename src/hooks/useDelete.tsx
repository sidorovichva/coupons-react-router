import { useEffect, useState } from 'react';
import AxiosConfig from "../axios/AxiosConfig";
import {setRequestMessage} from "../redux/RequestMessageSlice";
import {useDispatch} from "react-redux";
//import {useHistory} from "react-router-dom";

const useDelete = (link: string) => {

    const [data, setData] = useState<[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {

        AxiosConfig.delete(link)
            .then(response => {
                dispatch(setRequestMessage({
                    messageValue: response.data
                }));
                return response;
            })
            .then((response) => {
                if (response.data) {
                    dispatch(setRequestMessage({
                        messageValue: response.data,
                    }));
                }
                setData(response.data);
                setIsPending(false);
                // history.push('/');
            })
            .catch((err) => {
                if (err.response.data) {
                    dispatch(setRequestMessage({
                        messageValue: err.response.data,
                    }));
                }
                setIsPending(false);
            })

    }, [link]);

    return { data, isPending, error }
}

export default useDelete;