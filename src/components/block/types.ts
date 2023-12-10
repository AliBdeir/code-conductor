export enum BlockType {
    Expressions = 'Expression(s)',
    If = 'IF',
    For = 'FOR',
    While = 'WHILE',
}
export type CodeBlock = {
    id: string;
    type: BlockType;
    description: string;
    code: string;
};

export function isControlBlock(blockType: BlockType){
    return blockType === BlockType.If || blockType === BlockType.For || blockType === BlockType.While;
}