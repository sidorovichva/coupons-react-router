import React from 'react';
import './Coupons.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {Link} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {Role} from "../../enums/Role";
import useFoldMenu from "../../hooks/useFoldMenu";

const Coupons = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const { foldMenu, isFolded } = useFoldMenu();

    return (
        <div className="Coupons">
            Coupons
            {isFolded && <ul className="dropdown">
                {role === Role.COMPANY && <Link className="Link" to={ ClientURL.addCoupon } onClick={foldMenu}>Add coupon</Link>}
                {role === Role.CUSTOMER && <Link className="Link" to={ ClientURL.customerCoupons } onClick={ foldMenu }>My coupons</Link>}
                {role === Role.COMPANY && <Link className="Link" to={ ClientURL.companyCoupons } onClick={ foldMenu }>Issued coupons</Link>}
                {role === Role.CUSTOMER && <Link className="Link" to={ ClientURL.notCustomerCoupons } onClick={ foldMenu }>Go shopping</Link>}
                <Link className="Link" to={ ClientURL.allCoupons } onClick={ foldMenu }>All coupons</Link>
            </ul>}
        </div>
    );
}

export default Coupons;