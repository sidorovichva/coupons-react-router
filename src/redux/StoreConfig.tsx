import { configureStore } from "@reduxjs/toolkit";
import DropDownMenuReducer from "./DropDownMenuSlice";
import LoginReducer from "./LoginSlice";
import PopUpWindowsReducer from "./PopUpWindowsSlicer";
import MainScreenReducer from "./MainScreenSlicer";
import InputAsStringReducer from "./formComponents/InputAsStringSlicer";
import AxiosSlicerReducer from "./AxiosSlicer";
import CouponSlicerReducer from "./CouponSlicer";
import DataSlicerReducer from "./DataSlicer";
import AxiosLoginSliceReducer from "./axios/AxiosLoginSlice";
import DataStorageReducer from "./DataStorageSlice";
import RequestErrorSliceReducer from "./RequestErrorSlice"

export default configureStore({
    reducer: {
        DropDownMenuSlice: DropDownMenuReducer,
        LoginSlice: LoginReducer,
        PopUpWindowsSlicer: PopUpWindowsReducer,
        MainScreenSlicer: MainScreenReducer,
        InputAsStringSlicer: InputAsStringReducer,
        AxiosSlicer: AxiosSlicerReducer,
        CouponSlicer: CouponSlicerReducer,
        DataSlicer: DataSlicerReducer,
        AxiosLoginSlice: AxiosLoginSliceReducer,
        DataStorageSlice: DataStorageReducer,
        RequestErrorSlice: RequestErrorSliceReducer
    }
});