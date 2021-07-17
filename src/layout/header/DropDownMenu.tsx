import React from 'react';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import './DropDownMenu.css'
import {Link} from "react-router-dom";
import {Role} from "../../enums/Role";
import {ClientURL} from "../../enums/ClientURL";
import useFoldMenu from "../../hooks/useFoldMenu";

const DropDownMenu = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const { foldMenu, isFolded } = useFoldMenu();

    return (
        <div className="DropDownMenu">
            Menu
            {isFolded && <ul className="dropdown">
                {role === Role.COMPANY &&
                    <Link className="Link" to={ ClientURL.addCoupon } onClick={ foldMenu }>Add coupon</Link>}
                {role === Role.CUSTOMER &&
                    <Link className="Link" to={ ClientURL.customerCoupons } onClick={ foldMenu }>My coupons</Link>}
                {role === Role.COMPANY &&
                    <Link className="Link" to={ ClientURL.companyCoupons } onClick={ foldMenu }>Issued coupons</Link>}
                {role === Role.CUSTOMER &&
                    <Link className="Link" to={ ClientURL.notCustomerCoupons } onClick={ foldMenu }>Go shopping</Link>}
                <Link className="Link" to={ ClientURL.allCoupons } onClick={ foldMenu }>All coupons</Link>
                {role === Role.ADMINISTRATOR &&
                    <Link className="Link" to={ ClientURL.addCompany } onClick={ foldMenu }>Add company</Link>}
                <Link className="Link" to={ ClientURL.allCompanies } onClick={ foldMenu }>All companies</Link>
                {role === Role.ADMINISTRATOR &&
                    <Link className="Link" to={ ClientURL.addCustomer } onClick={ foldMenu }>Add customer</Link>}
                {role === Role.ADMINISTRATOR &&
                    <Link className="Link" to={ ClientURL.allCustomers } onClick={ foldMenu }>All customers</Link>}
            </ul>}
        </div>
    );
}

export default DropDownMenu;