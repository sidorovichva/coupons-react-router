import {useState} from "react";
import {ServerURL} from "../../enums/ServerURL";
import {ClientURL} from "../../enums/ClientURL";
import {Method} from "axios";
import useHistoryPush from "../../hooks/useHistoryPush";

const BuyCoupon = (
    id: number,
    link: string,
    pushSuccess: ClientURL,
    pushFail: ClientURL
) => {

    useHistoryPush(pushSuccess, pushFail);

    const axiosBuy: Method = "POST";

    const [isToBuy, setIsToBuy] = useState<boolean>(false);
    const [buyLink, setBuyLink] = useState<string>('');
    const [body, setBody] = useState('');

    const handleBuy = () => {
        setBody(JSON.stringify(id));
        setBuyLink(link);
        setIsToBuy(true);
    };

    return { handleBuy, isToBuy, buyLink, body, axiosBuy };
}

export default BuyCoupon;