import { TreeItem } from "dnd-kit-sortable-tree";
import { BlockType, CodeBlock } from "../../../components/block/types";
import { DataSliceState } from "../data-slice";

const selectionSortAlgorithm: TreeItem<CodeBlock> = {
    id: 'selection-sort-root',
    type: BlockType.While,
    description: 'Outer loop to move boundary of unsorted subarray',
    code: 'for (let i = 0; i < n - 1; i++)',
    children: [
                {
                    id: 'min-index',
                    type: BlockType.Expressions,
                    description: 'Find the minimum element in unsorted array',
                    code: 'let min_idx = i',
                },
                {
                    id: 'inner-loop',
                    type: BlockType.For,
                    description: 'Inner loop to find the minimum element',
                    code: 'for (let j = i + 1; j < n; j++)',
                    children: [
                        {
                            id: 'compare-min',
                            type: BlockType.If,
                            description: 'Compare the found minimum with the current element',
                            code: 'if (array[j] < array[min_idx])',
                            children: [
                                {
                                    id: 'update-min',
                                    type: BlockType.Expressions,
                                    description: 'Update min_idx if the element is smaller',
                                    code: 'min_idx = j',
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'swap',
                    type: BlockType.Expressions,
                    description: 'Swap the found minimum element with the first element',
                    code: '[array[min_idx], array[i]] = [array[i], array[min_idx]]',
                }
            ]
};

export const selectionSortState: DataSliceState = {
    inputParameters: [{
        dataType: 'int[]',
        name: 'array',
        id: 'array1',
        type: 'input',
    }],
    outputParameters: [],
    algorithmName: 'Selection Sort',
    blocks: [selectionSortAlgorithm],
};
