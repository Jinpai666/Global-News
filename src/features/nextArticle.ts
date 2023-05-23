import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NextArticleIdState = {
    value: string;
}

const initialState: NextArticleIdState = {
    value: "",
};

export const nextArticleIdSlice = createSlice({
    name: "nextArticleId",
    initialState,
    reducers: {
        setNextArticleId: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setNextArticleId } = nextArticleIdSlice.actions;

export default nextArticleIdSlice.reducer;
