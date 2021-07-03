import { createSlice } from "@reduxjs/toolkit";

export const PopUpWindowsSlicer = createSlice({
    name: "PopUpWindowsSlicer",
    initialState: {
        loginWindow: false,
        registerWindow: false,
        addCompany: false,
        addCustomer: false,
        addCoupon: false,
        updateCoupon: false,
        buyCoupon: false,
    },
    reducers: {
        openWindow: (state, action) => {
            const { stateName } = action.payload;
            state.loginWindow = stateName === 'loginWindow';
            state.registerWindow = stateName === 'registerWindow';
            state.addCompany = stateName === 'addCompany';
            state.addCustomer = stateName === 'addCustomer';
            state.addCoupon = stateName === 'addCoupon';
            state.updateCoupon = stateName === 'updateCoupon';
            state.buyCoupon = stateName === 'buyCoupon';
        },
        closeWindow: (state) => {
            state.loginWindow = false;
            state.registerWindow = false;
            state.addCompany = false;
            state.addCustomer = false;
            state.addCoupon = false;
            state.updateCoupon = false;
            state.buyCoupon = false;
        }
    }
});

export const {
    openWindow,
    closeWindow
} = PopUpWindowsSlicer.actions;

export default PopUpWindowsSlicer.reducer;