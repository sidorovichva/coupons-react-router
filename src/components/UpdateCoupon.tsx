import React, {SyntheticEvent, useEffect, useState} from 'react';
import './UpdateCoupon.css';
import {useSelector} from "react-redux";
import useFetch from "../hooks/useFetch";
import {CategoryInt} from "../interfaces/CategoryInt";
import ConfigureStore from "../redux/StoreConfig";
import FormHeader from "./form/FormHeader";
import FormSubmit from "./form/FormSubmit";
import {CouponInt} from "../interfaces/CouponInt";
import FormInputOptional from "./form/FormInputOptional";
import Update from "./main/actions/Update";

interface Props {
    coupon: CouponInt
}

const UpdateCoupon: React.FC<Props> = ({ coupon}): JSX.Element => {

    const { value, field } = useSelector((state) => ConfigureStore.getState().InputAsStringSlicer);

    const { data: array } = useFetch('/categories');

    const [category, setCategory] = useState<CategoryInt>();
    const [couponTitle, setCouponTitle] = useState('');
    const [couponDescription, setCouponDescription] = useState('');
    const [couponStartDate, setCouponStartDate] = useState('');
    const [couponEndDate, setCouponEndDate] = useState('');
    const [couponAmount, setCouponAmount] = useState('');
    const [couponPrice, setCouponPrice] = useState('');

    useEffect(() => {
        if (field === 'couponTitle') setCouponTitle(value);
        if (field === 'couponDescription') setCouponDescription(value);
        if (field === 'couponStartDate') setCouponStartDate(value);
        if (field === 'couponEndDate') setCouponEndDate(value);
        if (field === 'couponAmount') setCouponAmount(value);
        if (field === 'couponPrice') setCouponPrice(value);
    }, [value, field])

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [link] = useState('/coupons');
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setIsSubmitted(true)
        console.log(category)
        setBody(JSON.stringify({
                "id": coupon.id,
                "category": category === undefined ? coupon.category : {"id": category?.id, "name": category?.name},
                "title": couponTitle === '' ? coupon.title : couponTitle,
                "description": couponDescription === '' ? coupon.description : couponDescription,
                "startDate": couponStartDate === '' ? coupon.startDate : couponStartDate,
                "endDate": couponEndDate === '' ? coupon.endDate : couponEndDate,
                "amount": couponAmount === '' ? coupon.amount : couponAmount,
                "price": couponPrice === '' ? coupon.price : couponPrice,
                "image": "imageToReplace"
            })
        );
    }

    return (
        <form className="UpdateCoupon" onSubmit={ handleSubmit }>
            <FormHeader title="Update Coupon" />
            <div className="selector">
                <select
                    className="categories"
                    onChange={(e) => (setCategory(JSON.parse(e.target.value)))}
                >
                    {array.map((category: CategoryInt) => (
                        <option key={category.id} value={JSON.stringify(category)}>{category.name}</option>
                    ))};
                </select>
            </div>
            <FormInputOptional className="couponTitle" type="text" placeholder="title"/>
            <FormInputOptional className="couponDescription" type="text" placeholder="description"/>
            <FormInputOptional className="couponStartDate" type="date"/>
            <FormInputOptional className="couponEndDate" type="date"/>
            <FormInputOptional className="couponAmount" type="number" min={1}/>
            <FormInputOptional className="couponPrice" type="number" min={1}/>
            <FormSubmit />
            {isSubmitted && <Update link={link} body={body} />}
        </form>
    );
}

export default UpdateCoupon;