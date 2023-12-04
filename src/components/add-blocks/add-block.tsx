// AddBlocksComponent.tsx
import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import ListItemComponent from '../sidebar-tile/sidebar-tile'; // Adjust the import path as needed
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddBlocksComponent = ({ open }) => {
    const [blockType, setBlockType] = React.useState('');

    const handleBlockTypeChange = (event) => {
        setBlockType(event.target.value);
    };

    return (
        <ListItemComponent title="Add Blocks" icon={AddCircleOutlineIcon} open={open}>
            {open && (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <FormControl style={{ flex: 1 }} size="small">
                        <InputLabel id="block-type-label">Block Type</InputLabel>
                        <Select
                            labelId="block-type-label"
                            id="block-type-select"
                            value={blockType}
                            label="Block Type"
                            onChange={handleBlockTypeChange}
                            fullWidth
                        >
                            <MenuItem value="While Loop">While Loop</MenuItem>
                            <MenuItem value="If Statement">If Statement</MenuItem>
                            <MenuItem value="If-Else Statement">If-Else Statement</MenuItem>
                            <MenuItem value="For Loop">For Loop</MenuItem>
                            <MenuItem value="Expression">Expression</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" color="primary">
                        Add
                    </Button>
                </div>
            )}
        </ListItemComponent>
    );
};

export default AddBlocksComponent;