import {useState} from "react";
import {ClientURL} from "../../enums/ClientURL";
import useHistoryPush from "../../hooks/useHistoryPush";

const BuyCoupon = (
    pushSuccess: ClientURL,
    pushFail: ClientURL
) => {

    // useHistoryPush(pushSuccess, pushFail);
    //
    // const [isToBuy, setIsToBuy] = useState<boolean>(false);
    //
    // const handleBuy = () => {
    //     setIsToBuy(true);
    // };
    //
    // return { handleBuy, isToBuy };
}

export default BuyCoupon;