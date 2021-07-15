import './CouponRep.css';
import {CouponInt} from "../../../../interfaces/CouponInt";
import {useLocation, Link} from "react-router-dom";
import ServerRequest from "../../../logicComponents/ServerRequest";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";
import DeleteBean from "../../../logicComponents/DeleteBean";
import UpdateBean from "../../../logicComponents/UpdateBean";
import BuyCoupon from "../../../logicComponents/BuyCoupon";

const CouponRep = (coupon: CouponInt) => {

    const location = useLocation().pathname

    const { handleBuy, isToBuy, buyLink, body, axiosBuy} = BuyCoupon(
        coupon.id,
        ServerURL.buyCoupon,
        ClientURL.notCustomerCoupons,
        ClientURL.notCustomerCoupons
    )

    const { handleUpdate } = UpdateBean(coupon);

    const { handleDelete, isToDelete, deleteLink, axiosDelete} = DeleteBean(
        coupon.id,
        ServerURL.deleteCoupon,
        ClientURL.companyCoupons,
        ClientURL.companyCoupons
    )

    return (
        isToDelete ? <ServerRequest method={axiosDelete} link={deleteLink} /> :
            isToBuy ? <ServerRequest method={axiosBuy} link={buyLink} body={body} /> :
                <div className="CouponRep">
                    <div className="title">{coupon.title}</div>
                    <div className="description">{coupon.description}</div>
                    <div className="endDate">{coupon.endDate}</div>
                    <div className="price">{coupon.price}</div>
                    {(location === ClientURL.notCustomerCoupons || location === ClientURL.companyCoupons) && <div className="actions">
                        {location === ClientURL.notCustomerCoupons && <div className="buy" onClick={ handleBuy }>Buy</div>}
                        {/*{role === 'COMPANY' && <div className="update" onClick={handleUpdate}>Update</div>}*/}
                        {/*{role === 'COMPANY' && <Link className="Link" to={`/update_coupon/${coupon.id}`} onClick={handleUpdate}>Update</Link>}*/}
                        {/*{role === 'COMPANY' && <Link className="Link" to={'/update_coupon/' + coupon.id}  onClick={handleUpdate}>Update</Link>}*/}
                        {location === ClientURL.companyCoupons && <Link className="Link" to={ ClientURL.updateCoupon } onClick={ handleUpdate }>Update</Link>}
                        {location === ClientURL.companyCoupons && <div className="delete" onClick={ handleDelete }>Delete</div>}
                    </div>}
                    {/*{isToBuy && <Add link={buyLink} body={body} />}*/}
                    {/*{isToBuy && <ServerRequest method={axiosBuy} link={buyLink} body={body} />}*/}
                    {/*{updateCoupon && <UpdateCoupon coupon={ coupon } />}*/}
                    {/*{isToDelete && <Delete link={deleteLink} />}*/}
                    {/*{isToDelete && <ServerRequest method={axiosDelete} link={deleteLink} />}*/}
                </div>
    );
}

export default CouponRep;

// import './CouponRep.css';
// import {CouponInt} from "../../interfaces/CouponInt";
// import {useDispatch, useSelector} from "react-redux";
// import ConfigureStore from "../../redux/StoreConfig";
// import React, {useState} from "react";
// import Delete from "./actions/Delete";
// import Add from "./actions/Add";
// import {useLocation, useHistory, Link} from "react-router-dom";
// import {setCouponBean} from "../../redux/UpdateBeanSlice";
//
// const CouponRep = (coupon: CouponInt) => {
//
//     const location = useLocation().pathname
//
//     const {role} = useSelector((state) => ConfigureStore.getState().LoginSlice);
//     const dispatch = useDispatch();
//
//     // const { updateCoupon } = useSelector((state) => ConfigureStore.getState().PopUpWindowsSlicer);
//     // const { title } = useSelector((state) => ConfigureStore.getState().MainScreenSlicer);
//     // const dispatch = useDispatch();
//
//     const history = useHistory();
//
//     const [isToBuy, setIsToBuy] = useState<boolean>(false);
//     const [buyLink] = useState('/purchases');
//     const [body, setBody] = useState('');
//
//     const handleBuy = () => {
//         setBody(JSON.stringify(coupon.id));
//         setIsToBuy(true);
//         history.go(0);
//     };
//
//     const handleUpdate = () => {
//         dispatch(setCouponBean({
//             couponBeanValue: coupon
//         }))
//     }
//
//     const [isToDelete, setIsToDelete] = useState<boolean>(false);
//     const [linkToDelete] = useState('/coupons');
//     const [deleteLink, setDeleteLink] = useState<string>('');
//
//     const handleDelete = () => {
//         setDeleteLink(linkToDelete + '/' + coupon.id);
//         setIsToDelete(true);
//         history.go(0);
//     }
//
//     return (
//         //deleted ? <div></div> :
//         <div className="CouponRep">
//             <div className="title">{coupon.title}</div>
//             <div className="description">{coupon.description}</div>
//             <div className="endDate">{coupon.endDate}</div>
//             <div className="price">{coupon.price}</div>
//             <div className="actions">
//                 {location === '/customer_coupons/not' && <div className="buy" onClick={handleBuy}>Buy</div>}
//                 {/*{role === 'COMPANY' && <div className="update" onClick={handleUpdate}>Update</div>}*/}
//                 {/*{role === 'COMPANY' && <Link className="Link" to={`/update_coupon/${coupon.id}`} onClick={handleUpdate}>Update</Link>}*/}
//                 {/*{role === 'COMPANY' && <Link className="Link" to={'/update_coupon/' + coupon.id}  onClick={handleUpdate}>Update</Link>}*/}
//                 {role === 'COMPANY' && <Link className="Link" to='/update_coupon' onClick={handleUpdate}>Update</Link>}
//                 {role === 'COMPANY' && <div className="delete" onClick={ handleDelete }>Delete</div>}
//             </div>
//             {isToBuy && <Add link={buyLink} body={body} />}
//             {/*{updateCoupon && <UpdateCoupon coupon={ coupon } />}*/}
//             {isToDelete && <Delete link={deleteLink} />}
//         </div>
//     );
// }
//
// export default CouponRep;