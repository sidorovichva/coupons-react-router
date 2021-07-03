import React from 'react';
import './Customers.css';
import {useDispatch, useSelector} from "react-redux";
import {openWindow} from "../../redux/PopUpWindowsSlicer";
import {add_customer, customers} from "../../redux/MainScreenSlicer";
import ConfigureStore from "../../redux/StoreConfig";
import AddCustomer from "../../components/AddCustomer";
import {Link} from "react-router-dom";

const Customers = (): JSX.Element => {

    const { addCustomer } = useSelector((state) => ConfigureStore.getState().PopUpWindowsSlicer);
    const dispatch = useDispatch();

    const handleAdd = () => {
        //dispatch(openWindow({stateName: 'addCustomer'}))
        dispatch(add_customer())
    }

    const handleFind = () => {
        dispatch(customers())
    }

    return (
        <div className="Customers">
            Customers
            <ul className="dropdown">
                {/*<li className="Link" onClick={ handleAdd }>Add</li>*/}
                <Link className="Link" to="/add_customer" onClick={ handleAdd }>Add Customer</Link>
                <Link className="Link" to="/customers" onClick={ handleFind }>All customers</Link>
            </ul>
            {addCustomer && <AddCustomer />}
        </div>
    );
}

export default Customers;

// import React from 'react';
// import './Customers.css';
// import {useDispatch, useSelector} from "react-redux";
// import {openWindow} from "../../redux/PopUpWindowsSlicer";
// import {customers} from "../../redux/MainScreenSlicer";
// import ConfigureStore from "../../redux/StoreConfig";
// import AddCustomer from "../../components/AddCustomer";
//
// const Customers = (): JSX.Element => {
//
//     const { addCustomer } = useSelector((state) => ConfigureStore.getState().PopUpWindowsSlicer);
//     const dispatch = useDispatch();
//
//     const handleAdd = () => {
//         dispatch(openWindow({stateName: 'addCustomer'}))
//     }
//
//     const handleFind = () => {
//         dispatch(customers())
//     }
//
//     return (
//         <div className="Customers">
//             Customers
//             <ul className="dropdown">
//                 <li onClick={ handleAdd }>Add</li>
//                 <li onClick={ handleFind }>Show all</li>
//             </ul>
//             {addCustomer && <AddCustomer />}
//         </div>
//     );
// }
//
// export default Customers;