// ListItemComponent.tsx
import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';

const ListItemComponent = ({ title, icon: IconComponent, open, children }) => (
    <>
        <Tooltip title={title} placement="right">
            <ListItem>
                <ListItemIcon>
                    <IconComponent />
                </ListItemIcon>
                {open && <ListItemText primary={title} />}
            </ListItem>
        </Tooltip>
        {open && children}
    </>
);

export default ListItemComponent;