import React from 'react';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import './DropDownMenu.css'
import {Link} from "react-router-dom";
import {Role} from "../../enums/Role";
import {ClientURL} from "../../enums/ClientURL";
import useUniqueIndex from "../../hooks/useUniqueIndex";

const DropDownMenu = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const { randomGenerator } = useUniqueIndex();

    return (
        <div className="DropDownMenu">
            Menu
            <ul className="dropdown">
                {role === Role.COMPANY &&
                    <Link className="Link" to={ ClientURL.addCoupon } >Add coupon</Link>}
                {role === Role.CUSTOMER &&
                    <Link className="Link" to={ ClientURL.customerCoupons } onClick={ randomGenerator }>My coupons</Link>}
                {role === Role.COMPANY &&
                    <Link className="Link" to={ ClientURL.companyCoupons } onClick={ randomGenerator }>Issued coupons</Link>}
                {role === Role.CUSTOMER &&
                    <Link className="Link" to={ ClientURL.notCustomerCoupons } onClick={ randomGenerator }>Go shopping</Link>}
                <Link className="Link" to={ ClientURL.allCoupons } onClick={ randomGenerator }>All coupons</Link>
                {role === Role.ADMINISTRATOR &&
                    <Link className="Link" to={ ClientURL.addCompany }>Add company</Link>}
                <Link className="Link" to={ ClientURL.allCompanies } onClick={ randomGenerator }>All companies</Link>
                {role === Role.ADMINISTRATOR &&
                    <Link className="Link" to={ ClientURL.addCustomer }>Add customer</Link>}
                {role === Role.ADMINISTRATOR &&
                    <Link className="Link" to={ ClientURL.allCustomers } onClick={ randomGenerator }>All customers</Link>}
            </ul>
        </div>
    );
}

export default DropDownMenu;