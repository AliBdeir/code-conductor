import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ParameterRowType = {
    name: string;
    dataType: string;
    id: string;
    type: 'input' | 'output';
}

// type ParameterDictionary = {
//     [key: string]: 
// }

type DataSliceState = {
    inputParameters: ParameterRowType[];
    outputParameters: ParameterRowType[];
};

const initialState: DataSliceState = {
    inputParameters: [],
    outputParameters: [],
}

const dataSlice = createSlice({
    initialState,
    name: 'data-slice',
    reducers: {
        setParameters: (state, action: PayloadAction<{ inputParameters: ParameterRowType[], outputParameters: ParameterRowType[] }>) => {
            state.inputParameters = action.payload.inputParameters;
            state.outputParameters = action.payload.outputParameters;
        },
    }
});

export const dataReducer = dataSlice.reducer;
export const dataActions = dataSlice.actions;