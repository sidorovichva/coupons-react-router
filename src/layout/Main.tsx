import './Main.css';
import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import CouponsView from "./main/CouponsView";
import CompaniesView from "./main/CompaniesView";
import CustomersView from "./main/CustomersView";
import About from "./main/About";
import { Route, Switch } from "react-router-dom";
import AddCustomer from "./main/AddCustomer";
import AddCompany from "./main/AddCompany";
import AddCoupon from "./main/AddCoupon";
import LoginWindow from "./main/LoginWindow";
import CompanyCoupons from "./main/CompanyCoupons";
import UpdateCoupon from "./main/UpdateCoupon";
import CustomerCoupons from "./main/CustomerCoupons";
import CustomerCouponsNot from "./main/CustomerCouponsNot";
import useCurrentLocation from "../hooks/useCurrentLocation";
import UpdateCompany from "./main/UpdateCompany";
import {useSelector} from "react-redux";
import ConfigureStore from "../redux/StoreConfig";
import UpdateCustomer from "./main/UpdateCustomer";

const Main = (): JSX.Element => {

    const { responseMessage } = useSelector((state) => ConfigureStore.getState().ResponseStatusSlice);

    const title = useCurrentLocation();

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Main" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <h1 className="top">{ title }</h1>
            <div className="center">
                <Switch>
                    <Route exact path="/">
                        <CouponsView />
                    </Route>
                    <Route exact path="/login">
                        <LoginWindow />
                    </Route>
                    <Route exact path="/companies">
                        <CompaniesView />
                    </Route>
                    <Route exact path="/customers">
                        <CustomersView />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/customer_coupons">
                        <CustomerCoupons />
                    </Route>
                    <Route exact path="/customer_coupons/not">
                        <CustomerCouponsNot />
                    </Route>
                    <Route exact path="/company_coupons">
                        <CompanyCoupons />
                    </Route>
                    <Route exact path="/add_coupon">
                        <AddCoupon />
                    </Route>
                    <Route exact path="/update_coupon">
                        <UpdateCoupon />
                    </Route>
                    <Route exact path="/add_company">
                        <AddCompany />
                    </Route>
                    <Route exact path="/update_company">
                        <UpdateCompany />
                    </Route>
                    <Route exact path="/add_customer">
                        <AddCustomer />
                    </Route>
                    <Route exact path="/update_customer">
                        <UpdateCustomer />
                    </Route>
                </Switch>
            </div>
            <div className="bottom">{responseMessage}</div>
        </div>
    )
}

export default Main;

// import {useSelector} from "react-redux";
// import './Main.css';
// import ConfigureStore from "../redux/StoreConfig";
// import useFetch from '../hooks/useFetch';
// import {useContext} from "react";
// import {ThemeContext} from "../contexts/ThemeContext";
// import CouponsView from "./main/CouponsView";
// import CompaniesView from "./main/CompaniesView";
// import CustomersView from "./main/CustomersView";
// import About from "./main/About";
//
// const Main = (): JSX.Element => {
//
//     const { type, title, link } = useSelector((state) => ConfigureStore.getState().MainScreenSlicer);
//     const { allCoupons } = useSelector((state) => ConfigureStore.getState().DataSlicer);
//
//     const { data: array, isPending, error } = useFetch(link);
//
//     const { isLightTheme, light, dark } = useContext(ThemeContext);
//     const currentTheme = isLightTheme ? light : dark;
//
//     return (
//         <div className="Main" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
//             <h1>{title}</h1>
//             {type === 'Coupon' && <CouponsView coupons={array}/>}
//             {type === 'Company' && <CompaniesView companies={array}/>}
//             {type === 'Customer' && <CustomersView customers={array}/>}
//             {type === 'About' && <About/>}
//         </div>
//     )
// }
//
// export default Main;