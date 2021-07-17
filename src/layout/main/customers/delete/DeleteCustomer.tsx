import React from 'react';
import './DeleteCustomer.css';
import {useParams} from "react-router-dom";
import useHistoryPush from "../../../../hooks/useHistoryPush";
import {ClientURL} from "../../../../enums/ClientURL";
import {Method} from "axios";
import useAxios from "../../../../hooks/axiosHooks/useAxios";

interface Props {
    link: string,
}

const DeleteCustomer: React.FC<Props> = ({
                                            link,
                                        }) => {

    const { id } = useParams<{id?: string}>();

    useHistoryPush(
        ClientURL.allCustomers,
        ClientURL.allCustomers
    );

    const axiosMethod: Method = 'DELETE';

    useAxios(
        link + '/' + id,
        axiosMethod
    );

    return (
        <div className="DeleteCustomer">

        </div>
    );
}

export default DeleteCustomer;