import React from 'react';
import './CompaniesView.css';
import {CompanyInt} from "../../../interfaces/CompanyInt";
import CompanyRep from "../../../components/jsxComponents/main/beans/CompanyRep";
import useGet from "../../../hooks/axiosHooks/useGet";

interface Props {
    link: string
}

const CompaniesView: React.FC<Props> = ({link}): JSX.Element => {

    const { data: companies } = useGet(link);

    return (
        <div className="CompaniesView">
            {companies.map((company: CompanyInt) => (
                    <div key={ company.id }>
                        <CompanyRep {...company}/>
                    </div>
                )
            )}
        </div>
    );
};

export default CompaniesView;

// import React from 'react';
// import './CompaniesView.css';
// import {CompanyInt} from "../../interfaces/CompanyInt";
// import CompanyRep from "../../components/main/CompanyRep";
//
// interface Props {
//     companies: []
// }
//
// const CompaniesView: React.FC<Props> = ({ companies}): JSX.Element => {
//
//     return (
//         <div className="CompaniesView">
//             {companies.map((company: CompanyInt) => (
//                     <div key={ company.id }>
//                         <CompanyRep {...company}/>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// }
//
// export default CompaniesView;