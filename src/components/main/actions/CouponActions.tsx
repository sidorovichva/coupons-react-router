import React, {SyntheticEvent, useState} from 'react';
import './ActionBar.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../../redux/StoreConfig";
import {CouponInt} from "../../../interfaces/CouponInt";
import {sendRequest} from "../../../redux/AxiosSlicer";
import {openWindow} from "../../../redux/PopUpWindowsSlicer";
import UpdateCoupon from "../../UpdateCoupon";

const ActionBar = (coupon: CouponInt): JSX.Element => {

    const {role} = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const { updateCoupon } = useSelector((state) => ConfigureStore.getState().PopUpWindowsSlicer);
    const dispatch = useDispatch();

    const [bought, setBought] = useState<boolean>(false);
    const [deleted, setDeleted] = useState<boolean>(false);

    const handleBuy = (args: SyntheticEvent) => {
        args.preventDefault();
        dispatch(sendRequest({
            linkValue: '/purchases',
            methodValue: 'POST',
            bodyValue: JSON.stringify(coupon.id)
        }));
        setBought(true);
    };

    const handleUpdate = () => {
        dispatch(openWindow({stateName: 'updateCoupon'}))
    }

    const handleDelete = (args: SyntheticEvent) => {
        args.preventDefault();
        dispatch(sendRequest({
            linkValue: '/coupons/' + coupon.id,
            methodValue: 'DELETE',
            bodyValue: ''
        }));
        setDeleted(true);
    };

    return (
        <div className="ActionBar">
            {role === 'CUSTOMER' && !bought && <div className="buy" onClick={handleBuy}>Buy</div>}
            {role === 'COMPANY' && <div className="update" onClick={handleUpdate}>Update</div>}
            {role === 'COMPANY' && !deleted && <div className="delete" onClick={handleDelete}>Delete</div>}
            {updateCoupon && <UpdateCoupon coupon={ coupon } />}
        </div>
    );
}

export default ActionBar;