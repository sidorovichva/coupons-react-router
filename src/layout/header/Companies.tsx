import React from 'react';
import './Companies.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {Link} from "react-router-dom";

const Companies = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    return (
        <div className="Companies">
            Companies
            <ul className="dropdown">
                {role === 'ADMINISTRATOR' && <Link className="Link" to="/add_company" >Add company</Link>}
                <Link className="Link" to="/companies">All companies</Link>
            </ul>
        </div>
    );
}

export default Companies;