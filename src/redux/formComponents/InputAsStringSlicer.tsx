import { createSlice } from "@reduxjs/toolkit";

export const InputAsStringSlicer = createSlice({
    name: "InputAsStringSlicer",
    initialState: {
        value: '',
        field: ''
    },
    reducers: {
        use: (state, action) => {
            const { valueValue, fieldValue } = action.payload;
            state.value = valueValue;
            state.field = fieldValue;
        },
    }
});

export const {
    use
} = InputAsStringSlicer.actions;

export default InputAsStringSlicer.reducer;