import { createSlice } from "@reduxjs/toolkit";
import {CompanyInt} from "../interfaces/CompanyInt";
import {CustomerInt} from "../interfaces/CustomerInt";
import {CouponInt} from "../interfaces/CouponInt";

export const UpdateBeanSlice = createSlice({
    name: "UpdateBeanSlice",
    initialState: {
        companyBean: {} as CompanyInt,
        customerBean: {} as CustomerInt,
        couponBean: {} as CouponInt
    },
    reducers: {
        setCompanyBean: (state, action) => {
            const { companyBeanValue } = action.payload;
            state.companyBean = companyBeanValue;
        },
        setCustomerBean: (state, action) => {
            const { customerBeanValue } = action.payload;
            state.customerBean = customerBeanValue;
        },
        setCouponBean: (state, action) => {
            const { couponBeanValue } = action.payload;
            state.couponBean = couponBeanValue;
        },
    }
});

export const {
    setCompanyBean,
    setCustomerBean,
    setCouponBean
} = UpdateBeanSlice.actions;

export default UpdateBeanSlice.reducer;