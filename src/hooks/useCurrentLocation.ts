import {useLocation} from "react-router-dom";
import {ClientURL} from "../enums/ClientURL";

const useCurrentLocation = () => {

    const url = useLocation().pathname;

    switch (url) {
        case(ClientURL.home): {return 'All Coupons';}
        case(ClientURL.allCoupons): {return 'All Coupons';}
        case(ClientURL.login): {return 'Login';}
        case(ClientURL.allCompanies): {return 'All companies';}
        case(ClientURL.allCustomers): {return 'All customers';}
        case(ClientURL.about): {return 'About';}
        case(ClientURL.customerCoupons): {return 'My coupons';}
        case(ClientURL.notCustomerCoupons): {return 'Go shopping';}
        case(ClientURL.companyCoupons): {return 'Issued coupons';}
        case(ClientURL.addCoupon): {return 'Issue coupon';}
        case(ClientURL.addCompany): {return 'Add company';}
        case(ClientURL.addCustomer): {return 'Registration';}
        case(ClientURL.updateCoupon): {return 'Update coupon';}
        case(ClientURL.updateCompany): {return 'Update company';}
        case(ClientURL.updateCustomer): {return 'Update customer';}
        case(ClientURL.profileCustomer): {return 'Profile';}
        case(ClientURL.profileCompany): {return 'Profile';}
        default: {return 'Page not found';}
    }
}

export default useCurrentLocation;