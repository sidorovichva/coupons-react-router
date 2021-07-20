import React from 'react';
import './DeleteCoupon.css';
import {useParams} from "react-router-dom";
import useHistoryPush from "../../../../hooks/useHistoryPush";
import {ClientURL} from "../../../../enums/ClientURL";
import useAxios from "../../../../hooks/axiosHooks/useAxios";
import {Axios} from "../../../../enums/Axios";

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

    useAxios(
        link + '/' + id,
        Axios.DELETE
    );

    return (
        <div className="DeleteCoupon">

        </div>
    );
}

export default DeleteCoupon;