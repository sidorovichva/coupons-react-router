import { createSlice } from "@reduxjs/toolkit";

export const InputSlice = createSlice({
    name: "InputSlice",
    initialState: {
        textInput: '',
        numericInput: 0.00,
        field: '',
        matches: false
    },
    reducers: {
        setTextValue: (state, action) => {
            const { textInputValue, fieldValue, matchesValue } = action.payload;
            state.textInput = textInputValue;
            state.field = fieldValue;
            state.matches = matchesValue;
        },
        setNumericValue: (state, action) => {
            const { numericInputValue, fieldValue, matchesValue } = action.payload;
            state.numericInput = numericInputValue;
            state.field = fieldValue;
            state.matches = matchesValue;
        },
    }
});

export const {
    setTextValue,
    setNumericValue,
} = InputSlice.actions;

export default InputSlice.reducer;