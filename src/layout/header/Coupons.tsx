import React from 'react';
import './Coupons.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {Link} from "react-router-dom";

const Coupons = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    return (
        <div className="Coupons">
            Coupons
            <ul className="dropdown">
                {role === 'COMPANY' && <Link className="Link" to="/add_coupon">Add coupons</Link>}
                {role === 'CUSTOMER' && <Link className="Link" to="/customer_coupons">My coupons</Link>}
                {role === 'COMPANY' && <Link className="Link" to="/company_coupons">Issued coupons</Link>}
                {role === 'CUSTOMER' && <Link className="Link" to="/customer_coupons/not">Go shopping</Link>}
                <Link className="Link" to="/">All coupons</Link>
            </ul>
        </div>
    );
}

export default Coupons;