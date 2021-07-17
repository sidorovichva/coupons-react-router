import React from 'react';
import './DeleteCompany.css';
import {useParams} from "react-router-dom";
import useHistoryPush from "../../../../hooks/useHistoryPush";
import {ClientURL} from "../../../../enums/ClientURL";
import {Method} from "axios";
import useAxios from "../../../../hooks/axiosHooks/useAxios";

interface Props {
    link: string,
}

const DeleteCompany: React.FC<Props> = ({
   link,
}) => {

    const { id } = useParams<{id?: string}>();

    useHistoryPush(
        ClientURL.allCompanies,
        ClientURL.allCompanies
    );

    const axiosMethod: Method = 'DELETE';

    useAxios(
        link + '/' + id,
        axiosMethod
    );

    return (
        <div className="DeleteCompany">

        </div>
    );
}

export default DeleteCompany;