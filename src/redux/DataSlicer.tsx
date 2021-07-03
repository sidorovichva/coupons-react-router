import { createSlice } from "@reduxjs/toolkit";

export const DataSlicer = createSlice({
    name: "DataSlicer",
    initialState: {
        userCoupons: [],
        allCoupons: []
    },
    reducers: {
        loadUserCoupons: (state, action) => {
            const { userCouponsArray } = action.payload;
            state.userCoupons = userCouponsArray;
        },
        loadAllCoupons: (state, action) => {
            const { allCouponsArray } = action.payload;
            state.userCoupons = allCouponsArray;
        },
        unloadUserData: (state) => {
            state.userCoupons = [];
        },
    }
});

export const {
    loadUserCoupons,
    loadAllCoupons,
    unloadUserData,
} = DataSlicer.actions;

export default DataSlicer.reducer;