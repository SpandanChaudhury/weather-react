import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DayForecast {
    days: number
};

const initialState: DayForecast = {
    days: 6
}

const dayForecastSlice = createSlice({
    name: 'forecastDays',
    initialState,
    reducers: {
        updateDays:(state, action: PayloadAction<number>) => {
            state.days = action.payload
        }
    }
})

export const { updateDays } = dayForecastSlice.actions;
export default dayForecastSlice.reducer;