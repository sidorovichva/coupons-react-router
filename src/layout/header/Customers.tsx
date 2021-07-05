import React from 'react';
import './Customers.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";

const Customers = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    return (
        <div className="Customers">
            Customers
            <ul className="dropdown">
                {role === 'ADMINISTRATOR' && <Link className="Link" to="/add_customer">Add customer</Link>}
                <Link className="Link" to="/customers">All customers</Link>
            </ul>
        </div>
    );
}

export default Customers;