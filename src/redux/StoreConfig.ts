import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";
import InputReducer from "./InputSlice";
import ResponseStatusReducer from "./ResponseStatusSlice"
import HistoryPushReducer from "./HistoryPushSlice"
import UpdateBeanReducer from "./UpdateBeanSlice";
import UniqueIndexReducer from "./UniqueIndexSlice";
import PressEnterReducer from "./PressEnterSlice";

export default configureStore({
    reducer: {
        LoginSlice: LoginReducer,
        InputSlice: InputReducer,
        ResponseStatusSlice: ResponseStatusReducer,
        HistoryPushSlice: HistoryPushReducer,
        UpdateBeanSlice: UpdateBeanReducer,
        UniqueIndexSlice: UniqueIndexReducer,
        PressEnterSlice: PressEnterReducer
    }
});