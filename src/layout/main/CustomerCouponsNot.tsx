import useFetch from "../../hooks/useFetch";
import './CustomerCouponsNot.css';
import {CouponInt} from "../../interfaces/CouponInt";
import CouponRep from "../../components/main/CouponRep";

const CustomerCouponsNot = (): JSX.Element => {

    const { data: coupons } = useFetch('/purchases/not');

    return (
        <div className="CustomerCouponsNot">
            {coupons.map((coupon: CouponInt) => (
                    <div key={ coupon.id }>
                        <CouponRep {...coupon}/>
                    </div>
                )
            )}
        </div>
    );
}

export default CustomerCouponsNot;