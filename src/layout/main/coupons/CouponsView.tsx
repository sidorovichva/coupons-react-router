import React, {useState} from "react";
import {CouponInt} from "../../../interfaces/CouponInt";
import CouponRep from "../../../components/jsxComponents/main/beans/CouponRep";
import './CouponsView.css'
import useGet from "../../../hooks/axiosHooks/useGet";
import {useSelector} from "react-redux";
import ConfigureStore from "../../../redux/StoreConfig";

interface Props {
    link: string
}

const CouponGeneral: React.FC<Props> = ({link}): JSX.Element => {

    const { uniqueNumber } = useSelector((state) => ConfigureStore.getState().UniqueIndexSlice);

    const { data: coupons } = useGet(link, uniqueNumber)

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