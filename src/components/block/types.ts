export enum BlockType {
    Expressions = 'Expressions',
    If = 'IF',
    For = 'FOR',
    While = 'WHILE',
}

export function isControlBlock(blockType: BlockType){
    return blockType === BlockType.If || blockType === BlockType.For || blockType === BlockType.While;
}


export type CodeBlock = {
    id: string;
    type: BlockType;
    description: string;
    code: string;
};