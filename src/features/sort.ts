import { createSlice } from "@reduxjs/toolkit";

type SortState = {
    value: boolean;
}


export const sortSlice = createSlice({
    name: "sortAsTile",
    initialState: { value: true } as SortState,
    reducers: {
        handleSortClick: (state) => {
            state.value = !state.value;
        },
    },
});

export const { handleSortClick } = sortSlice.actions;

export default sortSlice.reducer;
