import React from 'react';
import './FooterCell.css'
import useSavedUsers from "../../hooks/useSavedUsers";

interface Props {
    className: string
    num: number
}

const FooterCell: React.FC<Props> = ({
    className,
    num
}) => {

    const user = useSavedUsers(num)

    return (
        <div className={className}>
            <div>{user.title}</div>
            <div>user:"{user.email}"</div>
            <div>pass:"{user.pass}"</div>
        </div>
    );
};

export default FooterCell;