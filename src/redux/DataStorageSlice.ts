import { createSlice } from "@reduxjs/toolkit";
import {CouponInt} from "../interfaces/CouponInt";

export const DataStorageSlice = createSlice({
    name: "DataStorageSlice",
    initialState: {
        couponsStorage: [] as [],
        companiesStorage: [],
        customersStorage: [],
    },
    reducers: {
        storeCoupons: (state, action) => {
            const { couponStorageValue } = action.payload;
            state.couponsStorage = couponStorageValue;
        },
        storeCompanies: (state, action) => {
            const { companiesStorageValue } = action.payload;
            state.companiesStorage = companiesStorageValue;
        },
        storeCustomers: (state, action) => {
            const { customersStorageValue } = action.payload;
            state.customersStorage = customersStorageValue;
        },
        resetCoupons: (state) => {
            state.couponsStorage = [];
        },
        resetCompanies: (state) => {
            state.companiesStorage = [];
        },
        resetCustomers: (state) => {
            state.customersStorage = [];
        },
    }
});

export const {
    storeCoupons,
    storeCompanies,
    storeCustomers,
    resetCoupons,
    resetCompanies,
    resetCustomers
} = DataStorageSlice.actions;

export default DataStorageSlice.reducer;