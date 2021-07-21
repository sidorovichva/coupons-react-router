import React from 'react';
import './ProfileCompany.css';
import ProfileElement from "../../../../components/jsxComponents/profile/ProfileElement";
import {useQuery} from "react-query";
import FetchData from "../../../../components/logicComponents/FetchData";
import {ReactQuery} from "../../../../enums/ReactQuery";

interface Props {
    link: string
}

const ProfileCompany: React.FC<Props> = ({link}): JSX.Element => {

    const {data: company, status} = useQuery(
        ['getCompany', link],
        () => FetchData(link),
        {retryDelay: ReactQuery.RETRY_DELAY}
    );

    return (
        <div className="ProfileCompany">
            {status === 'success' && <ProfileElement description="Title" data={company?.name} isChangeable={true}/>}
            {status === 'success' && <ProfileElement description="E-mail" data={company?.email} isChangeable={true}/>}
        </div>
    );
}

export default ProfileCompany;