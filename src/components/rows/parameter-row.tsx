import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export type ParameterRowProps = {
    parameterNameLabel: string;
    parameterNameValue: string;
    parameterNameChanged: (value: string) => void;
    dataTypeValue: string;
    dataTypeValueChanged: (value: string) => void;
    onDeleted: () => void;
}

const ParameterRow = ({
    parameterNameLabel,
    parameterNameValue,
    parameterNameChanged,
    dataTypeValue: dataTypeNameValue,
    dataTypeValueChanged: dataTypeNameChanged,
    onDeleted
}: ParameterRowProps) => {
    return (
        <div className='flex flex-row gap-2'>
            <div>
                <TextField
                    variant='standard'
                    label={parameterNameLabel}
                    value={parameterNameValue}
                    onChange={(e) => parameterNameChanged(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    variant='standard'
                    label='Data Type'
                    value={dataTypeNameValue}
                    onChange={(e) => dataTypeNameChanged(e.target.value)}
                />
            </div>
            <div className='flex justify-center'>
                <IconButton onClick={onDeleted}><DeleteIcon /></IconButton>
            </div>
        </div>
        // <ComponentRow
        //     components={[
        //         {
        //             Component: TextFieldComponent,
        //             props: {
        //                 id: "parameter-name",
        //                 label: parameterNameLabel,
        //                 value: parameterNameValue,
        //                 onChange: (e) => parameterNameChanged(e.target.value)
        //             }
        //         },
        //         {
        //             Component: TextFieldComponent,
        //             props: {
        //                 id: "data-type",
        //                 label: "Data Type",
        //                 value: dataTypeNameValue,
        //                 onChange: (e) => dataTypeNameChanged(e.target.value)
        //             }
        //         },
        //         {
        //             Component: IconButtonComponent,
        //             props: {
        //                 icon: DeleteIcon,
        //                 onClick: onDeleted
        //             }
        //         }
        //     ]}
        // />
    );
};

export default ParameterRow;