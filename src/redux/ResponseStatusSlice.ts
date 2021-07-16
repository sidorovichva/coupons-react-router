import { createSlice } from "@reduxjs/toolkit";

export const ResponseStatusSlice = createSlice({
    name: "ResponseStatusSlice",
    initialState: {
        isChanged: false,
        responseStatus: null,
        responseMessage: ''
    },
    reducers: {
        setResponseStatus: (state, action) => {
            const { responseStatusValue, responseMessageValue } = action.payload;
            state.isChanged = !state.isChanged;
            state.responseStatus = responseStatusValue;
            state.responseMessage = responseMessageValue;
        },
        resetResponseStatus: (state) => {
            state.responseStatus = null;
            state.responseMessage = '';
        }
    }
});

export const {
    setResponseStatus,
    resetResponseStatus,
} = ResponseStatusSlice.actions;

export default ResponseStatusSlice.reducer;