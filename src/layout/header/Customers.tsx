import React from 'react';
import './Customers.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {ClientURL} from "../../enums/ClientURL";
import {Role} from "../../enums/Role";
import useFoldMenu from "../../hooks/useFoldMenu";

const Customers = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const { foldMenu, isFolded } = useFoldMenu();

    return (
        <div className="Customers">
            Customers
            {isFolded && <ul className="dropdown">
                {role === Role.ADMINISTRATOR && <Link className="Link" to={ ClientURL.addCustomer } onClick={foldMenu}>Add customer</Link>}
                <Link className="Link" to={ ClientURL.allCustomers } onClick={foldMenu}>All customers</Link>
            </ul>}
        </div>
    );
}

export default Customers;