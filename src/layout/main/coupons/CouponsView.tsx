import React from "react";
import {CouponInt} from "../../../interfaces/CouponInt";
import CouponRep from "../../../components/jsxComponents/main/beans/CouponRep";
import './CouponsView.css'
import {useQuery} from "react-query";
import FetchData from "../../../components/logicComponents/FetchData";

interface Props {
    link: string
}

const CouponsView: React.FC<Props> = ({link}): JSX.Element => {

    const {data: coupons, status} = useQuery([link, link], () => FetchData(link), {
        retryDelay: 10000
    });

    return (
        <div className="CouponsGeneral">
            {status === 'error' && <div className="message">Error...</div>}
            {status === 'loading' && <div className="message">Loading...</div>}
            {status === 'success' && coupons.map((coupon: CouponInt) => (
                    <div key={coupon.id}>
                        <CouponRep {...coupon}/>
                    </div>
                )
            )}
        </div>
    );
}

export default CouponsView;

// import React, {useState} from "react";
// import {CouponInt} from "../../../interfaces/CouponInt";
// import CouponRep from "../../../components/jsxComponents/main/beans/CouponRep";
// import './CouponsView.css'
// import useGet from "../../../hooks/axiosHooks/useGet";
// import {useSelector} from "react-redux";
// import ConfigureStore from "../../../redux/StoreConfig";
//
// interface Props {
//     link: string
// }
//
// const CouponGeneral: React.FC<Props> = ({link}): JSX.Element => {
//
//     const { uniqueNumber } = useSelector((state) => ConfigureStore.getState().UniqueIndexSlice);
//
//     const { data: coupons } = useGet(link, uniqueNumber)
//
//     return (
//         <div className="CouponsGeneral">
//             {coupons.map((coupon: CouponInt) => (
//                     <div key={ coupon.id }>
//                         <CouponRep {...coupon}/>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// }
//
// export default CouponGeneral;