import { createSlice } from "@reduxjs/toolkit";

export const RequestErrorSlice = createSlice({
    name: "RequestErrorSlice",
    initialState: {
        requestError: ''
    },
    reducers: {
        setRequestError: (state, action) => {
            const { errorValue } = action.payload;
            state.requestError = errorValue;
        },
        resetRequestError: (state) => {
            state.requestError = '';
        },
    }
});

export const {
    setRequestError,
    resetRequestError
} = RequestErrorSlice.actions;

export default RequestErrorSlice.reducer;