import { createSlice } from "@reduxjs/toolkit";

export const UniqueIndexSlice = createSlice({
    name: "UniqueIndexSlice",
    initialState: {
        uniqueNumber: 0
    },
    reducers: {
        generateNumber: (state) => {
            state.uniqueNumber = Math.random();
        },
    }
});

export const {
    generateNumber,
} = UniqueIndexSlice.actions;

export default UniqueIndexSlice.reducer;