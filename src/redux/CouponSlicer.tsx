import { createSlice } from "@reduxjs/toolkit";

export const CouponSlicer = createSlice({
    name: "CouponSlicer",
    initialState: {
        category: {"id": 0, "name": ''},
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        amount: '',
        price: '',
        image: "imageToReplace"
    },
    reducers: {
        couponInitialState: (state, action) => {
            const {
                categoryValue,
                titleValue,
                descriptionValue,
                startDateValue,
                endDateValue,
                amountValue,
                priceValue,
                imageValue
            } = action.payload;
            state.category = categoryValue;
            state.title = titleValue;
            state.description = descriptionValue;
            state.startDate = startDateValue;
            state.endDate = endDateValue;
            state.amount = amountValue;
            state.price = priceValue;
            state.image = imageValue;
        },
        resetCoupon: (state) => {
            state.category = {"id": 0, "name": ''};
            state.title = '';
            state.description = '';
            state.startDate = '';
            state.endDate = '';
            state.amount = '';
            state.price = '';
            state.image = "imageToReplace";
        },
    }
});

export const {
    couponInitialState,
    resetCoupon
} = CouponSlicer.actions;

export default CouponSlicer.reducer;