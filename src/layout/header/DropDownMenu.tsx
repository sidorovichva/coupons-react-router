import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import './DropDownMenu.css'
import { categories, companies, customers, coupons, purchases } from "../../redux/DropDownMenuSlice";

const DropDownMenu = (): JSX.Element => {

    const { title } = useSelector((state) => ConfigureStore.getState().MainScreenSlicer);
    const dispatch = useDispatch();

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
        if (event.target.value === 'categories') dispatch(categories())
        if (event.target.value === 'companies') dispatch(companies())
        if (event.target.value === 'customers') dispatch(customers())
        if (event.target.value === 'coupons') dispatch(coupons())
        if (event.target.value === 'purchases') dispatch(purchases())
    }

    return (
        <div className="DropDownMenu" >
            <select value={ title } onChange={ handleSelect }>
                <option value="categories">Categories</option>
                <option value="companies">Companies</option>
                <option value="customers">Customers</option>
                <option value="coupons">Coupons</option>
                <option value="purchases">Purchases</option>
            </select>
        </div>
    );
}

export default DropDownMenu;