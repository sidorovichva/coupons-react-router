import React from 'react';
import './CustomersView.css';
import CustomerRep from "../../../components/jsxComponents/main/beans/CustomerRep";
import {CustomerInt} from "../../../interfaces/CustomerInt";
import useGet from "../../../hooks/axiosHooks/useGet";
import {useSelector} from "react-redux";
import ConfigureStore from "../../../redux/StoreConfig";
import {useQuery} from "react-query";
import FetchData from "../../../components/logicComponents/FetchData";

interface Props {
    link: string
}

const CustomersView: React.FC<Props> = ({link}): JSX.Element => {

    //const { uniqueNumber } = useSelector((state) => ConfigureStore.getState().UniqueIndexSlice);

    //const { data: customers } = useGet(link, uniqueNumber)

    const { data: customers, status } = useQuery([link, link], () => FetchData(link), {
        retryDelay: 10000
    });

    return (
        <div className="CustomersView">
            {status === 'error' && <div>Error...</div>}
            {status === 'loading' && <div>Loading...</div>}
            {status === 'success' && customers.map((customer: CustomerInt) => (
                    <div key={ customer.id }>
                        <CustomerRep {...customer}/>
                    </div>
                )
            )}
        </div>
    );
}

export default CustomersView;