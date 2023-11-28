import { AppBar } from "@mui/material";
import "./toolbar-style.css";
function Toolbar() {
    return (
        <AppBar position="static" id="main-toolbar-outer">
            <div className='main-toolbar-inner'>
                Hello world!
            </div>
        </AppBar>
    );
}

export default Toolbar;
