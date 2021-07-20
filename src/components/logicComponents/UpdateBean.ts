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
        if ((bean as CompanyInt).name) {
            const company = (bean as CompanyInt)
            //const company = (<CompanyInt>bean)
            dispatch(setCompanyBean({companyBeanValue: company}))
        }
        else if ((bean as CustomerInt).firstName) {
            const customer = (bean as CustomerInt)
            dispatch(setCustomerBean({customerBeanValue: customer}))
        }
        else {
            const coupon = (bean as CouponInt)
            dispatch(setCouponBean({couponBeanValue: coupon}))
        }
    }

    return { passBeanToUpdate: handleUpdate };
}

export default UpdateBean;