import { createSlice } from "@reduxjs/toolkit";

export const InputAsStringSlicer = createSlice({
    name: "InputAsStringSlicer",
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
} = InputAsStringSlicer.actions;

export default InputAsStringSlicer.reducer;