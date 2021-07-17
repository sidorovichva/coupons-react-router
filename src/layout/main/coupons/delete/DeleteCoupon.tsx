import React from 'react';
import './DeleteCoupon.css';
import {useParams} from "react-router-dom";
import useHistoryPush from "../../../../hooks/useHistoryPush";
import {ClientURL} from "../../../../enums/ClientURL";
import {Method} from "axios";
import useAxios from "../../../../hooks/axiosHooks/useAxios";

interface Props {
    link: string,
}

const DeleteCoupon: React.FC<Props> = ({
    link,
}) => {

    const { id } = useParams<{id?: string}>();

    useHistoryPush(
        ClientURL.companyCoupons,
        ClientURL.companyCoupons
    );

    const axiosMethod: Method = 'DELETE';

    useAxios(
        link + '/' + id,
        axiosMethod
    );

    return (
        <div className="DeleteCoupon">

        </div>
    );
}

export default DeleteCoupon;