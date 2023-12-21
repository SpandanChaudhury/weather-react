import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface searchingState {
    value: string
}

const initialState: searchingState = {
    value: ''
}

export const searchingSlice = createSlice({
    name: 'searching',
    initialState,
    reducers: {
        updateSearch: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }

});

export const { updateSearch } = searchingSlice.actions;
export default searchingSlice.reducer;

