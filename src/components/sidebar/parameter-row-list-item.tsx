import ListItem from "@mui/material/ListItem";
import ParameterRow from "../rows/parameter-row";
import { ParameterDictionary, RowType } from "./hooks/use-sidebar-data";
import { memo, useMemo } from "react";
import Typography from "@mui/material/Typography";

type ParameterRowListItemProps = {
    dictionary: ParameterDictionary;
    onNameChange: (id: string, type: RowType) => (val: string) => void;
    onDataTypeChange: (id: string, type: RowType) => (val: string) => void;
    onRemoveRow: (id: string, type: RowType) => () => void;
    type: RowType;
};

const ParameterRowListItemComponent = ({
    dictionary,
    onNameChange,
    onDataTypeChange,
    onRemoveRow,
    type
}: ParameterRowListItemProps) => {
    const keys = useMemo(() => Object.keys(dictionary), [dictionary]);
    return (
        <ListItem>
            <div className='flex flex-col gap-2 w-full'>
                {keys.map(row =>
                    <ParameterRow
                        key={dictionary[row].id}
                        parameterNameLabel="Name"
                        parameterNameValue={dictionary[row].name}
                        parameterNameChanged={onNameChange(dictionary[row].id, type)}
                        dataTypeValue={dictionary[row].dataType}
                        dataTypeValueChanged={onDataTypeChange(dictionary[row].id, type)}
                        onDeleted={onRemoveRow(dictionary[row].id, type)} />)}
                {!keys.length && (
                    <div className='w-full'><Typography variant='body2' className='text-center'>No Rows</Typography></div>
                )}
            </div>
        </ListItem>
    );
};

export const ParameterRowListItem = memo(ParameterRowListItemComponent);