import './Company.css';
import {CompanyInt} from "../../../../interfaces/CompanyInt";
import {useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import {Link} from "react-router-dom";
import {ClientURL} from "../../../../enums/ClientURL";
import UpdateBean from "../../../logicComponents/UpdateBean";

const Company = (company: CompanyInt) => {

    const {role} = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const { passBeanToUpdate } = UpdateBean(company);

    return (
        <div className="Company">
            <div className="nameComp">{company.name}</div>
            <div className="emailComp">{company.email}</div>
            {role === 'ADMINISTRATOR' && <div className="actions">
                <Link
                    className="Link"
                    to={ClientURL.updateCompany}
                    onClick={passBeanToUpdate}>Update</Link>
                <Link
                    className="Link"
                    to={ ClientURL.deleteCompany + `/${company.id}` }
                >Delete</Link>
            </div>}
        </div>
    );
}

export default Company;