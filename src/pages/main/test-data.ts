import { TreeItems } from "dnd-kit-sortable-tree";
import { CodeBlock, BlockType } from "../../components/block/types";

// export const bubbleSortBlocks: Block[] = [
//     {
//         id: 'block1',
//         type: BlockType.For,
//         action: '',
//         childrenBlocks: [],
//         condition: '',
//         description: '',
//     },
//     {
//         id: 'block2',
//         type: BlockType.While,
//         action: '',
//         childrenBlocks: [],
//         condition: '',
//         description: '',
//     }
// ]

export const bubbleSortBlocks: TreeItems<CodeBlock> = [
    {
        id: 'block1',
        type: BlockType.For,
        description: 'Outer loop for bubble sort',
        code: 'for i = 0 to n',
        children: [
            {
                id: 'block2',
                type: BlockType.For,
                description: 'Inner loop for bubble sort',
                code: 'for j = 0 to n - i - 1',
                children: [
                    {
                        id: 'block3',
                        type: BlockType.If,
                        description: 'Check if current element is greater than the next',
                        code: 'if array[j] > array[j + 1]',
                        children: [
                            {
                                id: 'block4',
                                type: BlockType.Expressions,
                                description: 'Swap the elements',
                                code: 'swap array[j] and array[j + 1]'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];