import './CustomerRep.css';
import {CustomerInt} from "../../interfaces/CustomerInt";

const CustomerRep = (customer: CustomerInt) => {

    console.log("       CustomerRep " + customer)

    return (
        <div className="CustomerRep">
            <div className="firstName">{customer.firstName}</div>
            <div className="lastName">{customer.lastName}</div>
            <div className="email">{customer.email}</div>
        </div>
    );
}

export default CustomerRep;