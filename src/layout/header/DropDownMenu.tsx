import React from 'react';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import './DropDownMenu.css'
import {Link} from "react-router-dom";
import {Role} from "../../enums/Role";
import {ClientURL} from "../../enums/ClientURL";

const DropDownMenu = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    return (
        <div className="DropDownMenu">
            Menu
            <ul className="dropdown">
                {role === Role.COMPANY && <Link className="Link" to={ ClientURL.addCoupon }>Add coupon</Link>}
                {role === Role.CUSTOMER && <Link className="Link" to={ ClientURL.customerCoupons }>My coupons</Link>}
                {role === Role.COMPANY && <Link className="Link" to={ ClientURL.companyCoupons }>Issued coupons</Link>}
                {role === Role.CUSTOMER && <Link className="Link" to={ ClientURL.notCustomerCoupons }>Go shopping</Link>}
                <Link className="Link" to={ ClientURL.allCoupons }>All coupons</Link>
                {role === Role.ADMINISTRATOR && <Link className="Link" to={ ClientURL.addCompany }>Add company</Link>}
                <Link className="Link" to={ ClientURL.allCompanies }>All companies</Link>
                {role === Role.ADMINISTRATOR && <Link className="Link" to={ ClientURL.addCustomer }>Add customer</Link>}
                {role === Role.ADMINISTRATOR && <Link className="Link" to={ ClientURL.allCustomers }>All customers</Link>}
            </ul>
        </div>
    );
}

export default DropDownMenu;