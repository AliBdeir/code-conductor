import { Card, CardContent, TextField, Typography } from "@mui/material"

const ExpressionBlock = () => {
    return (
        <div>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='subtitle1' color='secondary'>1.0 Expression</Typography>
                    <div style={{ width: '100%' }}>
                        <TextField label='Expression' style={{ width: '100%' }} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ExpressionBlock;