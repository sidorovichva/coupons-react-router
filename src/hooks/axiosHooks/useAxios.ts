import { useEffect } from 'react';
import AxiosConfig from "../../axios/AxiosConfig";
import {useDispatch, useSelector} from "react-redux";
import {setResponseStatus} from "../../redux/ResponseStatusSlice";
import ConfigureStore from "../../redux/StoreConfig";
import {useHistory, useLocation} from "react-router-dom";
import {Method} from "axios";

const useAxios = (link: string, method: Method, body?: string) => {

    const { historyPushSuccess, historyPushFail } = useSelector((state) => ConfigureStore.getState().HistoryPushSlice);

    const history = useHistory();
    const currentURL = useLocation().pathname;

    const dispatch = useDispatch();

    console.log("++++++++++++++++++++++++++++++++++++++")
    // console.log(link)
    // console.log(method)
    // console.log(body)

    useEffect(() => {

        AxiosConfig({
            method: method,
            url: link,
            data: body === undefined ? '' : body,
        })
            .then(response => {

                console.log("1")
                // console.log(response.status)
                // console.log(response.data)
                // console.log(link)

                dispatch(setResponseStatus({
                    responseStatusValue: response.status,
                    responseMessageValue: response.data
                }));
                // console.log("---------------------------")
                // console.log(historyPushSuccess)
                // console.log(historyPushFail)
                // console.log(currentURL)

                //historyPushSuccess === currentURL ? history.go(0) : history.push(historyPushSuccess);
                history.push(historyPushSuccess);

                //setData(response.data);
                // return { data }

            })
            .catch((err) => {

                console.log("3")

                if (err.response.data) {

                        // console.log(err.response.status)
                        // console.log(err.response.data)

                    dispatch(setResponseStatus({
                        responseStatusValue: err.response.status,
                        responseMessageValue: JSON.stringify(err.response.data),
                    }));
                }

                if (historyPushFail !== currentURL) history.push(historyPushFail);

            })

    }, [link]);

    // return { data }
}

export default useAxios;

// import { useEffect, useState } from 'react';
// import AxiosConfig from "../../axios/AxiosConfig";
// import {useDispatch, useSelector} from "react-redux";
// import {setResponseStatus} from "../../redux/ResponseStatusSlice";
// import ConfigureStore from "../../redux/StoreConfig";
// import {useHistory, useLocation} from "react-router-dom";
// import {Method} from "axios";
//
// const useAxios = (method: Method, link: string, body?: string) => {
//
//     const { historyPushSuccess, historyPushFail } = useSelector((state) => ConfigureStore.getState().HistoryPushSlice);
//
//     const [data, setData] = useState<[]>([]);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);
//
//     const history = useHistory();
//     const currentURL = useLocation().pathname;
//
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//
//         AxiosConfig({
//             method: method,
//             url: link,
//             data: body === undefined ? '' : body
//         })
//             .then(response => {
//
//                 console.log("1")
//                 console.log(response.status)
//                 console.log(response.data)
//
//                 dispatch(setResponseStatus({
//                     responseStatusValue: response.status,
//                     responseMessageValue: response.data
//                 }));
//
//                 return response;
//             })
//             .then((response) => {
//
//                 console.log("2")
//
//                 setData(response.data);
//                 setIsPending(false);
//                 historyPushSuccess === currentURL ? history.go(0) : history.push(historyPushSuccess);
//             })
//             .catch((err) => {
//
//                 console.log("3")
//
//                 if (err.response.data) {
//
//                     console.log(err.response.status)
//                     console.log(err.response.data)
//
//                     dispatch(setResponseStatus({
//                         responseStatusValue: err.response.status,
//                         responseMessageValue: err.response.data,
//                     }));
//                 }
//                 setIsPending(false);
//                 if (historyPushFail !== currentURL) history.push(historyPushFail);
//             })
//
//     }, [link]);
//
//     return { data, isPending, error }
// }
//
// export default useAxios;