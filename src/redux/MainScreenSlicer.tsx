import { createSlice } from "@reduxjs/toolkit";

export const MainScreenSlicer = createSlice({
    name: "MainScreenSlicer",
    initialState: {
        type: 'Coupon',
        title: 'Coupons',
        link: '',
    },
    reducers: {
        categories: (state) => {
            state.type = 'Category';
            state.title = 'Categories';
            state.link = '/categories';},
        companies: (state) => {
            state.type = 'Company';
            state.title = 'Companies';
            state.link = '/companies';},
        customers: (state) => {
            state.type = 'Customer';
            state.title = 'Customers';
            state.link = '/customers';},
        coupons: (state) => {
            state.type = 'Coupon';
            state.title = 'Coupons';
            state.link = '';},
        customerCoupons: (state) => {
            state.type = 'Coupon';
            state.title = 'My coupons';
            state.link = '/purchases';},
        nonCustomerCoupons: (state) => {
            state.type = 'Coupon';
            state.title = 'Buy a coupon';
            state.link = '/purchases/not';},
        companyCoupons: (state) => {
            state.type = 'Coupon';
            state.title = 'Issued coupons';
            state.link = '/coupons';},
        purchases: (state) => {
            state.type = 'Coupon';
            state.title = 'Purchases';
            state.link = '/purchases';},
        about: (state) => {
            state.type = 'About';
            state.title = 'About the project';
            state.link = '';},
        add_customer: (state) => {
            state.type = 'input';
            state.title = 'Register';},
    }
});

export const {
    categories,
    companies,
    customers,
    coupons,
    purchases,
    nonCustomerCoupons,
    customerCoupons,
    companyCoupons,
    about,
    add_customer
} = MainScreenSlicer.actions;

export default MainScreenSlicer.reducer;