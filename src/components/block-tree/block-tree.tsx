import {
    SortableTree, TreeItems
} from "dnd-kit-sortable-tree";
import { ItemChangedReason } from "dnd-kit-sortable-tree/dist/types";
import React, { useMemo } from "react";
import { dataActions } from "../../redux/slices/data-slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { BlockType, CodeBlock } from "../block/types";
import BlockTreeItemComponent from "./tree-item";
import clsx from "clsx";
import Typewriter from 'typewriter-effect';


type BlockTreeComponentProps = {
    className?: string;
}

const _BlockTreeComponent = (props: BlockTreeComponentProps) => {
    const blocks = useAppSelector(x => x.data.blocks);
    const treeBlocks = useMemo<TreeItems<CodeBlock>>(() => {
        if (blocks[0]?.id === 'root') return blocks;
        return [
            {
                id: 'root',
                type: BlockType.Method,
                code: '',
                description: '',
                canHaveChildren: true,
                children: blocks,
                collapsed: false,
            }
        ]
    }, [blocks]);
    const dispatch = useAppDispatch();
    const itemsChanged = (items: TreeItems<CodeBlock>, reason: ItemChangedReason<CodeBlock>) => {
        console.log('Items changed:', items, 'Reason:', reason);
        dispatch(dataActions.setBlocks(items));
    }
    return (
        <div className={clsx(props.className, 'flex flex-col')}>
            <div className='w-full'>
                <SortableTree
                    indicator={false}
                    items={treeBlocks}
                    TreeItemComponent={BlockTreeItemComponent}
                    onItemsChanged={itemsChanged}
                    indentationWidth={40}
                />
            </div>
            {!blocks.length && <div className='w-full flex-1 flex flex-col items-center'>
                <div>
                    <Typewriter
                        options={{
                            strings: ['bzbz.... designs....', 'start.... designing.....', 'bzbzbz... choose an example from the header... bz.'],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'text-2xl text-center opacity-30',
                        }}
                    />
                </div>
                <div>
                    <img src='./logo.png' className='opacity-30' />
                </div>
            </div>}
        </div>
    )
}

const BlockTreeComponent = React.memo(_BlockTreeComponent);

export default BlockTreeComponent;

