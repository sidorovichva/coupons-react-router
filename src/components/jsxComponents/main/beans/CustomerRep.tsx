import './CustomerRep.css';
import {CustomerInt} from "../../../../interfaces/CustomerInt";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import {Link, useHistory} from "react-router-dom";
import {setCustomerBean} from "../../../../redux/UpdateBeanSlice";
import ServerRequest from "../../../logicComponents/ServerRequest";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";

const CustomerRep = (customer: CustomerInt) => {

    const {role} = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(setCustomerBean({
            customerBeanValue: customer
        }))
    }

    const [isToDelete, setIsToDelete] = useState<boolean>(false);
    const [linkToDelete] = useState(ServerURL.deleteCustomer);
    const [deleteLink, setDeleteLink] = useState<string>('');

    const history = useHistory();

    const handleDelete = () => {
        setDeleteLink(linkToDelete + '/' + customer.id);
        setIsToDelete(true);
        history.go(0);
    }

    return (
        <div className="CustomerRep">
            <div className="firstName">{customer.firstName}</div>
            <div className="lastName">{customer.lastName}</div>
            <div className="email">{customer.email}</div>
            <div className="actions">
                {role === 'ADMINISTRATOR' && <Link className="Link" to={ClientURL.updateCustomer} onClick={handleUpdate}>Update</Link>}
                {role === 'ADMINISTRATOR' && <div className="delete" onClick={ handleDelete }>Delete</div>}
            </div>
            {/*{isToDelete && <Delete link={deleteLink} />}*/}
            {isToDelete && <ServerRequest method={"DELETE"} link={deleteLink} />}
        </div>
    );
}

export default CustomerRep;