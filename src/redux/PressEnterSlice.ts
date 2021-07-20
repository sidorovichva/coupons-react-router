import { createSlice } from "@reduxjs/toolkit";

export const PressEnterSlice = createSlice({
    name: "PressEnterSlice",
    initialState: {
        all: false,
        titleField: false,
        descriptionField: false,
        priceField: false,
        endDateField: false
    },
    reducers: {
        titleEntered: (state) => {
            state.titleField = true;
        },
        descriptionEntered: (state) => {
            state.descriptionField = true;
        },
        priceEntered: (state) => {
            state.priceField = true;
        },
        endDateEntered: (state) => {
            state.endDateField = true;
        },
        resetAll: (state) => {
            state.all = true;
            state.titleField = false;
            state.descriptionField = false;
            state.priceField = false;
            state.endDateField = false;
        },
        resetPressEnter: (state) => {
            state.all = false;
            state.titleField = false;
            state.descriptionField = false;
            state.priceField = false;
            state.endDateField = false;
        },
    }
});

export const {
    titleEntered,
    descriptionEntered,
    priceEntered,
    endDateEntered,
    resetAll,
    resetPressEnter
} = PressEnterSlice.actions;

export default PressEnterSlice.reducer;