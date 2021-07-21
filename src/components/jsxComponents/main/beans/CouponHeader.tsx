import React, {useEffect, useState} from 'react';
import './CouponHeader.css';
import PriceFilter from "../filtering/PriceFilter";
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import {resetAll, resetPressEnter} from "../../../../redux/PressEnterSlice";
import DateFilter from "../filtering/DateFilter";
import TextFilter from "../filtering/TextFilter";
import ArrowDown from "../../icons/ArrowDown";
import ColumnTitle from "./header/ColumnTitle";

interface Props {
    activeParameter: number,
    field1: string,
    field2: string,
    field3: string,
    field4: string
}

const CouponHeader: React.FC<Props> = ({
    activeParameter,
    field1,
    field2,
    field3,
    field4
}): JSX.Element => {

    const { titleField, descriptionField, priceField, endDateField } = useSelector((state) => ConfigureStore.getState().PressEnterSlice);

    const [title, setTitle] = useState(false);
    const [description, setDescription] = useState(false);
    const [endDate, setEndDate] = useState(false);
    const [price, setPrice] = useState(false);

    const dispatch = useDispatch();

    const handleTitleClick = () => {
        setTitle(!title);
        setPrice(false);
        setEndDate(false);
        setDescription(false);
    }

    const handleDescriptionClick = () => {
        setDescription(!description);
        setEndDate(false);
        setTitle(false);
        setPrice(false);
    }

    const handleEndDateClick = () => {
        setEndDate(!endDate);
        setPrice(false);
        setTitle(false);
        setDescription(false);
    }

    const handlePriceClick = () => {
        setPrice(!price);
        setEndDate(false);
        setTitle(false);
        setDescription(false);
    }

    const handleResetAll = () => {
        dispatch(resetAll());
    }

    useEffect(() => {
        setTitle(false);
        dispatch(resetPressEnter());
    }, [titleField]);

    useEffect(() => {
        setPrice(false);
        dispatch(resetPressEnter());
    }, [priceField]);

    useEffect(() => {
        setEndDate(false);
        dispatch(resetPressEnter());
    }, [endDateField]);

    useEffect(() => {
        setDescription(false);
        dispatch(resetPressEnter());
    }, [descriptionField]);

    return (
        <div className="CouponHeader">
            <div className="title">
                <ArrowDown func={ handleTitleClick }/>
                <ColumnTitle func={ handleResetAll } text="Title" number={1} activeParam={activeParameter} />
                {title && <TextFilter className={field1}/>}
            </div>
            <div className="description">
                <ArrowDown func={ handleDescriptionClick }/>
                <ColumnTitle func={ handleResetAll } text="Description" number={2} activeParam={activeParameter} />
                {description && <TextFilter className={field2}/>}
            </div>
            <div className="endDate">
                <ArrowDown func={ handleEndDateClick }/>
                <ColumnTitle func={ handleResetAll } text="Expiration" number={3} activeParam={activeParameter} />
                {endDate && <DateFilter className={field3}/>}
            </div>
            <div className="price">
                <ArrowDown func={ handlePriceClick }/>
                <ColumnTitle func={ handleResetAll } text="Price" number={4} activeParam={activeParameter} />
                {price && <PriceFilter className={field4}/>}
            </div>
            <div className="actions">Actions</div>
        </div>
    );
}

export default CouponHeader;