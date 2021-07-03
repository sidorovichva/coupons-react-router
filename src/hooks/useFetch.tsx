import { useEffect, useState } from 'react';
import AxiosConfig from "../axios/AxiosConfig";
import axios from "axios";

const useFetch = (url: string) => {

    const [data, setData] = useState<[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchData() {

            await AxiosConfig.get(url)
            .then(response => {
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
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })

        }

        fetchData();

    }, [url]);

    return { data, isPending, error }
}

export default useFetch;

// import { useEffect, useState } from 'react';
// import AxiosConfig from "../axios/AxiosConfig";
//
// const useFetch = (url: string) => {
//
//     const [data, setData] = useState<[]>([]);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//
//         const abort = new AbortController();
//
//
//         AxiosConfig.get(url)
//             .then(response => {
//                 if (response.status !== 200) {
//                     throw Error("the data couldn't be fetched")
//                 }
//                 console.log(response)
//                 //if (url === 'http://localhost:8080') dispatch(loadAllCoupons({allCouponsArray: response.data}))
//                 return response;
//             })
//             .then((response) => {
//                 setData(response.data);
//                 setIsPending(false);
//                 setError(null);
//             })
//             .catch((err) => {
//                 if (err.name === 'AbortError') {
//                     console.log('fetch aborted');
//                 } else {
//                     setError(err.message);
//                     setIsPending(false);
//                 }
//             })
//
//         return () => abort.abort();
//
//     }, [url]);
//
//     return { data, isPending, error }
// }
//
// export default useFetch;

//======================================================================================================================

// import { useEffect, useState } from 'react';
// import AxiosConfig from "../axios/AxiosConfig";
// import axios from "axios";
//
// const useFetch = (url: string) => {
//
//     const [data, setData] = useState<[]>([]);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//
//         const cancelToken = axios.CancelToken;
//         const source = cancelToken.source();
//
//         AxiosConfig.get(url, {cancelToken: source.token})
//             .then(response => {
//                 if (response.status !== 200) {
//                     throw Error("the data couldn't be fetched")
//                 }
//                 console.log(response)
//                 //if (url === 'http://localhost:8080') dispatch(loadAllCoupons({allCouponsArray: response.data}))
//                 return response;
//             })
//             .then((response) => {
//                 setData(response.data);
//                 setIsPending(false);
//                 setError(null);
//             })
//             .catch((err) => {
//                 if (err.name === 'AbortError') {
//                     console.log('fetch aborted');
//                 } else {
//                     setError(err.message);
//                     setIsPending(false);
//                 }
//             })
//
//         return () => {
//             source.cancel("request cancelled");
//         };
//
//     }, [url]);
//
//     return { data, isPending, error }
// }
//
// export default useFetch;