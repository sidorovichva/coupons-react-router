import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: "LoginSlice",
    initialState: {
        userData: 'http://localhost:8080/user',
        //isPushed: false,
        //isLoggedIn: false,
        email: localStorage.getItem("Username") !== null ? localStorage.getItem("Username") : '',
        role: localStorage.getItem("Role") !== null ? localStorage.getItem("Role") : '',
    },
    reducers: {
        // pushTheButton: (state) => {
        //     state.isPushed =  !state.isPushed;
        // },
        authorize: (state, action) => {
            const { emailValue, roleValue } = action.payload;
            //state.isLoggedIn =  true;
            state.email = emailValue;
            state.role = roleValue;
        },
        unAuthorize: (state) => {
            //state.isLoggedIn =  false;
            state.email = '';
            state.role = '';
        },
    }
});

export const {
    //pushTheButton,
    authorize,
    unAuthorize
} = LoginSlice.actions;

export default LoginSlice.reducer;