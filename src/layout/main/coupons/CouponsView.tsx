import React from "react";
import {CouponInt} from "../../../interfaces/CouponInt";
import CouponRep from "../../../components/jsxComponents/main/beans/CouponRep";
import './CouponsView.css'
import useGet from "../../../hooks/axiosHooks/useGet";

interface Props {
    link: string
}

const CouponGeneral: React.FC<Props> = ({link}): JSX.Element => {

    const { data: coupons } = useGet(link)

    return (
        <div className="CouponsGeneral">
            {coupons.map((coupon: CouponInt) => (
                    <div key={ coupon.id }>
                        <CouponRep {...coupon}/>
                    </div>
                )
            )}
        </div>
    );
}

export default CouponGeneral;