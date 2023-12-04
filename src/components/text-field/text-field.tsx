// TextFieldComponent.tsx
import TextField from '@mui/material/TextField';

const TextFieldComponent = ({ id, label }) => (
    <TextField
        id={id}
        label={label}
        variant="outlined"
        size="small"
        fullWidth
        margin="dense"
    />
);

export default TextFieldComponent;
