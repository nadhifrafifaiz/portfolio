import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "../features/settings/settingSlice";

const store = configureStore({
    reducer: {
        setting: settingSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch