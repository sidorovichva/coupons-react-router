import useFetch from "../../hooks/useFetch";
import './CustomerCoupons.css';
import {CouponInt} from "../../interfaces/CouponInt";
import CouponRep from "../../components/main/CouponRep";

const CustomerCoupons = (): JSX.Element => {

    const { data: coupons } = useFetch('/purchases');

    return (
        <div className="CustomerCoupons">
            {coupons.map((coupon: CouponInt) => (
                    <div key={ coupon.id }>
                        <CouponRep {...coupon}/>
                    </div>
                )
            )}
        </div>
    );
}

export default CustomerCoupons;