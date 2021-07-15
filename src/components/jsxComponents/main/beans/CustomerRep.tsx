import './CustomerRep.css';
import {CustomerInt} from "../../../../interfaces/CustomerInt";
import {Link} from "react-router-dom";
import ServerRequest from "../../../logicComponents/ServerRequest";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";
import DeleteBean from "../../../logicComponents/DeleteBean";
import UpdateBean from "../../../logicComponents/UpdateBean";

const CustomerRep = (customer: CustomerInt) => {

    const { handleUpdate } = UpdateBean(customer);

    const {
        handleDelete,
        isToDelete,
        deleteLink,
        axiosDelete
    } = DeleteBean(
        customer.id,
        ServerURL.deleteCustomer,
        ClientURL.allCustomers,
        ClientURL.allCustomers
    )

    return (
        <div className="CustomerRep">
            <div className="firstName">{customer.firstName}</div>
            <div className="lastName">{customer.lastName}</div>
            <div className="email">{customer.email}</div>
            <div className="actions">
                <Link className="Link" to={ClientURL.updateCustomer} onClick={handleUpdate}>Update</Link>
                <div className="delete" onClick={ handleDelete }>Delete</div>
            </div>
            {/*{isToDelete && <Delete link={deleteLink} />}*/}
            {isToDelete && <ServerRequest method={axiosDelete} link={deleteLink} />}
        </div>
    );
}

export default CustomerRep;