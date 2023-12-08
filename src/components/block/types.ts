export enum BlockType {
    Expressions = 'Expressions',
    If = 'IF',
    For = 'FOR',
    While = 'WHILE',
}


export type BaseBlock = {
    id: string;
    type: BlockType;
    label: string;
};

export type ControlBlock = BaseBlock & {
    condition: string;
    children: Block[];
};

export type StatementBlock = BaseBlock & { // Statement block cannot have children
    action: string;
};

export type Block = ControlBlock | StatementBlock;