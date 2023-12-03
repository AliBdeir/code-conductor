import { Card, CardContent, Typography, TextField } from "@mui/material";

let whileNum = 1.0;

const WhileLoopBlock = () => {
    return (
        <div>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='subtitle1' color='secondary'>{whileNum.toFixed(1)} WHILE loop</Typography>

                    <div style={{ width: "100%"}}>
                        <Typography variant="h6" style={{ float: "left" }}>for</Typography>

                        <TextField 
                            style={{
                                marginBottom: "10px",
                                float: "right",
                                width: "calc(100% - 33px)"  //adjust width dynamically
                            }}                
                            
                            id="required"
                            placeholder=' e.g. "while x ≠ 7"'
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

export default WhileLoopBlock;