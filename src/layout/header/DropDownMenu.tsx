import React from 'react';
import {useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import './DropDownMenu.css'
import {Link} from "react-router-dom";

const DropDownMenu = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);

    return (
        <div className="DropDownMenu">
            Menu
            <ul className="dropdown">
                {role === 'COMPANY' && <Link className="Link" to="/add_coupon">Add coupons</Link>}
                {role === 'CUSTOMER' && <Link className="Link" to="/customer_coupons">My coupons</Link>}
                {role === 'COMPANY' && <Link className="Link" to="/company_coupons">Issued coupons</Link>}
                {role === 'CUSTOMER' && <Link className="Link" to="/customer_coupons/not">Go shopping</Link>}
                <Link className="Link" to="/">All coupons</Link>
                {role === 'ADMINISTRATOR' && <Link className="Link" to="/add_company" >Add company</Link>}
                <Link className="Link" to="/companies">All companies</Link>
                {role === 'ADMINISTRATOR' && <Link className="Link" to="/add_customer">Add customer</Link>}
                {role === 'ADMINISTRATOR' && <Link className="Link" to="/customers">All customers</Link>}
            </ul>
        </div>
    );
}

export default DropDownMenu;

// import React, {ChangeEvent} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import ConfigureStore from "../../redux/StoreConfig";
// import './DropDownMenu.css'
// import { categories, companies, customers, coupons, purchases } from "../../redux/DropDownMenuSlice";
//
// const DropDownMenu = (): JSX.Element => {
//
//     const { title } = useSelector((state) => ConfigureStore.getState().MainScreenSlicer);
//     const dispatch = useDispatch();
//
//     const handleSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
//         if (event.target.value === 'categories') dispatch(categories())
//         if (event.target.value === 'companies') dispatch(companies())
//         if (event.target.value === 'customers') dispatch(customers())
//         if (event.target.value === 'coupons') dispatch(coupons())
//         if (event.target.value === 'purchases') dispatch(purchases())
//     }
//
//     return (
//         <div className="DropDownMenu" >
//             <select className="select" value={ title } onChange={ handleSelect }>
//                 <option value="categories">Categories</option>
//                 <option value="companies">Companies</option>
//                 <option value="customers">Customers</option>
//                 <option value="coupons">Coupons</option>
//                 <option value="purchases">Purchases</option>
//             </select>
//         </div>
//     );
// }
//
// export default DropDownMenu;