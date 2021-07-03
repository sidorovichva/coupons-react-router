import { createSlice } from "@reduxjs/toolkit";

export const AxiosSlicer = createSlice({
    name: "AxiosSlicer",
    initialState: {
        isActive: false,
        link: '',
        method: '',
        body: '',
    },
    reducers: {
        sendRequest: (state, action) => {
            const { linkValue, methodValue, bodyValue } = action.payload;
            state.isActive = true;
            state.link = linkValue;
            state.method = methodValue;
            state.body = bodyValue;
        },
        reset: (state) => {
            state.isActive = false;
            state.link = '';
            state.method = '';
            state.body = '';
        },
    }
});

export const {
    sendRequest,
    reset
} = AxiosSlicer.actions;

export default AxiosSlicer.reducer;