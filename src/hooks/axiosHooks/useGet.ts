import { useEffect, useState } from 'react';
import AxiosConfig from "../../axios/AxiosConfig";
import {useDispatch} from "react-redux";
import {setResponseStatus} from "../../redux/ResponseStatusSlice";
import {useHistory} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {ServerURL} from "../../enums/ServerURL";
import {CustomerInt} from "../../interfaces/CustomerInt";
import {CompanyInt} from "../../interfaces/CompanyInt";

const useGet = (link: string) => {

    const [data, setData] = useState<[]>([]);
    const [customerObject, setCustomerObject] = useState<CustomerInt>();
    const [companyObject, setCompanyObject] = useState<CompanyInt>();

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {

        AxiosConfig.get(link)
            .then(response => {

                console.log("1")
                console.log(response.status)
                console.log(response.data)
                console.log(link)

                if (link === ServerURL.profileCustomer) {
                    setCustomerObject(response.data)
                    return { customerObject }
                } else if (link === ServerURL.profileCompany) {
                    setCompanyObject(response.data)
                    return { companyObject }
                } else {
                    setData(response.data);
                    return { data }
                }

            })
            .catch((err) => {

                console.log("3")

                if (err.response.data) {

                    console.log(err.response.status)
                    console.log(err.response.data)

                    dispatch(setResponseStatus({
                        responseStatusValue: err.response.status,
                        //responseMessageValue: JSON.stringify(err.response.data),
                        responseMessageValue: "cvbcv"
                    }));
                }
                history.push(ClientURL.allCoupons)
            })

    }, [link]);

    return { data, customerObject, companyObject }
}

export default useGet;