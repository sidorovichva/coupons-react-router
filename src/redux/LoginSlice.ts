import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: "LoginSlice",
    initialState: {
        email: localStorage.getItem("Username") !== null ? localStorage.getItem("Username") : '',
        role: localStorage.getItem("Role") !== null ? localStorage.getItem("Role") : '',
    },
    reducers: {
        authorize: (state, action) => {
            const { emailValue, roleValue } = action.payload;
            state.email = emailValue;
            state.role = roleValue;
        },
        unAuthorize: (state) => {
            state.email = '';
            state.role = '';
        },
    }
});

export const {
    authorize,
    unAuthorize
} = LoginSlice.actions;

export default LoginSlice.reducer;