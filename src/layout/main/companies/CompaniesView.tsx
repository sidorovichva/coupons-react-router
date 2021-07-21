import React from 'react';
import './CompaniesView.css';
import {CompanyInt} from "../../../interfaces/CompanyInt";
import Company from "../../../components/jsxComponents/main/beans/Company";
import {useQuery} from "react-query";
import FetchData from "../../../components/logicComponents/FetchData";
import {ReactQuery} from "../../../enums/ReactQuery";

interface Props {
    link: string
}

const CompaniesView: React.FC<Props> = ({link}): JSX.Element => {

    const { data: companies, status } = useQuery([link, link], () => FetchData(link), {
        retryDelay: ReactQuery.RETRY_DELAY
    });

    return (
        <div className="CompaniesView">
            {status === 'error' && <div>Error...</div>}
            {status === 'loading' && <div>Loading...</div>}
            {status === 'success' && companies.map((company: CompanyInt) => (
                    <div key={ company.id }>
                        <Company {...company}/>
                    </div>
                )
            )}
        </div>
    );
}

export default CompaniesView;