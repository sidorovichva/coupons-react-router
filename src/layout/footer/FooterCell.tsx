import React from 'react';
import './FooterCell.css'

interface Props {
    className: string
    title: string
    email: string
    pass: string
}

const FooterCell: React.FC<Props> = ({
    className,
    title ,
    email,
    pass
}) => {

    return (
        <div className={className}>
            {/*{title}*/}
            {/*e-mail:"{email}"*/}
            {/*password:"{pass}"*/}
            <div>{title}</div>
            <div>e-mail:"{email}"</div>
            <div>password:"{pass}"</div>
        </div>
    );
};

export default FooterCell;