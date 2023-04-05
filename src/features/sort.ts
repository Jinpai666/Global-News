import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
    value: boolean;
}

interface HandleSortClickAction extends PayloadAction {
    payload: undefined;
}

export const sortSlice = createSlice({
    name: "sort",
    initialState: { value: true } as SortState,
    reducers: {
        handleSortClick: (state) => {
            state.value = !state.value;
        },
    },
});

export const { handleSortClick } = sortSlice.actions;

export default sortSlice.reducer;
