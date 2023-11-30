import BackIcon from '@mui/icons-material/ArrowBackIos';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const Sidebar = () => {
    const theme = useTheme();
    return (
        <Drawer
            variant="persistent"
            anchor='left'
            open={true}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar className='h-16 flex justify-end' style={{ backgroundColor: theme.palette.primary.main }}>
                <IconButton style={{ color: theme.palette.primary.contrastText }}><BackIcon /></IconButton>
            </Toolbar>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItemButton key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
