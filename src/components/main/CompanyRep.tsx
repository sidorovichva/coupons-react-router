import './CompanyRep.css';
import {CompanyInt} from "../../interfaces/CompanyInt";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import Delete from "./actions/Delete";
import {Link, useHistory} from "react-router-dom";
import {setCompanyBean} from "../../redux/UpdateBeanSlice";

const CompanyRep = (company: CompanyInt) => {

    const {role} = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleUpdate = () => {
        dispatch(setCompanyBean({
            beanValue: company
        }))
    }

    const [isToDelete, setIsToDelete] = useState<boolean>(false);
    const [linkToDelete] = useState('/companies');
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
                {role === 'ADMINISTRATOR' && <Link className="Link" to='/update_company' onClick={handleUpdate}>Update</Link>}
                {role === 'ADMINISTRATOR' && <div className="delete" onClick={ handleDelete }>Delete</div>}
            </div>
            {isToDelete && <Delete link={deleteLink} />}
        </div>
    );
}

export default CompanyRep;