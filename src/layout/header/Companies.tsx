import React from 'react';
import './Companies.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {Link} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {Role} from "../../enums/Role";

const Companies = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    return (
        <div className="Companies">
            Companies
            <ul className="dropdown">
                {role === Role.ADMINISTRATOR && <Link className="Link" to={ ClientURL.addCompany }>Add company</Link>}
                <Link className="Link" to={ ClientURL.allCompanies }>All companies</Link>
            </ul>
        </div>
    );
}

export default Companies;