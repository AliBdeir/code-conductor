import {  IconButton, Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import LabelIcon from '@mui/icons-material/Label';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import CallMadeIcon from '@mui/icons-material/CallMade';

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

    return (
        <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: theme.palette.primary.main }}>
          <IconButton onClick={toggleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
                {/* Algorithm Name */}
                <Tooltip title="Algorithm Name" placement="right">
                    <ListItemButton>
                        <ListItemIcon>
                            <LabelIcon />
                        </ListItemIcon>
                        {open && <ListItemText primary="Algorithm Name" />}
                    </ListItemButton>
                </Tooltip>
                {open && (
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
                        {open && <ListItemText primary="Input Parameters" />}
                    </ListItemButton>
                </Tooltip>
                {open && (
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
                        {open && <ListItemText primary="Output Parameters" />}
                    </ListItemButton>
                </Tooltip>
                {open && (
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
                        {open && <ListItemText primary="Add Blocks" />}
                    </ListItemButton>
                </Tooltip>
                {open && (
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

