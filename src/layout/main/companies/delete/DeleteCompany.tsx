import React from 'react';
import './DeleteCompany.css';
import {useParams} from "react-router-dom";
import useHistoryPush from "../../../../hooks/useHistoryPush";
import {ClientURL} from "../../../../enums/ClientURL";
import useAxios from "../../../../hooks/axiosHooks/useAxios";
import {Axios} from "../../../../enums/Axios";

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

    useAxios(
        link + '/' + id,
        Axios.DELETE
    );

    return (
        <div className="DeleteCompany">

        </div>
    );
}

export default DeleteCompany;