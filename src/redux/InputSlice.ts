import { createSlice } from "@reduxjs/toolkit";

export const InputSlice = createSlice({
    name: "InputSlice",
    initialState: {
        numericInput: 0.00,
        value: '',
        field: ''
    },
    reducers: {
        use: (state, action) => {
            const { valueValue, fieldValue } = action.payload;
            state.value = valueValue;
            state.field = fieldValue;
        },
        setNumericValue: (state, action) => {
            const { numericInputValue, fieldValue } = action.payload;
            state.numericInput = numericInputValue;
            state.field = fieldValue;
        },
    }
});

export const {
    use,
    setNumericValue
} = InputSlice.actions;

export default InputSlice.reducer;