// TextFieldComponent.tsx
import TextField from '@mui/material/TextField';

const TextFieldComponent = ({ id, label, value, onChange }) => (
    <TextField
        id={id}
        label={label}
        variant="outlined"
        size="small"
        fullWidth
        margin="dense"
        value={value}        
        onChange={onChange} 
    />
);

export default TextFieldComponent;
