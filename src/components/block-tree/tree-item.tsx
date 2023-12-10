import { TreeItemComponentProps, SimpleTreeItemWrapper } from "dnd-kit-sortable-tree";
import React, { useState } from "react";
import BlockComponent from "../block/block";
import { CodeBlock } from "../block/types";
import { useAppDispatch } from "../../redux/store";
import { dataActions } from "../../redux/slices/data-slice";

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
                    code: block.codeValue,
                    description: block.descriptionValue,
                    id: props.item.id,
                    type: props.item.type
                }
            }))
        }
        return(
            <SimpleTreeItemWrapper {...props} ref={ref}>
                <BlockComponent
                    className="w-full"
                    expressionNumber={0}
                    type={props.item.type}
                    codeValue={block.codeValue}
                    onCodeValueChanged={(newValue) => setBlock({...block, codeValue: newValue})}
                    descriptionValue={block.descriptionValue}
                    onDescriptionValueChanged={(newValue) => setBlock({...block, descriptionValue: newValue})}
                    onTextFieldsBlurred={onBlur}
                />
            </SimpleTreeItemWrapper>
        );
});

const BlockTreeItemComponent = React.memo(_BlockTreeItemComponent);

export default BlockTreeItemComponent;