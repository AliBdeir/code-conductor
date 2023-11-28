import { AppBar } from "@mui/material";
import "./header-style.css";
function Toolbar() {
    return (
        <AppBar position="static" id="main-toolbar-outer">
            <div id='main-toolbar-inner'>
                {/* //! PUT THE TITLE IN HERE */}
            </div>
        </AppBar>
    );
}

export default Toolbar;
