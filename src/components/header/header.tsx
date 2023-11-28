import { AppBar } from "@mui/material";
import "./header-style.css";
function Toolbar() {
    return (
        <AppBar position="static" id="main-toolbar-outer">
            <div id='main-toolbar-inner'>
                <h1>Code Conductor</h1>
            </div>
        </AppBar>
    );
}

export default Toolbar;
