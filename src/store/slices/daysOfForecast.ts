import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DayForecast {
    // days: Promise<number> | number
    days: number
};

const initialState: DayForecast = {
    // days: checkDays()
    days: JSON.parse(localStorage.getItem('days') || '6')
}


async function checkDays() : Promise<number> {
    if('caches' in window)
    {
        const cache = await caches.open('days');
        const daysResponse = await cache.match('requested-days');
        if(daysResponse)
        {
            const days = await daysResponse.text();
            console.log(days);
            return parseInt(days);

        }
        else
        {
            return 6;
        }

    }
    else
        return 6;
}

// checkDays();
const dayForecastSlice = createSlice({
    name: 'forecastDays',
    initialState,
    reducers: {
        updateDays:(state, action: PayloadAction<number>) => {
            console.log('updating')
            state.days = action.payload
            localStorage.setItem('days', JSON.stringify(state.days));
        }
    }
})

export const { updateDays } = dayForecastSlice.actions;
export default dayForecastSlice.reducer;