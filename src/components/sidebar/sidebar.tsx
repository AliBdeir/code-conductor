import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CallMadeIcon from '@mui/icons-material/CallMade';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LabelIcon from '@mui/icons-material/Label';
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
import { ParameterRowListItem } from './parameter-row-list-item';
//custom components
import TitleWithIconButton from '../titlewithicon/sidebar-tile';
import useSidebarMetaData from './hooks/use-sidebar-meta-data';
import useSidebarBlockAdd from './hooks/use-sidebar-block-add';
import { BlockType } from '../block/types';
import AreYouSureDialog from './are-you-sure';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { dataActions } from '../../redux/slices/data-slice';


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


const Sidebar = ({ open, toggleDrawer }) => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const { inputDictionary, outputDictionary, onAddRow, onRemoveRow, onNameChange, onDataTypeChange, onSave, algorithmName, onAlgorithmNameChange } = useSidebarMetaData();
    const { addBlock, setBlockType, blockType } = useSidebarBlockAdd();
    const [areYouSureOpen, setAreYouSureOpen] = useState(false);
    const onClear = () => {
        dispatch(dataActions.clearDataState());
        setAreYouSureOpen(false);
    }
    return (
        <Drawer variant="permanent" open={open} sx={{
            "& .MuiDrawer-paper": { borderWidth: 0 }
        }}>
            <DrawerHeader style={{ backgroundColor: theme.palette.primary.main, borderRight: '1px solid rgb(0, 0, 0, 0.2)' }}>
                <IconButton onClick={toggleDrawer} style={{ color: theme.palette.primary.contrastText }} size='large'>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <div style={{ borderRight: `1px solid ${theme.palette.divider}` }}>
                <List>
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
                                value={algorithmName}
                                onChange={(e) => onAlgorithmNameChange(e.target.value)}
                            />
                        </ListItem>
                    )}
                    {!open && <Divider />}
                    {/* Input Parameters */}
                    <Tooltip title="Input Parameters" placement="right">
                        <ListItem>
                            <ListItemIcon>
                                <TransitEnterexitIcon />
                            </ListItemIcon>
                            {open && <TitleWithIconButton title="Input Params" icon={<AddCircleOutlineIcon />} onClick={onAddRow('input')} />}
                        </ListItem>
                    </Tooltip>
                    {open && (
                        <ParameterRowListItem
                            type="input"
                            onNameChange={onNameChange}
                            onDataTypeChange={onDataTypeChange}
                            onRemoveRow={onRemoveRow}
                            dictionary={inputDictionary}
                        />
                    )}
                    {!open && <Divider />}
                    {/* Output Parameters */}
                    <Tooltip title="Output Parameters" placement="right">
                        <ListItem>
                            <ListItemIcon>
                                <CallMadeIcon />
                            </ListItemIcon>
                            {open && <TitleWithIconButton title="Output Params" icon={<AddCircleOutlineIcon />} onClick={onAddRow('output')} />}
                        </ListItem>
                    </Tooltip>
                    {open && (
                        <ParameterRowListItem
                            type="output"
                            onNameChange={onNameChange}
                            onDataTypeChange={onDataTypeChange}
                            onRemoveRow={onRemoveRow}
                            dictionary={outputDictionary}
                        />
                    )}
                    {open && <ListItem>
                        <Button variant='contained' color='primary' fullWidth onClick={onSave}>Save</Button>
                    </ListItem>}
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
                                    value={blockType ?? ''}
                                    label="Block Type"
                                    fullWidth
                                    onChange={(e) => setBlockType(e.target.value as BlockType)}

                                >
                                    <MenuItem value={BlockType.While}>While Loop</MenuItem>
                                    <MenuItem value={BlockType.If}>If Statement</MenuItem>
                                    <MenuItem value={BlockType.For}>For Loop</MenuItem>
                                    <MenuItem value={BlockType.Expressions}>Expression</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant="outlined" color="primary" onClick={addBlock}>
                                Add
                            </Button>
                        </ListItem>
                    )}
                    {open && (
                        <>
                            <Divider />
                            <ListItem>
                                <Button fullWidth variant='contained' color='error' onClick={() => setAreYouSureOpen(true)}>Clear Data</Button>
                            </ListItem>
                        </>
                    )}
                </List>
            </div>
            <AreYouSureDialog onClose={() => setAreYouSureOpen(false)} onYes={onClear} open={areYouSureOpen} />
        </Drawer >
    );
};

export default Sidebar;