export enum BlockType {
    Expressions = 'Expression(s)',
    If = 'IF',
    Else = 'ELSE',
    For = 'FOR',
    While = 'WHILE',
    Method = 'METHOD',
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