import { Block } from "./types";

export function findBlockById(blocks: Block[], id: string): Block | null {
    for (const block of blocks) {
        if (block.id === id) {
            return block;
        }

        // If it's a ControlBlock, search recursively in its children
        if ("children" in block) {
            const found = findBlockById(block.children, id);
            if (found) {
                return found;
            }
        }
    }

    // If the block is not found in the array or any of its children, return null
    return null;
}

export function removeBlockById(blocks: Block[], id: string): Block[] {
    // Filter out the block with the given ID
    let updatedBlocks = blocks.filter(block => block.id !== id);

    // Iterate over the blocks to check and update ControlBlocks
    updatedBlocks = updatedBlocks.map(block => {
        if ("children" in block) {
            // Recursively remove the block from children
            block.children = removeBlockById(block.children, id);
        }
        return block;
    });

    return updatedBlocks;
}
