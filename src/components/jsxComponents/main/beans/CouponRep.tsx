import './CouponRep.css';
import {CouponInt} from "../../../../interfaces/CouponInt";
import {useLocation, Link} from "react-router-dom";
import ServerRequest from "../../../logicComponents/ServerRequest";
import {ServerURL} from "../../../../enums/ServerURL";
import {ClientURL} from "../../../../enums/ClientURL";
import DeleteBean from "../../../logicComponents/DeleteBean";
import UpdateBean from "../../../logicComponents/UpdateBean";
import useUniqueIndex from "../../../../hooks/useUniqueIndex";

const CouponRep = (coupon: CouponInt) => {

    const location = useLocation().pathname

    const { randomGenerator } = useUniqueIndex();

    const { handleUpdate } = UpdateBean(coupon);

    const { handleDelete, isToDelete, deleteLink, axiosDelete} = DeleteBean(
        coupon.id,
        ServerURL.deleteCoupon,
        ClientURL.companyCoupons,
        ClientURL.companyCoupons
    )

    return (
        isToDelete ? <ServerRequest method={axiosDelete} link={deleteLink} /> :
            //isToBuy ? <div></div> :
                <div className="CouponRep">
                    <div className="title">{coupon.title}</div>
                    <div className="description">{coupon.description}</div>
                    <div className="endDate">{coupon.endDate}</div>
                    <div className="price">{coupon.price}</div>
                    {(location === ClientURL.notCustomerCoupons || location === ClientURL.companyCoupons) && <div className="actions">
                        {location === ClientURL.notCustomerCoupons &&
                            <Link
                                className="Link"
                                to={ ClientURL.buyCoupon + `/${coupon.id}` }
                                onClick={ randomGenerator }
                            >Buy</Link>}
                        {location === ClientURL.companyCoupons &&
                            <Link
                                className="Link"
                                to={ ClientURL.updateCoupon }
                                onClick={ handleUpdate }
                            >Update</Link>}
                        {location === ClientURL.companyCoupons &&
                            <div
                                className="delete"
                                onClick={ handleDelete }
                            >Delete</div>}
                    </div>}
                </div>
    );
}

export default CouponRep;

// import './CouponRep.css';
// import {CouponInt} from "../../../../interfaces/CouponInt";
// import {useLocation, Link} from "react-router-dom";
// import ServerRequest from "../../../logicComponents/ServerRequest";
// import {ServerURL} from "../../../../enums/ServerURL";
// import {ClientURL} from "../../../../enums/ClientURL";
// import DeleteBean from "../../../logicComponents/DeleteBean";
// import UpdateBean from "../../../logicComponents/UpdateBean";
// import BuyCoupon from "../../../logicComponents/BuyCoupon";
//
// const CouponRep = (coupon: CouponInt) => {
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
//                 <div className="CouponRep">
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
// export default CouponRep;