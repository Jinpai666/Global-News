import { createSlice } from "@reduxjs/toolkit";

interface LoadState {
    value: boolean;
}

export const loadSlice = createSlice({
    name: "sortAsTile",
    initialState: { value: true } as LoadState,
    reducers: {
        handleLoadClick: (state) => {
            state.value = !state.value;
        },
    },
});

export const { handleLoadClick } = loadSlice.actions;

export default loadSlice.reducer;
