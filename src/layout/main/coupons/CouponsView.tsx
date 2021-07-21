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
import {ReactQuery} from "../../../enums/ReactQuery";

interface Props {
    link: string
}

const CouponsView: React.FC<Props> = ({link}): JSX.Element => {

    const {data: coupons, status} = useQuery([link, link], () => FetchData(link), {
        retryDelay: ReactQuery.RETRY_DELAY,
        retry: 10
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
        setTitle(value1);
        setActiveParameter(value1 !== '' ? 1 : 0);
    }, [value1]);

    useEffect(() => {
        setDescription(value2);
        setActiveParameter(value2 !== '' ? 2 : 0);
    }, [value2]);

    useEffect(() => {
        setDate(value3);
        setActiveParameter(value3 !== '' ? 3 : 0);
    }, [value3]);

    useEffect(() => {
        setPrice(value4);
        setActiveParameter(value4 > 0 ? 4 : 0);
    }, [value4]);

    return (
        <div className="CouponsGeneral">
            {status === 'error' && <div className="message">Error...</div>}
            {status === 'loading' && <div className="message">Loading... If you just opened the site it can takes up to 20 sec to fetch information first time.
            This is happening because money wise the server side is uploaded on free Heroku server and it has to get to Up state after being in sleep mode. Thank you! </div>}
            {status === 'success' &&
                <CouponHeader
                    activeParameter={activeParameter}
                    field1={field1}
                    field2={field2}
                    field3={field3}
                    field4={field4}
                />}
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