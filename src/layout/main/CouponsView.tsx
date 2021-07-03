import React from 'react';
import './CouponsView.css';
import {CouponInt} from "../../interfaces/CouponInt";
import CouponRep from "../../components/main/CouponRep";
import useFetch from "../../hooks/useFetch";

const CouponsView = (): JSX.Element => {

    const { data: coupons, error } = useFetch('/');

    return (
        <div className="CouponsView">
            <h1 className="title">All Coupons</h1>
            {coupons.map((coupon: CouponInt) => (
                    <div key={ coupon.id }>
                        <CouponRep {...coupon}/>
                    </div>
                )
            )}
            <div className="message">{ error }</div>
        </div>
    );
}

export default CouponsView;

// import React from 'react';
// import './CouponsView.css';
// import {CouponInt} from "../../interfaces/CouponInt";
// import CouponRep from "../../components/main/CouponRep";
//
// interface Props {
//     coupons: []
// }
//
// const CouponsView: React.FC<Props> = ({ coupons}): JSX.Element => {
//
//     return (
//         <div className="CouponsView">
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
// export default CouponsView;