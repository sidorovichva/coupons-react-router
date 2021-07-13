import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";
import InputReducer from "./InputSlice";
import DataSlicerReducer from "./DataSlicer";
import DataStorageReducer from "./DataStorageSlice";
import ResponseStatusReducer from "./ResponseStatusSlice"
import HistoryPushReducer from "./HistoryPushSlice"
import UpdateBeanReducer from "./UpdateBeanSlice";

export default configureStore({
    reducer: {
        LoginSlice: LoginReducer,
        InputSlice: InputReducer,
        DataSlicer: DataSlicerReducer,
        DataStorageSlice: DataStorageReducer,
        ResponseStatusSlice: ResponseStatusReducer,
        HistoryPushSlice: HistoryPushReducer,
        UpdateBeanSlice: UpdateBeanReducer
    }
});