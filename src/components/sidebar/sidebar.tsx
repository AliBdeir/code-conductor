
import CallMadeIcon from '@mui/icons-material/CallMade';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LabelIcon from '@mui/icons-material/Label';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import { Divider, IconButton, List, ListItem, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import MuiDrawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { CSSObject, Theme, styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
//custom components
import ComponentRow from '../component-row/component-row';
import TextFieldComponent from '../text-field/text-field';
import IconButtonComponent from '../icon-button/icon-button';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

interface RowItem {
    id: string;
}

const Sidebar = ({ open, toggleDrawer }) => {
    const theme = useTheme();

    const [inputRows, setInputRows] = useState<RowItem[]>([]);
    const [outputRows, setOutputRows] = useState<RowItem[]>([]);

    const [parameterName, setParameterName] = useState('');
    const [dataTypeName, setDataTypeName] = useState('');

    const handleParameterNameChange = (newValue) => {
        console.log(newValue);
        setParameterName(newValue);
    };

    const handleDataTypeNameChange = (newValue) => {
        console.log(newValue);
        setDataTypeName(newValue);
    };

    const addInput = () => {
        setInputRows(inputRows => [...inputRows, { id: `input-${inputRows.length}` }]);
    };

    const removeInput = (index: number) => {
        setInputRows(inputRows => inputRows.filter((_, i) => i !== index));
    };

    const addOutput = () => {
        setOutputRows(outputRows => [...outputRows, { id: `output-${outputRows.length}` }]);
    };

    const removeOutput = (index: number) => {
        setOutputRows(outputRows => outputRows.filter((_, i) => i !== index));
    };

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader style={{ backgroundColor: theme.palette.primary.main }}>
                <IconButton onClick={toggleDrawer}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List sx={{ padding: '0 16px' }}>
                {/* Algorithm Name */}
                <Tooltip title="Algorithm Name" placement="right">
                    <ListItem>
                        <ListItemIcon>
                            <LabelIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Algorithm Name" />}
                    </ListItem>
                </Tooltip>
                {open && (
                    <ListItem>
                        <TextField
                            id="algorithm-name"
                            label="Algorithm Name"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </ListItem>
                )}
                <Divider />
                {/* Input Parameters */}
                <Tooltip title="Input Parameters" placement="right">
                    <ListItem>
                        <ListItemIcon>
                            <TransitEnterexitIcon />
                        </ListItemIcon>
                        {open && <TitleWithIconButton title="Input Params" icon={AddCircleOutlineIcon} onClick={addInput} />}
                    </ListItem>
                </Tooltip>
                {open && (
                    <ListItem>
                         <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {inputRows.map((row, index) => (
                        <ParameterRow
                        parameterNameLabel="Name"
                        parameterNameValue={parameterName}
                        parameterNameChanged={handleParameterNameChange}
                        dataTypeNameValue={dataTypeName}
                        dataTypeNameChanged={handleDataTypeNameChange}
                        onDeleted={() => removeInput(index)}
                    />
                        ))}
                        </div>
                    </ListItem>
                )}
                <Divider />
                {/* Output Parameters */}
                <Tooltip title="Output Parameters" placement="right">
                    <ListItem>
                        <ListItemIcon>
                            <CallMadeIcon />
                        </ListItemIcon>
                        {open && <TitleWithIconButton title="Output Params" icon={AddCircleOutlineIcon} onClick={addOutput} />}
                    </ListItem>
                </Tooltip>
                {open && (
                    <ListItem>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {outputRows.map((row, index) => (
                        <ParameterRow
                        parameterNameLabel="Name"
                        parameterNameValue={parameterName}
                        parameterNameChanged={handleParameterNameChange}
                        dataTypeNameValue={dataTypeName}
                        dataTypeNameChanged={handleDataTypeNameChange}
                        onDeleted={() => removeOutput(index)}
                    />
                        ))}
                        </div>
                    </ListItem>
                )}
                <Divider />
                {/* Add Blocks */}
                <Tooltip title="Add Blocks" placement="right">
                    <ListItem>
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Add Blocks" />}
                    </ListItem>
                </Tooltip>
                {open && (
                    <ListItem>
                        <FormControl style={{ flex: 1, marginRight: '10px' }} size="small">
                            <InputLabel id="block-type-label">Block Type</InputLabel>
                            <Select
                                labelId="block-type-label"
                                id="block-type-select"
                                value=""
                                label="Block Type"
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
                    </ListItem>
                )}
            </List>
        </Drawer>
    );
};

export default Sidebar;

const TitleWithIconButton = ({ icon, onClick, title }) => (
    <div >
        <span style={{ margin: 0 }}>{title}</span>
        <IconButtonComponent
            icon={icon}
            onClick={onClick}
        />
    </div>
);

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
