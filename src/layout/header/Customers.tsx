import React from 'react';
import './Customers.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {ClientURL} from "../../enums/ClientURL";
import {Role} from "../../enums/Role";

const Customers = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    return (
        <div className="Customers">
            Customers
            <ul className="dropdown">
                {role === Role.ADMINISTRATOR && <Link className="Link" to={ ClientURL.addCustomer }>Add customer</Link>}
                <Link className="Link" to={ ClientURL.allCustomers }>All customers</Link>
            </ul>
        </div>
    );
}

export default Customers;