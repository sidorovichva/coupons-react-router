import React from 'react';
import './ProfileCustomer.css';
import ProfileElement from "../../../../components/jsxComponents/profile/ProfileElement";
import useGet from "../../../../hooks/axiosHooks/useGet";

interface Props {
    link: string
}

const ProfileCustomer: React.FC<Props> = ({link}): JSX.Element => {

    const { customerObject: customer } = useGet(link)

    return (
        <div className="ProfileCustomer">
            <ProfileElement description="First Name" data={customer?.firstName} isChangeable={true}/>
            <ProfileElement description="Last Name" data={customer?.lastName} isChangeable={true}/>
            <ProfileElement description="E-mail" data={customer?.email} isChangeable={true}/>
        </div>
    );
}

export default ProfileCustomer;