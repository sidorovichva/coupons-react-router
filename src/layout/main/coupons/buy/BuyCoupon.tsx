import './BuyCoupon.css';
import {Method} from "axios";
import { useParams } from "react-router-dom";
import useAxios from "../../../../hooks/axiosHooks/useAxios";
import useHistoryPush from "../../../../hooks/useHistoryPush";
import {ClientURL} from "../../../../enums/ClientURL";
import React from "react";

interface Props {
    link: string,
}

const BuyCoupon: React.FC<Props> = ({
    link,
}) => {

    const { id } = useParams<{id?: string}>();

    useHistoryPush(
        ClientURL.notCustomerCoupons,
        ClientURL.notCustomerCoupons
    );

    const axiosMethod: Method = 'POST';

    useAxios(link, axiosMethod, id);

    return (
        <div className="BuyCoupon">

        </div>
    );
};

export default BuyCoupon;