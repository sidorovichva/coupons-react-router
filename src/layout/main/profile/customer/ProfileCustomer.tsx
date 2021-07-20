import React from 'react';
import './ProfileCustomer.css';
import ProfileElement from "../../../../components/jsxComponents/profile/ProfileElement";
import {useQuery} from "react-query";
import FetchData from "../../../../components/logicComponents/FetchData";

interface Props {
    link: string
}

const ProfileCustomer: React.FC<Props> = ({link}): JSX.Element => {

    const {data: customer, status} = useQuery(
        ['getCustomer', link],
        () => FetchData(link),
        {retryDelay: 2000}
    );

    return (
        <div className="ProfileCustomer">
            {status === 'success' && <ProfileElement description="First Name" data={customer?.firstName} isChangeable={true}/>}
            {status === 'success' && <ProfileElement description="Last Name" data={customer?.lastName} isChangeable={true}/>}
            {status === 'success' && <ProfileElement description="E-mail" data={customer?.email} isChangeable={true}/>}
        </div>
    );
}

export default ProfileCustomer;