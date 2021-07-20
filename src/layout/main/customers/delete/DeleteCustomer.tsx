import React from 'react';
import './DeleteCustomer.css';
import {useParams} from "react-router-dom";
import useHistoryPush from "../../../../hooks/useHistoryPush";
import {ClientURL} from "../../../../enums/ClientURL";
import useAxios from "../../../../hooks/axiosHooks/useAxios";
import {Axios} from "../../../../enums/Axios";

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

    useAxios(
        link + '/' + id,
        Axios.DELETE
    );

    return (
        <div className="DeleteCustomer">

        </div>
    );
}

export default DeleteCustomer;