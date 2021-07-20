import './Coupon.css';
import {CouponInt} from "../../../../interfaces/CouponInt";
import {useLocation, Link} from "react-router-dom";
import {ClientURL} from "../../../../enums/ClientURL";
import UpdateBean from "../../../logicComponents/UpdateBean";

const Coupon = (coupon: CouponInt) => {

    const location = useLocation().pathname

    const { passBeanToUpdate } = UpdateBean(coupon);

    return (
        <div className="Coupon">
            <div className="title">{coupon.title}</div>
            <div className="description">{coupon.description}</div>
            <div className="endDate">{coupon.endDate}</div>
            <div className="price">{coupon.price}&nbsp;&#8362;</div>
            {(location === ClientURL.notCustomerCoupons || location === ClientURL.companyCoupons) && <div className="actions">
                {location === ClientURL.notCustomerCoupons &&
                    <Link
                        className="Link"
                        to={ ClientURL.buyCoupon + `/${coupon.id}` }
                    >Buy</Link>}
                {location === ClientURL.companyCoupons &&
                    <Link
                        className="Link"
                        to={ ClientURL.updateCoupon }
                        onClick={ passBeanToUpdate }
                    >Update</Link>}
                {location === ClientURL.companyCoupons &&
                    <Link
                        className="Link"
                        to={ ClientURL.deleteCoupon + `/${coupon.id}` }
                    >Delete</Link>}
            </div>}
        </div>
    );
}

export default Coupon;

// import './Coupon.css';
// import {CouponInt} from "../../../../interfaces/CouponInt";
// import {useLocation, Link} from "react-router-dom";
// import ServerRequest from "../../../logicComponents/ServerRequest";
// import {ServerURL} from "../../../../enums/ServerURL";
// import {ClientURL} from "../../../../enums/ClientURL";
// import DeleteBean from "../../../logicComponents/DeleteBean";
// import UpdateBean from "../../../logicComponents/UpdateBean";
// import BuyCoupon from "../../../logicComponents/BuyCoupon";
//
// const Coupon = (coupon: CouponInt) => {
//
//     const location = useLocation().pathname
//
//     const { handleBuy, isToBuy, buyLink, body, axiosBuy} = BuyCoupon(
//         coupon.id,
//         ServerURL.buyCoupon,
//         // ClientURL.notCustomerCoupons,
//         // ClientURL.notCustomerCoupons
//         ClientURL.allCoupons,
//         ClientURL.allCoupons
//     )
//
//     const { handleUpdate } = UpdateBean(coupon);
//
//     const { handleDelete, isToDelete, deleteLink, axiosDelete} = DeleteBean(
//         coupon.id,
//         ServerURL.deleteCoupon,
//         ClientURL.companyCoupons,
//         ClientURL.companyCoupons
//     )
//
//     return (
//         isToDelete ? <ServerRequest method={axiosDelete} link={deleteLink} /> :
//             isToBuy ? <ServerRequest method={axiosBuy} link={buyLink} body={body} /> :
//                 <div className="Coupon">
//                     <div className="title">{coupon.title}</div>
//                     <div className="description">{coupon.description}</div>
//                     <div className="endDate">{coupon.endDate}</div>
//                     <div className="price">{coupon.price}</div>
//                     {(location === ClientURL.notCustomerCoupons || location === ClientURL.companyCoupons) && <div className="actions">
//                         {location === ClientURL.notCustomerCoupons && <div className="buy" onClick={ handleBuy }>Buy</div>}
//                         {/*{role === 'COMPANY' && <div className="update" onClick={handleUpdate}>Update</div>}*/}
//                         {/*{role === 'COMPANY' && <Link className="Link" to={`/update_coupon/${coupon.id}`} onClick={handleUpdate}>Update</Link>}*/}
//                         {/*{role === 'COMPANY' && <Link className="Link" to={'/update_coupon/' + coupon.id}  onClick={handleUpdate}>Update</Link>}*/}
//                         {location === ClientURL.companyCoupons && <Link className="Link" to={ ClientURL.updateCoupon } onClick={ handleUpdate }>Update</Link>}
//                         {location === ClientURL.companyCoupons && <div className="delete" onClick={ handleDelete }>Delete</div>}
//                     </div>}
//                     {/*{isToBuy && <Add link={buyLink} body={body} />}*/}
//                     {/*{isToBuy && <ServerRequest method={axiosBuy} link={buyLink} body={body} />}*/}
//                     {/*{updateCoupon && <UpdateCoupon coupon={ coupon } />}*/}
//                     {/*{isToDelete && <Delete link={deleteLink} />}*/}
//                     {/*{isToDelete && <ServerRequest method={axiosDelete} link={deleteLink} />}*/}
//                 </div>
//     );
// }
//
// export default Coupon;