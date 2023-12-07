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
    children: BaseBlock[];
  };

  export type ControlBlock = BaseBlock & {
    condition: string;
  };
  
  export type StatementBlock = BaseBlock & {
    action: string;
  };