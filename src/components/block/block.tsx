import { Card, CardContent, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import React from "react";
import { ParameterRowType } from "../../redux/slices/data-slice";
import { useAppSelector } from "../../redux/store";
import { BlockType, isControlBlock } from "./types";
import { useTheme } from '@mui/material/styles';

type BlockProps = {
    type: BlockType; // Defined in ./types.ts
    // expressionNumber: string;
    className?: string;
    codeValue: string;
    onCodeValueChanged: (newValue: string) => void;
    descriptionValue: string;
    onDescriptionValueChanged: (newValue: string) => void;
    onTextFieldsBlurred?: () => void;
    isOver?: boolean;
}

const _Block = (props: BlockProps) => {
    const controlBlock = isControlBlock(props.type);
    const { algorithmName, outputParameters, inputParameters } = useAppSelector(x => x.data);
    const theme = useTheme();
    return (
        <div className={props.className}>
            <Card variant='outlined' className={clsx('w-full')} style={{ background: props.isOver ? theme.palette.primary.light : undefined }}>
                <CardContent>
                    {props.type === BlockType.Method ? (
                        <MethodBlock algorithmName={algorithmName} inputParameters={inputParameters} outputParameters={outputParameters} />
                    ) : (
                        <div className='w-full flex flex-col gap-1'>
                            <div className='w-full flex flex-row gap-2 items-end'>
                                {/* <Typography variant='subtitle1' color='secondary'>{props.expressionNumber}</Typography> */}
                                {controlBlock && <div><Typography variant='h6'>{props.type}</Typography></div>}
                                <div style={{ flex: '1' }}>
                                    <TextField
                                        variant='standard'
                                        label={controlBlock ? 'Condition' : 'Expression'}
                                        className='w-full'
                                        multiline
                                        maxRows={8}
                                        value={props.codeValue}
                                        onChange={(e) => props.onCodeValueChanged(e.target.value)} onBlur={props.onTextFieldsBlurred} />
                                </div>
                            </div>
                            <div>
                                <TextField
                                    variant='standard'
                                    className='w-full'
                                    label="Description or Comments"
                                    multiline
                                    maxRows={4}
                                    value={props.descriptionValue}
                                    onChange={(e) => props.onDescriptionValueChanged(e.target.value)}
                                    onBlur={props.onTextFieldsBlurred}
                                />
                            </div>
                        </div >
                    )}
                </CardContent >
            </Card>
        </div >
    )
}

const MethodBlock = React.memo((props: { algorithmName: string, inputParameters: ParameterRowType[], outputParameters: ParameterRowType[] }) => {
    return (
        <div className='w-full'>
            <Typography variant='h5'>{props.algorithmName}</Typography>
            <div className='flex flex-row gap-1'>
                <Typography variant='subtitle1' fontWeight='bold'>Input:</Typography>
                <Typography variant='subtitle1' fontStyle='italic' className='ml-2'>
                    {props.inputParameters.length ? props.inputParameters.map(x => `${x.dataType} ${x.name}`).join(', ') : 'None'}
                </Typography>
            </div>
            <div className='flex flex-row gap-1'>
                <Typography variant='subtitle1' fontWeight='bold'>Output:</Typography>
                <Typography variant='subtitle1' fontStyle='italic' className='ml-2'>
                    {props.outputParameters.length ? props.outputParameters.map(x => `${x.dataType} ${x.name}`).join(', ') : 'None'}
                </Typography>
            </div>
        </div>
    )
});
MethodBlock.displayName = 'MethodBlock';

const Block = React.memo(_Block);

export default Block;