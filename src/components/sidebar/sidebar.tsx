import React, { useState } from 'react';
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
//constants
import { drawerWidth } from '../../constants/constants';
//custom components
import ListItemComponent from '../sidebar-tile/sidebar-tile';
import TextFieldComponent from '../text-field/text-field';
import IconButtonComponent from '../icon-button/icon-button';
import AddBlocksComponent from '../add-blocks/add-block';
import ComponentRow from '../component-row/component-row';

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

const Sidebar: React.FC<{ open: boolean, toggleDrawer: () => void }> = ({ open, toggleDrawer }) => {
    const theme = useTheme();

    const [inputRows, setInputRows] = useState<RowItem[]>([]);
    const [outputRows, setOutputRows] = useState<RowItem[]>([]);

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
                <ListItemComponent
                    title="Algorithm Name"
                    icon={LabelIcon}
                    open={open}
                >
                    {/* algo name TextField */}
                    <ComponentRow
                        components={[
                            { Component: TextFieldComponent, props: { id: 'algorithm-name', label: "Algorithm Name" } }
                        ]}
                    />
                </ListItemComponent>
                {/* Input Rows */}
                <ListItemComponent
                    title={<TitleWithIconButton title="Input Params" icon={AddCircleOutlineIcon} onClick={addInput} />}
                    icon={TransitEnterexitIcon}
                    open={open}
                >
                    {inputRows.map((row, index) => (
                        <ReusableRowComponent key={row.id} onRemove={() => removeInput(index)} />
                    ))}
                </ListItemComponent>

                {/* Output Rows */}
                <ListItemComponent
                    title={<TitleWithIconButton title="Output Params" icon={AddCircleOutlineIcon} onClick={addOutput} />}
                    icon={CallMadeIcon}
                    open={open}
                >
                    {outputRows.map((row, index) => (
                        <ReusableRowComponent key={row.id} onRemove={() => removeOutput(index)} />
                    ))}
                </ListItemComponent>
                <AddBlocksComponent open={open} />
            </List>
        </Drawer>
    );
};

export default Sidebar;

const TitleWithIconButton = ({ icon, onClick, title }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        margin: '0 10px' 
    }}>
        <span style={{ margin: 0 }}>{title}</span>
        <IconButtonComponent
            icon={icon}
            onClick={onClick}
        />
    </div>
);

const ReusableRowComponent = ({ onRemove }) => {
    return (
        <ComponentRow
            components={[
                { Component: TextFieldComponent, props: { id: "name", label: "Name" } },
                { Component: TextFieldComponent, props: { id: "data-type", label: "Data Type" } },
                { Component: IconButtonComponent, props: { icon: DeleteIcon, onClick: onRemove } },
            ]}
        />
    );
};