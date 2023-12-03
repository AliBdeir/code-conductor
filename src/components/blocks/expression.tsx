import { Card, CardContent, TextField, Typography } from "@mui/material"

let expressionNum = 1.0; //THIS IS SO THAT THE EXP NUMBER CAN CHANGE DYNAMICALLY AS THE USER ADDS MORE EXPS TO THE CONDUCTOR


const ExpressionBlock = () => {
    return (
        <div>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='subtitle1' color='secondary'>{expressionNum.toFixed(1)} Expression</Typography>

                    <div style={{ width: '100%' }}>
                        <TextField label='Expression' style={{
                             width: '100%',
                             marginBottom: "10px"
                        }} />

                        {/* <TextField 
                            style={{
                                width: "100%"
                            }}
                            
                            id="required"
                            variant="outlined"
                            label="Description or Comments"
                            defaultValue=""
                        /> */}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ExpressionBlock;