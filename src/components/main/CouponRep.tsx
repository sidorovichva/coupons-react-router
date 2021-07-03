import './CouponRep.css';
import {CouponInt} from "../../interfaces/CouponInt";
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {useState} from "react";
import UpdateCoupon from "../UpdateCoupon";
import {openWindow} from "../../redux/PopUpWindowsSlicer";
import Delete from "./actions/Delete";
import Add from "./actions/Add";

const CouponRep = (coupon: CouponInt) => {

    console.log("       CouponRep " + coupon)

    const {role} = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const { updateCoupon } = useSelector((state) => ConfigureStore.getState().PopUpWindowsSlicer);
    const { title } = useSelector((state) => ConfigureStore.getState().MainScreenSlicer);
    const dispatch = useDispatch();

    const [bought, setBought] = useState<boolean>(false);
    //const [deleted, setDeleted] = useState<boolean>(false);

    const [isToBuy, setIsToBuy] = useState<boolean>(false);
    const [buyLink] = useState('/purchases');
    const [body, setBody] = useState('');

    const handleBuy = () => {
        setBody(JSON.stringify(coupon.id));
        setIsToBuy(true);
        setBought(true);
    };

    const handleUpdate = () => {
        dispatch(openWindow({stateName: 'updateCoupon'}))
    }

    const [isToDelete, setIsToDelete] = useState<boolean>(false);
    const [linkToDelete] = useState('/coupons');
    const [deleteLink, setDeleteLink] = useState<string>('');

    const handleDelete = () => {
        console.log("del")
        setDeleteLink(linkToDelete + '/' + coupon.id);
        setIsToDelete(true);
        //setDeleted(true);
    }

    return (
        //deleted ? <div></div> :
        <div className="CouponRep">
            <div className="title">{coupon.title}</div>
            <div className="description">{coupon.description}</div>
            <div className="endDate">{coupon.endDate}</div>
            <div className="price">{coupon.price}</div>
            <div className="actions">
                {role === 'CUSTOMER' && !bought && title !== 'My coupons' && <div className="buy" onClick={handleBuy}>Buy</div>}
                {role === 'COMPANY' && <div className="update" onClick={handleUpdate}>Update</div>}
                {role === 'COMPANY' && <div className="delete" onClick={ handleDelete }>Delete</div>}
            </div>
            {isToBuy && <Add link={buyLink} body={body} />}
            {updateCoupon && <UpdateCoupon coupon={ coupon } />}
            {isToDelete && <Delete link={deleteLink} />}
        </div>
    );
}

export default CouponRep;