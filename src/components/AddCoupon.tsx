import React, {SyntheticEvent, useEffect, useState} from 'react';
import './AddCoupon.css';
import {useSelector} from "react-redux";
import useFetch from "../hooks/useFetch";
import {CategoryInt} from "../interfaces/CategoryInt";
import ConfigureStore from "../redux/StoreConfig";
import FormHeader from "./form/FormHeader";
import FormInput from "./form/FormInput";
import FormSubmit from "./form/FormSubmit";
import Add from "./main/actions/Add";

const AddCoupon = (): JSX.Element => {

    console.log("add coupon")

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
    }, [value, field]);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [link] = useState('/coupons');
    const [body, setBody] = useState('');

    const handleSubmit = (args: SyntheticEvent) => {
        args.preventDefault();
        setIsSubmitted(true);
        setBody(JSON.stringify({
            "category": {"id": category?.id, "name": category?.name},
            "title": couponTitle,
            "description": couponDescription,
            "startDate": couponStartDate,
            "endDate": couponEndDate,
            "amount": couponAmount,
            "price": couponPrice,
            "image": "imageToReplace"
        }));
    }

    return (
        <form className="AddCoupon" onSubmit={ handleSubmit }>
            <FormHeader title="Add Coupon" />
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
            <FormInput className="couponTitle" type="text" placeholder="title" />
            <FormInput className="couponDescription" type="text" placeholder="description" />
            <FormInput className="couponStartDate" type="date" />
            <FormInput className="couponEndDate" type="date" />
            <FormInput className="couponAmount" type="number" min={1}/>
            <FormInput className="couponPrice" type="number" min={1}/>
            <FormSubmit />
            {isSubmitted && <Add link={link} body={body} />}
        </form>
    );
}

export default AddCoupon;