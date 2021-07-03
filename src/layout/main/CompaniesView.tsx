import React from 'react';
import './CompaniesView.css';
import {CompanyInt} from "../../interfaces/CompanyInt";
import CompanyRep from "../../components/main/CompanyRep";

interface Props {
    companies: []
}

const CompaniesView: React.FC<Props> = ({ companies}): JSX.Element => {

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
}

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