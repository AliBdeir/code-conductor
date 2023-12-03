import { Card, CardContent, Typography, TextField } from "@mui/material";

let ifNum = 1.0; 

const IfStatementBlock = () => {
    return (
        <div>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='subtitle1' color='secondary'>{ifNum.toFixed(1)} IF statement</Typography>

                    <div style={{ width: "100%"}}>
                        <Typography variant="h6" style={{ float: "left" }}>for</Typography>

                        <TextField 
                            style={{
                                marginBottom: "10px",
                                float: "right",
                                width: "calc(100% - 33px)"  //adjust width dynamically
                            }}                
                            
                            id="required"
                            placeholder=' e.g. "if x < 5"'
                        />

                        <TextField 
                            style={{
                                width: "100%"
                            }}
                            
                            id="required"
                            variant="outlined"
                            label="Description or Comments"
                        />
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default IfStatementBlock;