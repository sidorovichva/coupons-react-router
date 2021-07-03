import { createSlice } from "@reduxjs/toolkit";

export const DropDownMenuSlice = createSlice({
    name: "DropDownMenuSlice",
    initialState: {
        title: 'coupons',
        //link: 'https://coupons-back-mysql-jwt.herokuapp.com',
        link: 'http://localhost:8080',
    },
    reducers: {
        categories: (state) => {
            state.title = 'categories';
            //state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/categories';},
            state.link = 'http://localhost:8080/categories';},
        companies: (state) => {
            state.title = 'companies';
            //state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/companies';},
            state.link = 'http://localhost:8080/companies';},
        customers: (state) => {
            state.title = 'customers';
            //state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/customers';},
            state.link = 'http://localhost:8080/customers';},
        coupons: (state) => {
            state.title = 'coupons';
            //state.link = 'https://coupons-back-mysql-jwt.herokuapp.com';},
            state.link = 'http://localhost:8080';},
        purchases: (state) => {
            state.title = 'purchases';
            //state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/purchases';},
            state.link = 'http://localhost:8080/purchases';},
    }
});

export const {
    categories,
    companies,
    customers,
    coupons,
    purchases
} = DropDownMenuSlice.actions;

export default DropDownMenuSlice.reducer;

// coupons: (state) => { state.title = 'coupons'; },