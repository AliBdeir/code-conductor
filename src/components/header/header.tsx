import { AppBar, Typography } from "@mui/material";
import "./header-style.css";
import MuiToolbar from '@mui/material/Toolbar';


function Toolbar() {
    return (
        <AppBar position="static" id="main-toolbar-outer">
            <MuiToolbar>
                <Typography variant='h4'>Code Conductor</ Typography>
            </MuiToolbar>
        </AppBar>
    );
}

export default Toolbar;
