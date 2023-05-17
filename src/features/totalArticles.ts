import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const articleCountSlice = createSlice({
    name: "totalArticles",
    initialState: 0,
    reducers: {
        countArticles: (state, action: PayloadAction<number>) => {
            return  action.payload;
        },
    },
});

export const { countArticles } = articleCountSlice.actions;

export default articleCountSlice.reducer;
