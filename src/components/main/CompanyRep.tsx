import './CompanyRep.css';
import {CompanyInt} from "../../interfaces/CompanyInt";
//import {useState} from "react";
//import {useSelector} from "react-redux";
//import ConfigureStore from "../../redux/StoreConfig";

const CompanyRep = (company: CompanyInt) => {

    //const {role} = useSelector((state) => ConfigureStore.getState().LoginSlice);

    //const [deleted, setDeleted] = useState<boolean>(false);

    console.log("       CompanyRep " + company)

    return (
        //deleted ? <div></div> :
        <div className="CompanyRep">
            <div className="nameComp">{company.name}</div>
            <div className="emailComp">{company.email}</div>
            {/*<div className="actions">*/}
            {/*    {role === 'COMPANY' && <div className="update" onClick={ handleUpdate }>Update</div>}*/}
            {/*    {role === 'COMPANY' && <div className="delete" onClick={ handleDelete }>Delete</div>}*/}
            {/*</div>*/}
        </div>
    );
}

export default CompanyRep;