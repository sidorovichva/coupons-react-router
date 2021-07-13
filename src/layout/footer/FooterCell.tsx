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
            <div>e-mail:"{user.email}"</div>
            <div>password:"{user.pass}"</div>
        </div>
    );
};

export default FooterCell;

// import React from 'react';
// import './FooterCell.css'
// import useSavedUsres from "../../hooks/useSavedUsres";
//
// interface Props {
//     className: string
//     title: string
//     email: string
//     pass: string
//     num: number
// }
//
// const FooterCell: React.FC<Props> = ({
//                                          className,
//                                          title ,
//                                          email,
//                                          pass,
//                                          num
//                                      }) => {
//
//     const user = useSavedUsres(num)
//
//     return (
//         <div className={className}>
//             <div>{user.title}</div>
//             <div>e-mail:"{user.email}"</div>
//             <div>password:"{user.pass}"</div>
//         </div>
//     );
// };
//
// export default FooterCell;