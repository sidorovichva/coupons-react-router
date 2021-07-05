import { useEffect, useState } from 'react';
import AxiosConfig from "../axios/AxiosConfig";
import {CouponInt} from "../interfaces/CouponInt";

const useFetchCoupon = (url: string) => {

    const [data, setData] = useState<CouponInt>();
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

export default useFetchCoupon;