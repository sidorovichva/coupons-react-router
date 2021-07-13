import React from 'react';
import './ProfileCompany.css';
import ProfileElement from "../../../../components/jsxComponents/profile/ProfileElement";
import useGet from "../../../../hooks/axiosHooks/useGet";

interface Props {
    link: string
}

const ProfileCompany: React.FC<Props> = ({link}): JSX.Element => {

    const { companyObject: company } = useGet(link)

    return (
        <div className="ProfileCompany">
            <ProfileElement description="Title" data={company?.name} isChangeable={true}/>
            <ProfileElement description="E-mail" data={company?.email} isChangeable={true}/>
        </div>
    );
}

export default ProfileCompany;