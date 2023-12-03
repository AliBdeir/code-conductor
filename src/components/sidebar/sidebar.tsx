import { IconButton, Divider, List } from '@mui/material';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LabelIcon from '@mui/icons-material/Label';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import CallMadeIcon from '@mui/icons-material/CallMade';
//custom components
import ListItemComponent from '../sidebar-tile/sidebar-tile';
import TextFieldComponent from '../text-field/text-field';
import IconButtonComponent from '../icon-button/icon-button';
import AddBlocksComponent from '../add-blocks/add-block';

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
        <Drawer variant="permanent" open={open} >
            <DrawerHeader style={{ backgroundColor: theme.palette.primary.main }}>
                <IconButton onClick={toggleDrawer}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List sx={{ padding: '0 16px' }}>
                {listItems.map(({ title, icon, fields, buttons }) => (
                    <ListItemComponent title={title} icon={icon} open={open}>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                            {fields.map(field => (
                                <TextFieldComponent key={field.id} {...field} />
                            ))}
                            {buttons && buttons.map(button => (
                                <IconButtonComponent key={button.id} {...button} />
                            ))}
                        </div>
                    </ListItemComponent>
                ))}
                <AddBlocksComponent open={open} />
            </List>

        </Drawer>
    );
};

export default Sidebar;

const listItems = [
    {
        title: "Algorithm Name",
        icon: LabelIcon,
        fields: [
            { id: "algorithm-name", label: "Algorithm Name", type: "text" }
        ]
    },
    {
        title: "Input Parameters",
        icon: TransitEnterexitIcon,
        fields: [
            { id: "input-name", label: "Inputs", type: "text" },
            { id: "input-data-type", label: "Data Type", type: "text" }
        ],
        buttons: [
            { id: 'add', icon: AddCircleOutlineIcon, onClick: () => {/* handle add */ } },
            { id: 'delete', icon: DeleteIcon, onClick: () => {/* handle delete */ } },
        ]
    },
    {
        title: "Output Parameters",
        icon: CallMadeIcon,
        fields: [
            { id: "input-name", label: "Inputs", type: "text" },
            { id: "input-data-type", label: "Data Type", type: "text" }
        ],
        buttons: [
            { id: 'add', icon: AddCircleOutlineIcon, onClick: () => {/* handle add */ } },
            { id: 'delete', icon: DeleteIcon, onClick: () => {/* handle delete */ } },
        ]
    },
];
