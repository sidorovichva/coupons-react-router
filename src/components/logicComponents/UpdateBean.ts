import {setCompanyBean, setCouponBean, setCustomerBean} from "../../redux/UpdateBeanSlice";
import {useDispatch} from "react-redux";
import {CompanyInt} from "../../interfaces/CompanyInt";
import {CustomerInt} from "../../interfaces/CustomerInt";
import {CouponInt} from "../../interfaces/CouponInt";

const UpdateBean = (
    bean: CouponInt | CustomerInt | CompanyInt
) => {

    const dispatch = useDispatch();

    const handleUpdate = () => {
        if ((<CompanyInt>bean).name) {
            const company = (<CompanyInt>bean)
            dispatch(setCompanyBean({companyBeanValue: company}))
        }
        else if ((<CustomerInt>bean).firstName) {
            const customer = (<CustomerInt>bean)
            dispatch(setCustomerBean({customerBeanValue: customer}))
        }
        else {
            const coupon = (<CouponInt>bean)
            dispatch(setCouponBean({couponBeanValue: coupon}))
        }
    }

    return { passBeanToUpdate: handleUpdate };
}

export default UpdateBean;