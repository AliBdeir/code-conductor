import { TreeItem } from "dnd-kit-sortable-tree";
import { CodeBlock, BlockType } from "../../../components/block/types";
import { DataSliceState } from "../data-slice";

const bubbleSortAlgorithm: TreeItem<CodeBlock> = {
    id: 'bubble-sort-root',
    type: BlockType.While,
    description: 'While a swap has occurred',
    code: 'while (swapped)',
    children: [
        {
            id: 'initialization',
            type: BlockType.Expressions,
            canHaveChildren: false,
            description: 'Initialize swapped flag',
            code: 'swapped = false'
        },
        {
            id: 'loop',
            type: BlockType.For,
            description: 'Outer loop for bubble sort',
            code: 'for (let i = 0; i < n - 1; i++)',
            children: [
                {
                    id: 'comparison',
                    type: BlockType.If,
                    description: 'Compare adjacent elements',
                    code: 'if (array[i] > array[i + 1])',
                    children: [
                        {
                            id: 'swap',
                            type: BlockType.Expressions,
                            description: 'Swap elements',
                            code: '[array[i], array[i + 1]] = [array[i + 1], array[i]]; swapped = true;',
                            canHaveChildren: false,
                        }
                    ]
                }
            ]
        }
    ]
};

export const bubbleSortState: DataSliceState = {
    inputParameters: [{
        dataType: 'int[]',
        name: 'array',
        id: 'array1',
        type: 'input',
    }],
    outputParameters: [],
    algorithmName: 'Bubble Sort',
    blocks: [bubbleSortAlgorithm],
}

export default bubbleSortAlgorithm;