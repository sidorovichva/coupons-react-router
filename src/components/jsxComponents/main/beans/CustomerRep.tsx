import './CustomerRep.css';
import {CustomerInt} from "../../../../interfaces/CustomerInt";
import {Link} from "react-router-dom";
import {ClientURL} from "../../../../enums/ClientURL";
import UpdateBean from "../../../logicComponents/UpdateBean";

const CustomerRep = (customer: CustomerInt) => {

    const { passBeanToUpdate } = UpdateBean(customer);

    return (
        <div className="CustomerRep">
            <div className="firstName">{customer.firstName}</div>
            <div className="lastName">{customer.lastName}</div>
            <div className="email">{customer.email}</div>
            <div className="actions">
                <Link
                    className="Link"
                    to={ClientURL.updateCustomer}
                    onClick={passBeanToUpdate}
                >Update</Link>
                <Link
                    className="Link"
                    to={ ClientURL.deleteCustomer + `/${customer.id}` }
                >Delete</Link>
            </div>
        </div>
    );
}

export default CustomerRep;