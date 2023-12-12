import { AppBar, FormControl, MenuItem, Select, Typography } from "@mui/material";
import MuiToolbar from '@mui/material/Toolbar';
import { useEffect, useState } from "react";
import { dataActions } from "../../redux/slices/data-slice";
import { bubbleSortState } from "../../redux/slices/dummy-data/bubbleSort";
import { useAppDispatch } from "../../redux/store";
import "./header-style.css";
import { selectionSortState } from "../../redux/slices/dummy-data/selectionSort";
import { mergeSortState } from "../../redux/slices/dummy-data/mergeSort";


const examples = [{
    name: 'Bubble Sort',
    state: bubbleSortState,
}, {
    name: 'Selection Sort',
    state: selectionSortState,
}, {
    name: 'Merge Sort',
    state: mergeSortState,
}]

function Toolbar() {
    const [selectedExample, setSelectedExample] = useState<number | ''>('');
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (selectedExample !== '') {
            dispatch(dataActions.setDataState(examples[selectedExample].state));
        }
    }, [selectedExample, dispatch]);
    return (
        <AppBar position="static" id="main-toolbar-outer">
            <MuiToolbar className='gap-16 w-full'>
                <Typography variant='h5'>Code Conductor</ Typography>
                <div className='w-64 bg-white p-2'>
                    <FormControl fullWidth>
                        <Select
                            fullWidth
                            labelId="asdf"
                            value={selectedExample}
                            variant="standard"
                            color='secondary'
                            displayEmpty
                            renderValue={(value) => (value as unknown as string) === '' ? "Examples" : examples[value].name}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setSelectedExample(e.target.value as number)
                            }}>
                            {examples.map((example, index) => (
                                <MenuItem key={index} value={index}>{example.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </MuiToolbar>
        </AppBar >
    );
}

export default Toolbar;
