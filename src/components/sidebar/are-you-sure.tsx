// A "Are you sure" dialog box that pops up when the user tries to reset the state. TypeScript props are onYes, onClose, and open

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

type AreYouSureProps = {
    onYes: () => void;
    onClose: () => void;
    open: boolean;
};

const AreYouSureDialog = (props: AreYouSureProps) => {
    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This will reset the state of the application to the default state.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button onClick={props.onYes}>Yes</Button>
            </DialogActions>
        </Dialog>
    );
}
export default AreYouSureDialog;