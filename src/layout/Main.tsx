import './Main.css';
import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import CompaniesView from "./main/companies/CompaniesView";
import CustomersView from "./main/customers/CustomersView";
import About from "./main/about/About";
import { Route, Switch } from "react-router-dom";
import AddCustomer from "./main/customers/add/AddCustomer";
import AddCompany from "./main/companies/add/AddCompany";
import AddCoupon from "./main/coupons/add/AddCoupon";
import LoginWindow from "./main/login/LoginWindow";
import UpdateCoupon from "./main/coupons/update/UpdateCoupon";
import useCurrentLocation from "../hooks/useCurrentLocation";
import UpdateCompany from "./main/companies/update/UpdateCompany";
import UpdateCustomer from "./main/customers/update/UpdateCustomer";
import PopUpMessage from "../components/jsxComponents/main/PopUpMessage";
import {ServerURL} from "../enums/ServerURL";
import {ClientURL} from "../enums/ClientURL";
import Page404 from "./main/Page404";
import CouponsView from "./main/coupons/CouponsView";
import ProfileCustomer from "./main/profile/customer/ProfileCustomer";
import ProfileCompany from "./main/profile/company/ProfileCompany";
import WarningMessage from "../components/logicComponents/WarningMessage";
import BuyCoupon from "./main/coupons/buy/BuyCoupon";

const Main = (): JSX.Element => {

    const title = useCurrentLocation();

    const { isWarningActive } = WarningMessage();

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Main" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <div className="top">
                <h2>{ title }</h2>
            </div>
            <div className="center">
                <Switch>
                    <Route exact path={ClientURL.home}>
                        <CouponsView link={ServerURL.allCoupons} />
                    </Route>
                    <Route exact path={ClientURL.allCoupons}>
                        <CouponsView link={ServerURL.allCoupons} />
                    </Route>
                    <Route exact path={ClientURL.login}>
                        <LoginWindow />
                    </Route>
                    <Route exact path={ClientURL.allCompanies}>
                        <CompaniesView link={ServerURL.allCompanies}/>
                    </Route>
                    <Route exact path={ClientURL.allCustomers}>
                        <CustomersView link={ServerURL.allCustomers}/>
                    </Route>
                    <Route exact path={ClientURL.about}>
                        <About />
                    </Route>
                    <Route exact path={ClientURL.customerCoupons}>
                        <CouponsView link={ServerURL.customerCoupons}/>
                    </Route>
                    <Route exact path={ClientURL.notCustomerCoupons}>
                        <CouponsView link={ServerURL.notCustomerCoupons}/>
                    </Route>
                    <Route exact path={ClientURL.companyCoupons}>
                        <CouponsView link={ServerURL.companyCoupons} />
                    </Route>
                    <Route exact path={ClientURL.addCoupon}>
                        <AddCoupon />
                    </Route>
                    <Route exact path={ClientURL.updateCoupon}>
                        <UpdateCoupon />
                    </Route>
                    <Route exact path={ClientURL.addCompany}>
                        <AddCompany />
                    </Route>
                    <Route exact path={ClientURL.updateCompany}>
                        <UpdateCompany />
                    </Route>
                    <Route exact path={ClientURL.addCustomer}>
                        <AddCustomer />
                    </Route>
                    <Route exact path={ClientURL.updateCustomer}>
                        <UpdateCustomer />
                    </Route>
                    <Route exact path={ClientURL.profileCustomer}>
                        <ProfileCustomer link={ServerURL.profileCustomer}/>
                    </Route>
                    <Route exact path={ClientURL.profileCompany}>
                        <ProfileCompany link={ServerURL.profileCompany}/>
                    </Route>
                    <Route exact path={ClientURL.buyCoupon + "/:id"}>
                        <BuyCoupon link={ServerURL.buyCoupon} />
                    </Route>
                    <Route path='*'>
                        <Page404 />
                    </Route>
                </Switch>
            </div>
            <div className="bottom">
                {isWarningActive && <PopUpMessage />}
            </div>
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