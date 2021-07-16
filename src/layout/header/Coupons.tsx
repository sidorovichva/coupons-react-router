import React from 'react';
import './Coupons.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {Link} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {Role} from "../../enums/Role";
import {generateNumber} from "../../redux/UniqueIndexSlice";

const Coupons = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const dispatch = useDispatch();

    const randomGenerator = () => {
        dispatch(generateNumber());
    };

    return (
        <div className="Coupons">
            Coupons
            <ul className="dropdown">
                {role === Role.COMPANY && <Link className="Link" to={ ClientURL.addCoupon }>Add coupon</Link>}
                {role === Role.CUSTOMER && <Link className="Link" to={ ClientURL.customerCoupons }>My coupons</Link>}
                {role === Role.COMPANY && <Link className="Link" to={ ClientURL.companyCoupons }>Issued coupons</Link>}
                {role === Role.CUSTOMER && <Link className="Link" to={ ClientURL.notCustomerCoupons }>Go shopping</Link>}
                <Link className="Link" to={ ClientURL.allCoupons } onClick={ randomGenerator }>All coupons</Link>
            </ul>
        </div>
    );
}

export default Coupons;