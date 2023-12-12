import { TreeItem } from "dnd-kit-sortable-tree";
import { CodeBlock, BlockType } from "../../../components/block/types";
import { DataSliceState } from "../data-slice";

const mergeSortAlgorithm: TreeItem<CodeBlock> = {
    id: 'merge-sort-root',
    type: BlockType.While,
    description: 'Root block for Merge Sort',
    code: 'function mergeSort(array, left, right)',
    children: [
        {
            id: 'base-condition',
            type: BlockType.If,
            description: 'Base condition - if the left index is smaller than the right index',
            code: 'if (left < right)',
            children: [
                {
                    id: 'find-middle',
                    type: BlockType.Expressions,
                    description: 'Find the middle point to divide the array',
                    code: 'let middle = Math.floor((left + right) / 2)',
                },
                {
                    id: 'sort-first-half',
                    type: BlockType.Expressions,
                    description: 'Sort first half',
                    code: 'mergeSort(array, left, middle)',
                },
                {
                    id: 'sort-second-half',
                    type: BlockType.Expressions,
                    description: 'Sort second half',
                    code: 'mergeSort(array, middle + 1, right)',
                },
                {
                    id: 'merge-halves',
                    type: BlockType.Expressions,
                    description: 'Merge the sorted halves',
                    code: 'merge(array, left, middle, right)',
                }
            ]
        }
    ]
};

export const mergeSortState: DataSliceState = {
    inputParameters: [{
        dataType: 'int[]',
        name: 'array',
        id: 'array1',
        type: 'input',
    }],
    outputParameters: [],
    algorithmName: 'Merge Sort',
    blocks: [mergeSortAlgorithm],
};
