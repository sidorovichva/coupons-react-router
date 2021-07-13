import './CompanyRep.css';
import {CompanyInt} from "../../../../interfaces/CompanyInt";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import {Link, useHistory} from "react-router-dom";
import {setCompanyBean} from "../../../../redux/UpdateBeanSlice";
import ServerRequest from "../../../logicComponents/ServerRequest";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";

const CompanyRep = (company: CompanyInt) => {

    const {role} = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleUpdate = () => {
        dispatch(setCompanyBean({
            companyBeanValue: company
        }))
    }

    const [isToDelete, setIsToDelete] = useState<boolean>(false);
    const [linkToDelete] = useState(ServerURL.deleteCompany);
    const [deleteLink, setDeleteLink] = useState<string>('');

    const handleDelete = () => {
        setDeleteLink(linkToDelete + '/' + company.id);
        setIsToDelete(true);
        history.go(0);
    }

    return (
        //deleted ? <div></div> :
        <div className="CompanyRep">
            <div className="nameComp">{company.name}</div>
            <div className="emailComp">{company.email}</div>
            <div className="actions">
                {/*{role === 'COMPANY' && <div className="update" onClick={ handleUpdate }>Update</div>}*/}
                {role === 'ADMINISTRATOR' && <Link className="Link" to={ClientURL.updateCompany} onClick={handleUpdate}>Update</Link>}
                {role === 'ADMINISTRATOR' && <div className="delete" onClick={ handleDelete }>Delete</div>}
            </div>
            {/*{isToDelete && <Delete link={deleteLink} />}*/}
            {isToDelete && <ServerRequest method={"DELETE"} link={deleteLink} />}
        </div>
    );
}

export default CompanyRep;