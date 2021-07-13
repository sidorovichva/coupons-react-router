import { createSlice } from "@reduxjs/toolkit";

export const DataStorageSlice = createSlice({
    name: "DataStorageSlice",
    initialState: {
        couponsStorage: [],
        companiesStorage: [],
        customersStorage: [],
    },
    reducers: {
        updateCoupons: (state, action) => {
            const { couponStorageValue } = action.payload;
            state.couponsStorage = couponStorageValue;
        },
        updateCompanies: (state, action) => {
            const { companiesStorageValue } = action.payload;
            state.companiesStorage = companiesStorageValue;
        },
        updateCustomers: (state, action) => {
            const { customersStorageValue } = action.payload;
            state.customersStorage = customersStorageValue;
        },
    }
});

export const {
    updateCoupons,
    updateCompanies,
    updateCustomers
} = DataStorageSlice.actions;

export default DataStorageSlice.reducer;