import {useLocation} from "react-router-dom";

const useCurrentLocation = () => {

    const url = useLocation().pathname;

    switch (url) {
        case('/'): {return 'All Coupons';}
        case('/login'): {return 'Login';}
        case('/companies'): {return 'All companies';}
        case('/customers'): {return 'All customers';}
        case('/about'): {return 'About';}
        case('/customer_coupons'): {return 'My coupons';}
        case('/customer_coupons/not'): {return 'Go shopping';}
        case('/company_coupons'): {return 'Issued coupons';}
        case('/add_coupon'): {return 'Issue coupon';}
        case('/add_company'): {return 'Add company';}
        case('/add_customer'): {return 'Registration';}
        case('/update_coupon'): {return 'Update coupon';}
        case('/update_company'): {return 'Update company';}
        case('/update_customer'): {return 'Update customer';}
        default: {return '';}
    }
}

export default useCurrentLocation;