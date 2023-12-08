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
    algorithmName: string;
    inputParameters: ParameterRowType[];
    outputParameters: ParameterRowType[];
};

const initialState: DataSliceState = {
    inputParameters: [],
    outputParameters: [],
    algorithmName: '',
}

const dataSlice = createSlice({
    initialState,
    name: 'data-slice',
    reducers: {
        setParameters: (state, action: PayloadAction<{ inputParameters: ParameterRowType[], outputParameters: ParameterRowType[] }>) => {
            state.inputParameters = action.payload.inputParameters;
            state.outputParameters = action.payload.outputParameters;
        },
        setAlgorithmName: (state, action: PayloadAction<string>) => {
            state.algorithmName = action.payload;
        },
    }
});

export const dataReducer = dataSlice.reducer;
export const dataActions = dataSlice.actions;