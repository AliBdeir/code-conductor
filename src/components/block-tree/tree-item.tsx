import clsx from "clsx";
import { FolderTreeItemWrapper, TreeItemComponentProps } from "dnd-kit-sortable-tree";
import React, { useState } from "react";
import { dataActions } from "../../redux/slices/data-slice";
import { useAppDispatch } from "../../redux/store";
import BlockComponent from "../block/block";
import { CodeBlock } from "../block/types";
import { FlattenedItem } from "dnd-kit-sortable-tree/dist/types";

const _BlockTreeItemComponent = React.forwardRef<
    HTMLDivElement,
    TreeItemComponentProps<CodeBlock>
>((props, ref) => {
    const [block, setBlock] = useState<{
        codeValue: string;
        descriptionValue: string;
    }>({
        codeValue: props.item.code,
        descriptionValue: props.item.description
    });
    const dispatch = useAppDispatch();
    const onBlur = () => {
        dispatch(dataActions.updateBlock({
            id: props.item.id,
            block: {
                ...block,
                code: block.codeValue,
                description: block.descriptionValue,
                id: props.item.id,
                type: props.item.type
            }
        }))
    }

    return (
        <FolderTreeItemWrapper {...props} showDragHandle={false} hideCollapseButton contentClassName="!p-0 !border-0 !mb-2 !w-full !max-w-3xl" ref={ref} >
            <BlockComponent
                className={clsx("w-full max-w-3xl", props.className)}
                // expressionNumber={props.parent ? getBlockNumber(props.parent) : '0'}
                type={props.item.type}
                codeValue={block.codeValue}
                onCodeValueChanged={(newValue) => setBlock({ ...block, codeValue: newValue })}
                descriptionValue={block.descriptionValue}
                onDescriptionValueChanged={(newValue) => setBlock({ ...block, descriptionValue: newValue })}
                onTextFieldsBlurred={onBlur}
                isOver={props.isOver}
            />
        </FolderTreeItemWrapper >
    );
});

// const getBlockNumber = (item: FlattenedItem<CodeBlock>, ancestry: number[] = []): string => {
//     // Construct the block number for the current item
//     const currentBlockNumber = [...ancestry, item.index + 1].join(".");

//     return currentBlockNumber;
// };

const BlockTreeItemComponent = React.memo(_BlockTreeItemComponent);

export default BlockTreeItemComponent;