import React, {useEffect, useState} from 'react';
import './CouponHeader.css';
import PriceFilter from "../filtering/PriceFilter";
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../../../redux/StoreConfig";
import {resetAll, resetPressEnter} from "../../../../redux/PressEnterSlice";
import DateFilter from "../filtering/DateFilter";
import TextFilter from "../filtering/TextFilter";

interface Props {
    activeParameter: number
}

const CouponHeader: React.FC<Props> = ({
   activeParameter
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
    };

    const handleDescriptionClick = () => {
        setDescription(!description);
        setEndDate(false);
        setTitle(false);
        setPrice(false);
    };

    const handleEndDateClick = () => {
        setEndDate(!endDate);
        setPrice(false);
        setTitle(false);
        setDescription(false);
    };

    const handlePriceClick = () => {
        setPrice(!price);
        setEndDate(false);
        setTitle(false);
        setDescription(false);
    };

    const handleResetAll = () => {
        dispatch(resetAll());
    };

    const doNothing = () => {};

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
                <svg viewBox="0 0 24 24" onClick={ handleTitleClick }>
                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
                </svg>
                <div
                    className="columnTitle"
                    style={activeParameter === 1 ? {
                        backgroundColor: "green",
                        color: "white"
                    } : {
                        backgroundColor: "inherit"
                    }}
                    onClick={ activeParameter === 1 ? handleResetAll : doNothing }
                >Title</div>
                {title && <TextFilter className="titleSearch"/>}
            </div>
            <div className="description">
                <svg viewBox="0 0 24 24" onClick={ handleDescriptionClick }>
                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
                </svg>
                <div
                    className="columnTitle"
                    style={activeParameter === 2 ? {
                        backgroundColor: "green",
                        color: "white"
                    } : {
                        backgroundColor: "inherit"
                    }}
                    onClick={ activeParameter === 2 ? handleResetAll : doNothing }
                >Description</div>
                {description && <TextFilter className="descriptionSearch"/>}
            </div>
            <div className="endDate">
                <svg viewBox="0 0 24 24" onClick={ handleEndDateClick }>
                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
                </svg>
                <div
                    className="columnTitle"
                    style={activeParameter === 3 ? {
                        backgroundColor: "green",
                        color: "white"
                    } : {
                        backgroundColor: "inherit"
                    }}
                    onClick={ activeParameter === 3 ? handleResetAll : doNothing }
                >Expiration</div>
                {endDate && <DateFilter className="endDateSearch"/>}
            </div>
            <div className="price">
                <svg viewBox="0 0 24 24" onClick={ handlePriceClick }>
                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
                </svg>
                <div
                    className="columnTitle"
                    style={activeParameter === 4 ? {
                        backgroundColor: "green",
                        color: "white"
                    } : {
                        backgroundColor: "inherit"
                    }}
                    onClick={ activeParameter === 4 ? handleResetAll : doNothing }
                >Price</div>
                {price && <PriceFilter className="maxPrice"/>}
            </div>
            <div className="actions">Actions</div>
        </div>
    );
}

export default CouponHeader;