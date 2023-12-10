import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TreeItem, TreeItems } from "dnd-kit-sortable-tree";
import { findBlockById, removeBlockById } from "../../components/block/tools";
import { CodeBlock } from "../../components/block/types";

export type ParameterRowType = {
    name: string;
    dataType: string;
    id: string;
    type: 'input' | 'output';
}

type DataSliceState = {
    algorithmName: string;
    inputParameters: ParameterRowType[];
    outputParameters: ParameterRowType[];
    blocks: TreeItems<CodeBlock>;
};

const initialState: DataSliceState = {
    inputParameters: [],
    outputParameters: [],
    algorithmName: '',
    blocks: [],
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
        addBlock: (state, { payload }: PayloadAction<{
            parentId: string | null;
            block: TreeItem<CodeBlock>;
        }>) => {
            if (payload.parentId === null) {
                state.blocks.push(payload.block);
            } else {
                // TODO: Implement
            }
            
        },
        removeBlock: (state, { payload }: PayloadAction<string>) => {
            state.blocks = removeBlockById(state.blocks, payload);
        },
        updateBlock: (state, { payload }: PayloadAction<{ id: string; block: CodeBlock }>) => {
            const found = findBlockById(state.blocks, payload.id);
            if (found) {
                Object.assign(found, payload.block);
            }
        },
    }
});

export const dataReducer = dataSlice.reducer;
export const dataActions = dataSlice.actions;