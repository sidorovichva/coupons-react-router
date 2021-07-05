import useFetch from "../../hooks/useFetch";
import './CompanyCoupons.css';
import {CouponInt} from "../../interfaces/CouponInt";
import CouponRep from "../../components/main/CouponRep";

const CompanyCoupons = (): JSX.Element => {

    const { data: coupons } = useFetch('/coupons');

    return (
        <div className="CompanyCoupons">
            {coupons.map((coupon: CouponInt) => (
                    <div key={ coupon.id }>
                        <CouponRep {...coupon}/>
                    </div>
                )
            )}
        </div>
    );
}

export default CompanyCoupons;