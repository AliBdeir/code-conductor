import { Card, CardContent, Typography, TextField } from "@mui/material";
import { BlockType } from "./types";

type BlockProps = {
    type: BlockType; // Defined in ./types.ts
    expressionNumber: number;
}

const Block = (props: BlockProps) => {
    return (
        <div>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='subtitle1' color='secondary'>{props.expressionNumber.toFixed(1)} {props.type}</Typography>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'flex-end' }}>
                            {props.type !== BlockType.Expressions && <div><Typography variant='h6'>{props.type}</Typography></div>}
                            <div style={{ flex: '1' }}><TextField label='Expression' style={{ width: '100%', }} multiline maxRows={8} /></div>
                        </div>
                        <div>
                            <TextField
                                style={{ width: "100%" }}
                                label="Description or Comments"
                                multiline
                                maxRows={4}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default Block;