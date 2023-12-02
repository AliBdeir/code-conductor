import BackIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Toolbar, IconButton, Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import LabelIcon from '@mui/icons-material/Label';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import CallMadeIcon from '@mui/icons-material/CallMade';


const drawerWidth = 280;
const thinDrawerWidth = 60;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: thinDrawerWidth,
    [theme.breakpoints.up('sm')]: {
        width: thinDrawerWidth,
    },
});

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const theme = useTheme();

    const handleToggleDrawer = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <Drawer
            variant="persistent"
            anchor='left'
            open={true}
            sx={{
                ...(isCollapsed ? closedMixin(theme) : openedMixin(theme)),
                '& .MuiDrawer-paper': {
                    width: isCollapsed ? thinDrawerWidth : drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar
                className='h-16'
                style={{
                    backgroundColor: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <IconButton
                    style={{
                        color: theme.palette.primary.contrastText,
                    }}
                    onClick={handleToggleDrawer}
                >
                    {isCollapsed ? <MenuIcon /> : <BackIcon />}
                </IconButton>
            </Toolbar>


            <Divider />
            <List>
                {/* Algorithm Name */}
                <Tooltip title="Algorithm Name" placement="right">
                    <ListItemButton>
                        <ListItemIcon>
                            <LabelIcon />
                        </ListItemIcon>
                        {!isCollapsed && <ListItemText primary="Algorithm Name" />}
                    </ListItemButton>
                </Tooltip>
                {!isCollapsed && (
                    <ListItemButton>
                        <TextField
                            id="algorithm-name"
                            label="Algorithm Name"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </ListItemButton>
                )}
                <Divider />
                {/* Input Parameters */}
                <Tooltip title="Input Parameters" placement="right">
                    <ListItemButton>
                        <ListItemIcon>
                            <TransitEnterexitIcon />
                        </ListItemIcon>
                        {!isCollapsed && <ListItemText primary="Input Parameters" />}
                    </ListItemButton>
                </Tooltip>
                {!isCollapsed && (
                    <ListItemButton>
                        <TextField
                            id="input-name"
                            label="Inputs"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            id="input-data-type"
                            label="Data Type"
                            variant="outlined"
                            size="small"
                            fullWidth
                            margin="dense"
                        />
                    </ListItemButton>
                )}
                <Divider />
                {/* Output Parameters */}
                <Tooltip title="Output Parameters" placement="right">
                    <ListItemButton>
                        <ListItemIcon>
                            <CallMadeIcon />
                        </ListItemIcon>
                        {!isCollapsed && <ListItemText primary="Output Parameters" />}
                    </ListItemButton>
                </Tooltip>
                {!isCollapsed && (
                    <ListItemButton>
                        <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                            <TextField
                                id="output-name"
                                label="Outputs"
                                variant="outlined"
                                size="small"
                                style={{ flex: 1 }}
                                margin="dense"
                            />
                            <TextField
                                id="output-data-type"
                                label="Data Type"
                                variant="outlined"
                                size="small"
                                style={{ flex: 1 }}
                                margin="dense"
                            />
                        </div>
                    </ListItemButton>
                )}
                <Divider />
                {/* Add Blocks */}
                <Tooltip title="Add Blocks" placement="right">
                    <ListItemButton>
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        {!isCollapsed && <ListItemText primary="Add Blocks" />}
                    </ListItemButton>
                </Tooltip>
                {!isCollapsed && (
                    <ListItemButton>
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
                    </ListItemButton>
                )}
            </List>
        </Drawer>
    );
};

export default Sidebar;