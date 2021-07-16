import React from 'react';
import './CustomersView.css';
import CustomerRep from "../../../components/jsxComponents/main/beans/CustomerRep";
import {CustomerInt} from "../../../interfaces/CustomerInt";
import useGet from "../../../hooks/axiosHooks/useGet";
import {useSelector} from "react-redux";
import ConfigureStore from "../../../redux/StoreConfig";

interface Props {
    link: string
}

const CustomersView: React.FC<Props> = ({link}): JSX.Element => {

    const { uniqueNumber } = useSelector((state) => ConfigureStore.getState().UniqueIndexSlice);

    const { data: customers } = useGet(link, uniqueNumber)

    return (
        <div className="CustomersView">
            {customers.map((customer: CustomerInt) => (
                    <div key={ customer.id }>
                        <CustomerRep {...customer}/>
                    </div>
                )
            )}
        </div>
    );
}

export default CustomersView;