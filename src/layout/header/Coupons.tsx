import React from 'react';
import './Coupons.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {Link} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {Role} from "../../enums/Role";

const Coupons = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    return (
        <div className="Coupons">
            Coupons
            <ul className="dropdown">
                {role === Role.COMPANY && <Link className="Link" to={ ClientURL.addCoupon }>Add coupon</Link>}
                {role === Role.CUSTOMER && <Link className="Link" to={ ClientURL.customerCoupons }>My coupons</Link>}
                {role === Role.COMPANY && <Link className="Link" to={ ClientURL.companyCoupons }>Issued coupons</Link>}
                {role === Role.CUSTOMER && <Link className="Link" to={ ClientURL.notCustomerCoupons }>Go shopping</Link>}
                <Link className="Link" to={ ClientURL.allCoupons }>All coupons</Link>
            </ul>
        </div>
    );
}

export default Coupons;