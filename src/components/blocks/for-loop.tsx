import { Card, CardContent, Typography, TextField} from "@mui/material"; //ADDED TEXTFIELD IMPORT

let loopNum = 1.0; //THIS IS SO THAT THE LOOP NUMBER CAN CHANGE DYNAMICALLY AS THE USER ADDS MORE LOOPS TO THE CONDUCTOR

const ForLoopBlock = () => {
    return (
        <div>
            <Card variant='outlined' >
                <CardContent>
                    <Typography variant='subtitle1' color='secondary'> {loopNum.toFixed(1)} FOR loop</Typography>
        
                    <div style={{ width: "100%"}}>
                        <Typography variant="h6" style={{ float: "left" }}>for</Typography>

                        <TextField 
                            style={{
                                marginBottom: "10px",
                                float: "right",
                                width: "calc(100% - 33px)"  //adjust width dynamically
                            }}                
                            
                            id="required"
                            placeholder='e.g. "i = 0 to 10"'
                        />

                        <TextField 
                            style={{
                                width: "100%"
                            }}
                            
                            id="required"
                            variant="outlined"
                            label="Description and Comments"
                            defaultValue=""
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ForLoopBlock;