import React from 'react';
import './Companies.css';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {Link} from "react-router-dom";
import {ClientURL} from "../../enums/ClientURL";
import {Role} from "../../enums/Role";
import useFoldMenu from "../../hooks/useFoldMenu";

const Companies = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const { foldMenu, isFolded } = useFoldMenu();

    return (
        <div className="Companies">
            Companies
            {isFolded && <ul className="dropdown">
                {role === Role.ADMINISTRATOR && <Link className="Link" to={ ClientURL.addCompany } onClick={foldMenu}>Add company</Link>}
                <Link className="Link" to={ ClientURL.allCompanies } onClick={foldMenu}>All companies</Link>
            </ul>}
        </div>
    );
}

export default Companies;