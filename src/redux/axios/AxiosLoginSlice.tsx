import { createSlice } from "@reduxjs/toolkit";

export const AxiosLoginSlice = createSlice({
    name: "AxiosLoginSlice",
    initialState: {
        body: '',
    },
    reducers: {
        login: (state, action) => {
            const { bodyValue } = action.payload;
            state.body = bodyValue;
        },
        resetLogin: (state) => {
            state.body = '';
        },
    }
});

export const {
    login,
    resetLogin
} = AxiosLoginSlice.actions;

export default AxiosLoginSlice.reducer;