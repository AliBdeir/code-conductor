import {
    SortableTree
} from "dnd-kit-sortable-tree";
import { useAppSelector } from "../../redux/store";
import BlockTreeItemComponent from "./tree-item";
import React from "react";

type BlockTreeComponentProps = {
    className?: string;
}

const _BlockTreeComponent = (props: BlockTreeComponentProps) => {
    const blocks = useAppSelector(x => x.data.blocks);
    return (
        <div className={props.className}>
            <SortableTree
                items={blocks}
                TreeItemComponent={BlockTreeItemComponent}
                onItemsChanged={(items, reason) => {
                    console.log('New Items', items, 'Reason:', reason)
                }}
            />
        </div>
    )
}

const BlockTreeComponent = React.memo(_BlockTreeComponent);

export default BlockTreeComponent;

