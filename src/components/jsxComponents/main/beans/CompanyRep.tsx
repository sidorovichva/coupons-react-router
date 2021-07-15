import './CompanyRep.css';
import {CompanyInt} from "../../../../interfaces/CompanyInt";
import {useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import {Link} from "react-router-dom";
import ServerRequest from "../../../logicComponents/ServerRequest";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";
import DeleteBean from "../../../logicComponents/DeleteBean";
import UpdateBean from "../../../logicComponents/UpdateBean";

const CompanyRep = (company: CompanyInt) => {

    const {role} = useSelector((state) => ConfigureStore.getState().LoginSlice);

    const { handleUpdate } = UpdateBean(company);

    const {
        handleDelete,
        isToDelete,
        deleteLink,
        axiosDelete
    } = DeleteBean(
        company.id,
        ServerURL.deleteCompany,
        ClientURL.allCompanies,
        ClientURL.allCompanies
    );

    return (
        //deleted ? <div></div> :
        <div className="CompanyRep">
            <div className="nameComp">{company.name}</div>
            <div className="emailComp">{company.email}</div>
            {role === 'ADMINISTRATOR' && <div className="actions">
                <Link className="Link" to={ClientURL.updateCompany} onClick={handleUpdate}>Update</Link>
                <div className="delete" onClick={ handleDelete }>Delete</div>
            </div>}
            {isToDelete && <ServerRequest method={axiosDelete} link={deleteLink} />}
        </div>
    );
}

export default CompanyRep;