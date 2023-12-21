import { configureStore } from "@reduxjs/toolkit";
import searchingSlice from "./slices/searchingTerm";
import daysOfForecast from "./slices/daysOfForecast";
export const store = configureStore({
    reducer: {
        searching: searchingSlice,
        forecast: daysOfForecast
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch  = typeof store.dispatch;
