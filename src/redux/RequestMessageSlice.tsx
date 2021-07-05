import { createSlice } from "@reduxjs/toolkit";

export const RequestMessageSlice = createSlice({
    name: "RequestMessageSlice",
    initialState: {
        requestMessage: null
    },
    reducers: {
        setRequestMessage: (state, action) => {
            const { messageValue } = action.payload;
            state.requestMessage = messageValue;
        },
        resetRequestMessage: (state) => {
            state.requestMessage = null;
        },
    }
});

export const {
    setRequestMessage,
    resetRequestMessage
} = RequestMessageSlice.actions;

export default RequestMessageSlice.reducer;