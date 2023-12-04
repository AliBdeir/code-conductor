//IconButtonComponent.tsx
import { IconButton } from "@mui/material";

const IconButtonComponent = ({ icon: Icon, onClick }) => (
    <IconButton onClick={onClick}>
        <Icon />
    </IconButton>
);

export default IconButtonComponent;