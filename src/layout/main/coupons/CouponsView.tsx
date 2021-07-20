import React, {useEffect, useState} from "react";
import {CouponInt} from "../../../interfaces/CouponInt";
import Coupon from "../../../components/jsxComponents/main/beans/Coupon";
import './CouponsView.css'
import {useQuery} from "react-query";
import FetchData from "../../../components/logicComponents/FetchData";
import CouponHeader from "../../../components/jsxComponents/main/beans/CouponHeader";
import FormField from "../../../components/logicComponents/FormField";
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../../redux/StoreConfig";
import {resetPressEnter} from "../../../redux/PressEnterSlice";

interface Props {
    link: string
}

const CouponsView: React.FC<Props> = ({link}): JSX.Element => {

    const {data: coupons, status} = useQuery([link, link], () => FetchData(link), {
        retryDelay: 10000
    });

    const { all } = useSelector((state) => ConfigureStore.getState().PressEnterSlice);

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState('');

    const [activeParameter, setActiveParameter] = useState(0);

    useEffect(() => {
        if (all) {
            setActiveParameter(0);
            setTitle('');
            setDescription('');
            setDate('');
            setPrice(0);
            dispatch(resetPressEnter());
        }
    }, [all]);

    const field1 = 'titleSearch';
    const field2 = 'descriptionSearch';
    const field3 = 'endDateSearch';
    const field4 = 'maxPrice';

    const { textValue: value1 } = FormField(field1);
    const { textValue: value2 } = FormField(field2);
    const { textValue: value3 } = FormField(field3);
    const { numValue: value4 } = FormField(field4);

    useEffect(() => {
        if (value1 !== '') {
            setTitle(value1)
            setActiveParameter(1);
        }
    }, [value1]);

    useEffect(() => {
        if (value2 !== '') {
            setDescription(value2)
            setActiveParameter(2);
        }
    }, [value2]);

    useEffect(() => {
        if (value3 !== '') {
            setDate(value3)
            setActiveParameter(3);
        }
    }, [value3]);

    useEffect(() => {
        if (value4 > 0) {
            setPrice(value4);
            setActiveParameter(4);
        }
    }, [value4]);

    return (
        <div className="CouponsGeneral">
            {status === 'error' && <div className="message">Error...</div>}
            {status === 'loading' && <div className="message">Loading...</div>}
            {status === 'success' && <CouponHeader activeParameter={activeParameter}/>}
            {status === 'success' && coupons.map((coupon: CouponInt) => (
                <div key={coupon.id}>
                    {activeParameter === 0 && <Coupon {...coupon}/>}
                    {activeParameter === 1 && coupon.title.toLowerCase().includes(title) && <Coupon {...coupon}/>}
                    {activeParameter === 2 && coupon.description.toLowerCase().includes(description) && <Coupon {...coupon}/>}
                    {activeParameter === 3 && coupon.endDate <= date && <Coupon {...coupon}/>}
                    {activeParameter === 4 && coupon.price <= price && <Coupon {...coupon}/>}
                </div>)
            )}
        </div>
    );
}

export default CouponsView;

// import React, {useState} from "react";
// import {CouponInt} from "../../../interfaces/CouponInt";
// import Coupon from "../../../components/jsxComponents/main/beans/Coupon";
// import './CouponsView.css'
// import useGet from "../../../hooks/axiosHooks/useGet";
// import {useSelector} from "react-redux";
// import ConfigureStore from "../../../redux/StoreConfig";
//
// interface Props {
//     link: string
// }
//
// const CouponGeneral: React.FC<Props> = ({link}): JSX.Element => {
//
//     const { uniqueNumber } = useSelector((state) => ConfigureStore.getState().UniqueIndexSlice);
//
//     const { data: coupons } = useGet(link, uniqueNumber)
//
//     return (
//         <div className="CouponsGeneral">
//             {coupons.map((coupon: CouponInt) => (
//                     <div key={ coupon.id }>
//                         <Coupon {...coupon}/>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// }
//
// export default CouponGeneral;