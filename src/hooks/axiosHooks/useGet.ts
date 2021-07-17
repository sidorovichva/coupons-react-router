import { useEffect, useState } from 'react';
import AxiosConfig from "../../axios/AxiosConfig";
import {useDispatch, useSelector} from "react-redux";
import {resetResponseStatus, setResponseStatus} from "../../redux/ResponseStatusSlice";
import {useHistory} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {ServerURL} from "../../enums/ServerURL";
import {CustomerInt} from "../../interfaces/CustomerInt";
import {CompanyInt} from "../../interfaces/CompanyInt";
import {resetHistoryPush} from "../../redux/HistoryPushSlice";
import ConfigureStore from "../../redux/StoreConfig";
import {storeCoupons} from "../../redux/DataStorageSlice";

const useGet = (link: string, index?: number) => {

    console.log("---useGet---")
    console.log(index)

    const { couponsStorage, companiesStorage, customersStorage } =
        useSelector((state) => ConfigureStore.getState().DataStorageSlice);

    //const [data, setData] = useState<[]>([]);
    const [data, setData] = useState([]);
    const [customerObject, setCustomerObject] = useState<CustomerInt>();
    const [companyObject, setCompanyObject] = useState<CompanyInt>();

    const history = useHistory();

    const dispatch = useDispatch();

    console.log("link: " + link)
    //console.log("couponsStorage: " + couponsStorage)

    useEffect(() => {

        //console.log("couponsStorage: " + couponsStorage)
        // if (couponsStorage.length > 0) {
        //     console.log("***")
        //     setData(couponsStorage);
        //     console.log(data)
        // }

        AxiosConfig.get(link)
            .then(response => {

                console.log("1")
                console.log("response.status: " + response.status)
                console.log("response.data: " + response.data)

                if (link === ServerURL.profileCustomer) {
                    setCustomerObject(response.data)
                    return { customerObject }
                } else if (link === ServerURL.profileCompany) {
                    setCompanyObject(response.data)
                    return { companyObject }
                } else {
                    setData(response.data);
                    // if (link === ServerURL.allCoupons) dispatch(storeCoupons({
                    //     couponStorageValue: response.data
                    // }));
                    return { data }
                }

            })
            .catch((err) => {

                console.log("3")

                if (err.response.data) {

                    console.log("err.response.status: " + err.response.status)
                    console.log("err.response.data: " + err.response.data)

                    dispatch(setResponseStatus({
                        responseStatusValue: err.response.status,
                        responseMessageValue: JSON.stringify(err.response.data),
                        //responseMessageValue: "cvbcv"
                    }));
                }
                history.push(ClientURL.allCoupons)
            })

        // console.log("useGet - reset Response Status")
        // dispatch(resetResponseStatus());

    }, [link, index]);

    return { data, customerObject, companyObject }
}

export default useGet;