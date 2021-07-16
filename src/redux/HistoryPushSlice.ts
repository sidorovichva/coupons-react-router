import { createSlice } from "@reduxjs/toolkit";

export const HistoryPushSlice = createSlice({
    name: "HistoryPushSlice",
    initialState: {
        historyPushSuccess: '',
        historyPushFail: '',
    },
    reducers: {
        setHistoryPushLink: (state, action) => {
            const { historyPushSuccessValue, historyPushFailValue } = action.payload;
            state.historyPushSuccess = historyPushSuccessValue;
            state.historyPushFail = historyPushFailValue;
        },
        resetHistoryPush: (state) => {
            state.historyPushSuccess = '';
            state.historyPushFail = '';
        },
    }
});

export const {
    setHistoryPushLink,
    resetHistoryPush
} = HistoryPushSlice.actions;

export default HistoryPushSlice.reducer;