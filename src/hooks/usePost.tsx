import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import AxiosConfig from "../axios/AxiosConfig";
import {useHistory} from "react-router-dom";
import {setResponseStatus} from "../redux/ResponseStatusSlice";
import ConfigureStore from "../redux/StoreConfig";

const usePost = (link: string, body: string) => {

    const { historyPushSuccess } = useSelector((state) => ConfigureStore.getState().HistoryPushSlice);

    const [data, setData] = useState<[]>([]);
    const [isPending, setIsPending] = useState(true);

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {

        AxiosConfig.post(link, body)
            .then(response => {
                //console.log("usePost 1")
                dispatch(setResponseStatus({
                    responseStatusValue: response.data
                }));
                return response;
            })
            .then((response) => {
                //console.log("usePost 2")
                setData(response.data);
                setIsPending(false);
                history.push(historyPushSuccess);
            })
            .catch((err) => {
                //console.log("usePost 3")
                // if (err.response.data) {
                //     dispatch(setRequestMessage({
                //         messageValue: err.response.data,
                //     }));
                // }
                setIsPending(false);
            })

    }, [link, body]);

    return { data, isPending }
}

export default usePost;

// import { useEffect, useState } from 'react';
// import {useDispatch} from "react-redux";
// import AxiosConfig from "../axios/AxiosConfig";
// import {setRequestMessage} from "../redux/RequestMessageSlice";
// import {useHistory} from "react-router-dom";
//
// const usePost = (link: string, body: string) => {
//
//     const [data, setData] = useState<[]>([]);
//     const [isPending, setIsPending] = useState(true);
//
//     const history = useHistory();
//
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//
//         AxiosConfig.post(link, body)
//             .then(response => {
//                 dispatch(setRequestMessage({
//                     messageValue: response.data
//                 }));
//                 return response;
//             })
//             .then((response) => {
//                 if (response.data) {
//                     dispatch(setRequestMessage({
//                         messageValue: response.data,
//                     }));
//                 }
//                 setData(response.data);
//                 setIsPending(false);
//                 history.push('/');
//             })
//             .catch((err) => {
//                 if (err.response.data) {
//                     dispatch(setRequestMessage({
//                         messageValue: err.response.data,
//                     }));
//                 }
//                 setIsPending(false);
//             })
//
//     }, [link, body]);
//
//     return { data, isPending }
// }
//
// export default usePost;