import {
    SortableTree, TreeItems
} from "dnd-kit-sortable-tree";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import BlockTreeItemComponent from "./tree-item";
import React from "react";
import { CodeBlock } from "../block/types";
import { dataActions } from "../../redux/slices/data-slice";
import { ItemChangedReason } from "dnd-kit-sortable-tree/dist/types";

type BlockTreeComponentProps = {
    className?: string;
}

const _BlockTreeComponent = (props: BlockTreeComponentProps) => {
    const blocks = useAppSelector(x => x.data.blocks);
    const dispatch = useAppDispatch();
    const itemsChanged = (items: TreeItems<CodeBlock>, reason: ItemChangedReason<CodeBlock>) => {
        console.log('Items changed:', items, 'Reason:', reason);
        dispatch(dataActions.setBlocks(items));
    }
    return (
        <div className={props.className}>
            <SortableTree
                items={blocks}
                TreeItemComponent={BlockTreeItemComponent}
                onItemsChanged={itemsChanged}
            />
        </div>
    )
}

const BlockTreeComponent = React.memo(_BlockTreeComponent);

export default BlockTreeComponent;

