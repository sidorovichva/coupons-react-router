import React from 'react';
import './CompaniesView.css';
import {CompanyInt} from "../../../interfaces/CompanyInt";
import CompanyRep from "../../../components/jsxComponents/main/beans/CompanyRep";
import {useQuery} from "react-query";
import FetchData from "../../../components/logicComponents/FetchData";

interface Props {
    link: string
}

const CompaniesView: React.FC<Props> = ({link}): JSX.Element => {

    const { data: companies, status } = useQuery([link, link], () => FetchData(link), {
        retryDelay: 10000
    });

    return (
        <div className="CompaniesView">
            {status === 'error' && <div>Error...</div>}
            {status === 'loading' && <div>Loading...</div>}
            {status === 'success' && companies.map((company: CompanyInt) => (
                    <div key={ company.id }>
                        <CompanyRep {...company}/>
                    </div>
                )
            )}
        </div>
    );
};

export default CompaniesView;