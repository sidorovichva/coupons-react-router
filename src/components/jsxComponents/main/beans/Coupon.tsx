import './Coupon.css';
import {CouponInt} from "../../../../interfaces/CouponInt";
import {useLocation, Link} from "react-router-dom";
import {ClientURL} from "../../../../enums/ClientURL";
import UpdateBean from "../../../logicComponents/UpdateBean";

const Coupon = (coupon: CouponInt) => {

    const location = useLocation().pathname;

    const { passBeanToUpdate } = UpdateBean(coupon);

    return (
        <div className="Coupon">
            <div className="title">{coupon.title}</div>
            <div className="description">{coupon.description}</div>
            <div className="endDate">{coupon.endDate}</div>
            <div className="price">{coupon.price}&nbsp;&#8362;</div>
            {(location === ClientURL.notCustomerCoupons || location === ClientURL.companyCoupons) && <div className="actions">
                {location === ClientURL.notCustomerCoupons &&
                    <Link
                        className="Link"
                        to={ ClientURL.buyCoupon + `/${coupon.id}` }
                    >Buy</Link>}
                {location === ClientURL.companyCoupons &&
                    <Link
                        className="Link"
                        to={ ClientURL.updateCoupon }
                        onClick={ passBeanToUpdate }
                    >Update</Link>}
                {location === ClientURL.companyCoupons &&
                    <Link
                        className="Link"
                        to={ ClientURL.deleteCoupon + `/${coupon.id}` }
                    >Delete</Link>}
            </div>}
        </div>
    );
}

export default Coupon;