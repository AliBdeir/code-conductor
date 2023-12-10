import { TreeItem, TreeItems } from 'dnd-kit-sortable-tree';
import { CodeBlock } from "./types";

export function findBlockById(blocks: TreeItems<CodeBlock>, id: string): TreeItem<CodeBlock> | null {
    for (const block of blocks) {
        if (block.id === id) {
            return block;
        }

        // If it's a ControlBlock, search recursively in its children
        if (block.children) {
            const found = findBlockById(block.children, id);
            if (found) {
                return found;
            }
        }
    }

    // If the block is not found in the array or any of its children, return null
    return null;
}

export function removeBlockById(blocks: TreeItems<CodeBlock>, id: string): TreeItems<CodeBlock> {
    // Filter out the block with the given ID
    let updatedBlocks = blocks.filter(block => block.id !== id);

    // Iterate over the blocks to check and update ControlBlocks
    updatedBlocks = updatedBlocks.map(block => {
        if (block.children) {
            // Recursively remove the block from children
            block.children = removeBlockById(block.children, id);
        }
        return block;
    });

    return updatedBlocks;
}
