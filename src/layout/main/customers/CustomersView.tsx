import React from 'react';
import './CustomersView.css';
import CustomerRep from "../../../components/jsxComponents/main/beans/CustomerRep";
import {CustomerInt} from "../../../interfaces/CustomerInt";
import useGet from "../../../hooks/axiosHooks/useGet";

interface Props {
    link: string
}

const CustomersView: React.FC<Props> = ({link}): JSX.Element => {

    const { data: customers } = useGet(link)

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

// import './CustomersView.css';
// import CustomerRep from "../../components/main/CustomerRep";
// import {CustomerInt} from "../../interfaces/CustomerInt";
// import useAxios from "../../hooks/axiosHooks/useAxios";
//
// const CustomersView = (): JSX.Element => {
//
//     const { data: customers } = useAxios('GET', '/customers')
//
//     return (
//         <div className="CustomersView">
//             {customers.map((customer: CustomerInt) => (
//                     <div key={ customer.id }>
//                         <CustomerRep {...customer}/>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// }
//
// export default CustomersView;