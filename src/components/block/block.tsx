import { Card, CardContent, Typography, TextField } from "@mui/material";
import { BlockType } from "./types";
import React from "react";

type BlockProps = {
    type: BlockType; // Defined in ./types.ts
    expressionNumber: number;
    className?: string;
    codeValue: string;
    onCodeValueChanged: (newValue: string) => void;
    descriptionValue: string;
    onDescriptionValueChanged: (newValue: string) => void;
    onTextFieldsBlurred?: () => void;
}

const _Block = (props: BlockProps) => {
    return (
        <div className={props.className}>
            <Card variant='outlined' className='w-full'>
                <CardContent>
                    <Typography variant='subtitle1' color='secondary'>{props.expressionNumber.toFixed(1)} {props.type}</Typography>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'flex-end' }}>
                            {props.type !== BlockType.Expressions && <div><Typography variant='h6'>{props.type}</Typography></div>}
                            <div style={{ flex: '1' }}>
                                <TextField label='Expression' style={{ width: '100%', }} multiline maxRows={8} value={props.codeValue} onChange={(e) => props.onCodeValueChanged(e.target.value)} onBlur={props.onTextFieldsBlurred} />
                            </div>
                        </div>
                        <div>
                            <TextField
                                style={{ width: "100%" }}
                                label="Description or Comments"
                                multiline
                                maxRows={4}
                                value={props.descriptionValue}
                                onChange={(e) => props.onDescriptionValueChanged(e.target.value)}
                                onBlur={props.onTextFieldsBlurred}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

const Block = React.memo(_Block);

export default Block;