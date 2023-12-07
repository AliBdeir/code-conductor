// ParameterRow.tsx
import ComponentRow from "./component-row";
import TextFieldComponent from "../text-field/text-field";
import IconButtonComponent from "../icon-button/icon-button";
import DeleteIcon from '@mui/icons-material/Delete';

const ParameterRow = ({
    parameterNameLabel,
    parameterNameValue,
    parameterNameChanged,
    dataTypeNameValue,
    dataTypeNameChanged,
    onDeleted
}) => {
    return (
        <ComponentRow
            components={[
                {
                    Component: TextFieldComponent,
                    props: {
                        id: "parameter-name",
                        label: parameterNameLabel,
                        value: parameterNameValue,
                        onChange: (e) => parameterNameChanged(e.target.value)
                    }
                },
                {
                    Component: TextFieldComponent,
                    props: {
                        id: "data-type",
                        label: "Data Type",
                        value: dataTypeNameValue,
                        onChange: (e) => dataTypeNameChanged(e.target.value)
                    }
                },
                {
                    Component: IconButtonComponent,
                    props: {
                        icon: DeleteIcon,
                        onClick: onDeleted
                    }
                }
            ]}
        />
    );
};

export default ParameterRow;