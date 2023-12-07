import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
        // toggleSidebar: (state) => {
        //     state.showSidebar = !state.showSidebar
        // },
        setSidebar: (state, action: PayloadAction<boolean>) => {
            state.showSidebar = action.payload;
        }
    }
})

export const layoutReducers = layoutSlice.reducer;
export const layoutActions = layoutSlice.actions;   