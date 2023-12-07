import { createSlice } from "@reduxjs/toolkit";

type LayoutState = {
    showSidebar: boolean;
}

const initialState: LayoutState = {
    showSidebar: true,
}

const layoutSlice = createSlice({
    name: 'layout-slice',
    initialState: initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.showSidebar = !state.showSidebar
        },
    }
})

export const layoutReducers = layoutSlice.reducer;
export const layoutActions = layoutSlice.actions;   