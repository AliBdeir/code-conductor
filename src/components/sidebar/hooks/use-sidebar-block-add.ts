import { TreeItem } from "dnd-kit-sortable-tree";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import { dataActions } from "../../../redux/slices/data-slice";
import { useAppDispatch } from "../../../redux/store";
import { BlockType, CodeBlock, isControlBlock } from "../../block/types";

const useSidebarBlockAdd = () => {
    const dispatch = useAppDispatch();
    const [blockType, setBlockTypeState] = useState<BlockType>();
    const setBlockType = (type: BlockType) => {
        setBlockTypeState(type);
    }
    const addBlock = useCallback(() => {
        if (!blockType) {
            toast.error('Please select a block type first', {
                position: 'bottom-left'
            });
        }
        else {
            const block: TreeItem<CodeBlock> = {
                id: uuidv4(),
                type: blockType,
                description: '',
                code: '',
                canHaveChildren: isControlBlock(blockType),
            };
            
            dispatch(dataActions.addBlock({
                parentId: null,
                block,
            }))
        }
    }, [blockType, dispatch]);
    return {
        setBlockType,
        addBlock,
        blockType
    }
    
}

export default useSidebarBlockAdd;